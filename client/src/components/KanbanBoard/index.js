import React from 'react'
import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'

import Column from '../Column'
import initialData from '../../tasks-data';

export default class KanbanBoard extends React.Component {
  state = initialData

  onDragEnd = result => {

  }

  render() {
      return (
          <DragDropContext onDragEnd={this.onDragEnd}>
              {this.state.columnOrder.map(columnId => {
                  const column = this.state.columns[columnId]; //This is each specific column which column-1 has 4 tasks
                  const tasks = column.tasksIds.map(taskId => this.state.tasks[taskId]);
                  return <Column key= {column.id} column={column} tasks={tasks} />
              })}
          </DragDropContext>
      );
  }
}


