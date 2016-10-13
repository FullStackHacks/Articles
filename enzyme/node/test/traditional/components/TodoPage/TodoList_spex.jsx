import { Provider } from 'react-redux';
import React from 'react';
import rootReducer from '../../../../src/reducers/todoReducer';
import { fromJS } from 'immutable';
import { createStore } from 'redux';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import TodoList from '../../../../src/components/TodoPage/TodoList';



describe('src/components/TodoPage/     <TodoList />', () => {

  let todoList;
  const initialState;

  before( () => {

    initialState = fromJS({
      todos:['Clean my room', 'Do homework', 'Thanks my parents for my life']
    });

    store = createStore(rootReducer, initialState);

    todoList = TestUtils.renderIntoDocument(
      <TodoList
        todos={initialState.get('todos')}
      />
    );

  });

  it('Todo list contains todo props', () => {

    expect(todoList.props.todos).to.equal(initialState.get('todos'));

  });

  it('Todo list containts TodoList dumb component', () => {


    let ul = TestUtils.findRenderedDOMComponentWithTag(
      todoList,
      'ul'
    );

    expect(ul).to.not.equal(undefined);

    let todos = TestUtils.scryRenderedDOMComponentsWithTag(
      ul,
      'li'
    );

    expect(todos.length).to.equal(3);

  });

});

