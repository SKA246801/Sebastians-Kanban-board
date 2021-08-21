import React, { useState } from 'react'
import {v4 as uuid} from "uuid"
import '@atlaskit/css-reset'
import List  from './components/List/List'
import store from './utils/store'
import StoreApi from './utils/storeApi'
import InputContainer from './components/Input/InputContainer'
import{makeStyles} from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    backgroun: '#f7f9f9',
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

  return (
    <StoreApi.Provider value={{addMoreCard, addMoreList}}>
      <div className={classes.root}>
        {data.listIds.map((listId) => {
          const list = data.lists[listId]
          return <List list={list} key={listId}/>
        })}
        <InputContainer type="list" />
      </div>
    </StoreApi.Provider>
  )
}

export default App;
