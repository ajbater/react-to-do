import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ToDoHeader from '../../src/components/ToDoHeader';
import {expect} from 'chai';

const {renderIntoDocument,
       scryRenderedDOMComponentsWithTag,
       Simulate} = TestUtils;

describe('ToDoHeader', () => {
  it('invokes a callback on submit', () => {
    var addedItem = ''
    const addItem = (item) => addedItem = item;
    const component = renderIntoDocument(
      <ToDoHeader addItem={addItem} />
    );

    const input = component.refs.addToDoInput;
    input.value = 'This is a new item';
    Simulate.change(input);
    Simulate.keyPress(input, {key: "Enter", keyCode: 13, which: 13});

    expect(addedItem).to.equal('This is a new item');
  });
});
