import React from 'react'
import '@atlaskit/css-reset'
import Dashboard from './components/Dashboard'
import Column from './components/Column'

import initialData from './tasks-data';

function App() {
  const state = initialData


  return state.columnOrder.map(columnId => {
    const column = state.columns[columnId]; //This is each specific column which column-1 has 4 tasks

    const tasks = column.tasksIds.map(taskId => state.tasks[taskId]);

    return <Column key={column.id} column={column} tasks={tasks} />
  });
}

export default App;
