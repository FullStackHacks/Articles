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
  let inputChange;
  let inputChangeHandler = function () {

    inputChange = true;

  };

  before( () => {

    initialState = fromJS({
    });

    let store = createStore(rootReducer, initialState);
    wasClicked = false;
    inputChange = false;


    todoForm = TestUtils.renderIntoDocument(
      <TodoForm
        submitHandler={submitHandler}
        inputChangeHandler={inputChangeHandler}
        inputValue="hello"
      />
    );

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

    let form = TestUtils.findRenderedDOMComponentWithTag(
      todoForm,
      'form'
    );
    TestUtils.Simulate.submit(form);

    expect(wasClicked).to.be.true;


  });

  it('value is controlled by prop', () => {

    let input = TestUtils.findRenderedDOMComponentWithTag(
      todoForm,
      'input'
    );

    expect(input.value).to.equal('hello');

  });

  it('input change is properly called', () => {


    expect(inputChange).to.be.false;

    let input = TestUtils.findRenderedDOMComponentWithTag(
      todoForm,
      'input'
    );
    input.value = 'new';
    TestUtils.Simulate.change(input);

    expect(inputChange).to.be.true;

  });

});
