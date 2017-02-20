import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  _handleKeyPress: function(e) {
    if (e.key === 'Enter' && this.refs.addToDoInput.value !== '') {
      return this.props.addItem(
        this.refs.addToDoInput.value
      );
    }
  },
  render: function () {
    return <header className="header">
      <h1>todos</h1>
      <input className="new-todo"
             ref="addToDoInput"
             autofocus
             autocomplete="off"
             placeholder="What needs to be done?"
             onKeyPress = {this._handleKeyPress} />
    </header>
  }
});
