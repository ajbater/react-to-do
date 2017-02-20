import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TextInput from '../../src/components/TextInput';
import {expect} from 'chai';

const {renderIntoDocument,
       scryRenderedDOMComponentsWithTag,
       Simulate} = TestUtils;

describe('TextInput', () => {
  it('invokes a callback when pressing enter', () => {
    const text = 'React';
    var hasDoneEditing = false;
    const doneEditing = () => hasDoneEditing = true;
    const component = renderIntoDocument(
      <TextInput text={text} doneEditing={doneEditing}/>
    );
    const input = component.refs.itemInput
    Simulate.keyDown(input, {key: 'Enter', keyCode: 13, which: 13});

    expect(hasDoneEditing).to.equal(true);
  });
});
