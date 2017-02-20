import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';

import ToDoApp from './components/ToDoApp';

const todos = List.of(
  Map({id: 1, text: 'React', status: 'active', editing: 'false'}),
  Map({id: 1, text: 'Redux', status: 'active', editing: 'false'}),
  Map({id: 1, text: 'Immutable', status: 'active', editing: 'false'})
);

const filter = 'all';

ReactDOM.render(
  <ToDoApp todos={todos} filter={filter} />,
  document.getElementById("app")
);
