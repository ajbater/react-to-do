import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';
import TextInput from './TextInput';

export default class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    var itemClass = classNames({
      'todo': true,
      'completed': this.props.isCompleted
    });
    return <li className={itemClass}>
      <div className="view">
        <input type="checkbox"
          className="toggle"/>
        <label htmlFor="todo">
          {this.props.text}
        </label>
        <button className="destroy"></button>
      </div>
      <TextInput />
      </li>
  }
};
