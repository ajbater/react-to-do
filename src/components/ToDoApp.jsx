import React from 'react';
import ToDoList from './ToDoList'
import ToDoHeader from './ToDoHeader'

export default class ToDoApp extends React.Component {
  render() {
    return <div>
      <section className="todoapp">
        <ToDoHeader />
        <ToDoList todos={this.props.todos} filter={this.props.filter} />
      </section>
    </div>
  }
};
