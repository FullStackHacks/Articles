import { Provider } from 'react-redux';
import React from 'react';
import rootReducer from '../../../../src/reducers/todoReducer';
import { fromJS } from 'immutable';
import { createStore } from 'redux';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import TodoForm from '../../../../src/components/TodoPage/TodoForm';



describe('src/components/TodoPage/     <TodoForm />', () => {

  let todoForm;
  let initialState;
  let wasClicked;
  let submitHandler = function() {

    wasClicked = true;

  };

  before( () => {

    initialState = fromJS({
    });

    let store = createStore(rootReducer, initialState);
    wasClicked = false;


    todoForm = TestUtils.renderIntoDocument(
      <TodoForm
        submitHandler={submitHandler}
      />
    );

  });

  it('Form contains correct props', () => {

    expect(todoForm.props).to.deep.equal({submitHandler:submitHandler});

  });

  it('Contains the correct html tags', () => {


    let form = TestUtils.findRenderedDOMComponentWithTag(
      todoForm,
      'form'
    );

    expect(form).to.not.equal(undefined);

    let input = TestUtils.findRenderedDOMComponentWithTag(
      todoForm,
      'input'
    );

    expect(input).to.not.equal(undefined);

    let btn = TestUtils.findRenderedDOMComponentWithTag(
      todoForm,
      'button'
    );

    expect(btn).to.not.equal(undefined);

  });


  it('on submit handler is fired when submit button is clicked', () => {

    expect(wasClicked).to.be.false;

    let btn = TestUtils.findRenderedDOMComponentWithTag(
      todoForm,
      'form'
    );
    TestUtils.Simulate.submit(btn);

    expect(wasClicked).to.be.true;


  });

});
