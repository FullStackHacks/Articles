import { Provider } from 'react-redux';
import React from 'react';
import rootReducer from '../../../../src/reducers/todoReducer';
import { fromJS } from 'immutable';
import { createStore } from 'redux';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import TodoListContainer from '../../../../src/components/TodoPage/TodoListContainer';
import TodoList from '../../../../src/components/TodoPage/TodoList';



describe('src/components/TodoPage/     <TodoListContainer />', () => {

  let todoListContainer;
  let initialState;

  before( () => {

    initialState = fromJS({
      todos:['Clean my room', 'Do homework', 'Thanks my parents for my life']
    });

    let store = createStore(rootReducer, initialState);

    todoListContainer = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoListContainer />
      </Provider>
    );

  });


  it('Todo list containts TodoList dumb component and passes in correct props', () => {


    let todoList = TestUtils.findRenderedComponentWithType(
      todoListContainer,
      TodoList
    );

    expect(todoList).to.not.equal(undefined);
    expect(todoList.props.todos).to.equal(initialState.get('todos'));

  });

});
