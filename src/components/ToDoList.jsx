import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ToDoItem from './ToDoItem';

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return <section className="main">
      <ul className="todo-list">
        {this.props.todos.map(item =>
          <ToDoItem key={item.get('text')}
                    text={item.get('text')} />
        )}
      </ul>
    </section>
  }
};
