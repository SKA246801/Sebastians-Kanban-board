import React, { useState } from 'react'
import {v4 as uuid} from "uuid"
import '@atlaskit/css-reset'
import List  from './components/List/List'
import store from './utils/store'
import StoreApi from './utils/storeApi'
import InputContainer from './components/Input/InputContainer'
import{makeStyles} from '@material-ui/core/styles'
import { DragDropContext } from 'react-beautiful-dnd'

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    background: '#f7f9f9',
    overflowY: 'auto',
  }
}))

function App() {
  // This is pulling all our data. Eventually I am going to want to create a Kanban board component
  // That has everything in this file so we just call Kanban.
  const [data, setData] = useState(store);
  const classes = useStyle();

  const addMoreCard = (content, listId) => {
    const newCardId = uuid()

    const newCard = {
      id: newCardId,
      content,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      list: {
        ...data.lists,
        [listId]: list,
      },
    }
    setData(newState)
  };

  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };

    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList
      }
    }
    setData(newState);
  }

  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const onDragEnd = (result) => {
    const {destination, source, draggableId} = result;

    if(!destination) {
      return
    }

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
      )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newState)
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        list: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        }
      };
      setData(newState);
    }
  }

  return (
    <StoreApi.Provider value={{addMoreCard, addMoreList, updateListTitle}}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={classes.root}>
          {data.listIds.map((listId) => {
            const list = data.lists[listId]
            return <List list={list} key={listId}/>
          })}
          <InputContainer type="list" />
        </div>
      </DragDropContext>
    </StoreApi.Provider>
  )
}

export default App;
