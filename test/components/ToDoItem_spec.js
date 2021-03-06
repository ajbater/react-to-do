import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ToDoItem from '../../src/components/ToDoItem';
import {expect} from 'chai';

const {renderIntoDocument,
       scryRenderedDOMComponentsWithTag,
       Simulate} = TestUtils;

describe('ToDoItem', () => {
  it('renders an item', () => {
    const text = 'React';
    const component = renderIntoDocument(
      <ToDoItem text={text} />
    );
    const todo = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(todo.length).to.equal(1);
    expect(todo[0].textContent).to.contain('React');
  });

  it('strikes through the item if it is completed', () => {
    const text = 'React';
    const component = renderIntoDocument(
      <ToDoItem text={text} isCompleted={true}/>
    );
    const todo = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(todo[0].classList.contains('completed')).to.equal(true);
  });

  it('should look different when editing', () => {
    const text = 'React';
    const component = renderIntoDocument(
      <ToDoItem text={text} isEditing={true}/>
    );
    const todo = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(todo[0].classList.contains('editing')).to.equal(true);
  });

  it('should be checked if the item is completed', () => {
    const text = 'React';
    const text2 = 'Redux';
    const component = renderIntoDocument(
      <ToDoItem text={text} isCompleted={true}/>,
      <ToDoItem text={text2} isCompleted={false}/>
    );
    const input = scryRenderedDOMComponentsWithTag(component, 'input');

    expect(input[0].checked).to.equal(true);
    expect(input[1].checked).to.equal(false);
  });

  it('invokes a callback when the delete button is clicked', () => {
    const text = 'React';
    var deleted = false;
    // a mocked deleteItem function
    const deleteItem = () => deleted = true;
    const component = renderIntoDocument(
      <ToDoItem text={text} deleteItem={deleteItem}/>
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[0]);

    // we expect that the deleteItem function has been called
    expect(deleted).to.equal(true);
  });

  it('invokes callback when checkbox is clicked', () => {
    const text = 'React';
    var isChecked = false;
    // a mocked toggleComplete function
    const toggleComplete = () => isChecked = true;
    const component = renderIntoDocument(
      <ToDoItem text={text} toggleComplete={toggleComplete}/>
    );
    const checkboxes = scryRenderedDOMComponentsWithTag(component, 'input');
    Simulate.click(checkboxes[0]);

    expect(isChecked).to.equal(true);
  });

  it('invokes a callback when the text is double clicked', () => {
    var text = 'React';
    const editItem = () => text = 'Redux';
    const component = renderIntoDocument(
      <ToDoItem text={text} editItem={editItem}/>
    );
    const label = component.refs.text
    Simulate.doubleClick(label);

    expect(text).to.equal('Redux');
  });
});
