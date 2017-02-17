import React from 'react';
import ToDoItem from './ToDoItem';

export default class ToDoList extends React.Component {
  render() {
    <section className="main">
      <ul className="todo-list">
        {this.props.todos.map(item=>
          <ToDoItem key={item.get('text')}
                    key="item.get('text')" />
        )}
      </ul>
    </section>
  }
}
