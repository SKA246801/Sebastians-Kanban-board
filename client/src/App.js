import React from 'react'
import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import Dashboard from './components/Dashboard'
import KanbanBoard from './components/KanbanBoard'
import Column from './components/Column'

function App() {
  return (
    <KanbanBoard/>
  )
}

export default App;
