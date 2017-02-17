import React from 'react';
import ToDoList from './ToDoList'

export default class ToDoApp extends React.Component {
  render () {
    return <div>
      <section className="todoapp">
        <ToDoList todos={this.props.todos} />
      </section>
    </div>
  }
};
