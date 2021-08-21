import React, { useState } from 'react'
import {v4 as uuid} from "uuid"
import '@atlaskit/css-reset'
import List  from './components/List/List'
import store from './utils/store'
import StoreApi from './utils/storeApi'

function App() {
  // This is pulling all our data. Eventually I am going to want to create a Kanban board component
  // That has everything in this file so we just call Kanban.
  const [data, setData] = useState(store)

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

  return (
    <StoreApi.Provider value={{addMoreCard}}>
      <div>
        {data.listIds.map((listId) => {
          const list = data.lists[listId]

          return <List list={list} key={listId}/>

        })}
      </div>
    </StoreApi.Provider>
  )
}

export default App;
