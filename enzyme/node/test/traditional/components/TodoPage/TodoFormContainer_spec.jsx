import { Provider } from 'react-redux';
import React from 'react';
import rootReducer from '../../../../src/reducers/todoReducer';
import { fromJS } from 'immutable';
import { createStore } from 'redux';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import TodoFormContainer from '../../../../src/components/TodoPage/TodoFormContainer';
import TodoForm from '../../../../src/components/TodoPage/TodoForm';



describe('src/components/TodoPage/     <TodoFormContainer />', () => {

  let todoFormContainer;
  let initialState;

  before( () => {

    initialState = fromJS({
      todos:['Clean my room', 'Do homework', 'Thanks my parents for my life']
    });

    let store = createStore(rootReducer, initialState);

    todoFormContainer = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoFormContainer />
      </Provider>
    );

  });


  it('Todo list containts TodoForm dumb component and passes in correct props', () => {


    let todoForm = TestUtils.findRenderedComponentWithType(
      todoFormContainer,
      TodoForm
    );

    expect(todoForm).to.not.equal(undefined);
    expect(todoForm.props.todos).to.equal(initialState.get('todos'));
    expect(todoForm.props.submitHandler).to.equal(todoFormContainer.submitHandler);
    expect(todoForm.props.inputChangeHandler).to.equal(todoFormContainer.inputChangeHandler);
    expect(todoForm.props.inputValue).to.equal(todoFormContainer.inputValue);

  });

});

