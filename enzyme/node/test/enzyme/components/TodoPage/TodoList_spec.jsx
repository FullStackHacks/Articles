import { Provider } from 'react-redux';
import React from 'react';
import rootReducer from '../../../../src/reducers/todoReducer';
import { fromJS } from 'immutable';
import { createStore } from 'redux';
import { expect } from 'chai';
import TodoList from '../../../../src/components/TodoPage/TodoList';

import { mount } from 'enzyme';



describe('ENZYME    src/components/TodoPage/     <TodoList />', () => {

  let todoList;
  let initialState;

  before( () => {

    initialState = fromJS({
      todos:['Clean my room', 'Do homework', 'Thanks my parents for my life']
    });

    let store = createStore(rootReducer, initialState);

    todoList = mount(
      <TodoList
        todos={initialState.get('todos')}
      />
    );

  });

  it('Todo list contains todo props', () => {

    console.log(todoList.props());
    expect(todoList.prop('todos')).to.equal(initialState.get('todos'));

  });

  it('Todo list containts TodoList dumb component', () => {


    let ul = todoList.find( 'ul');

    expect(ul).to.not.equal(undefined);

    let todos =  ul.find('li');

    expect(todos.length).to.equal(3);

  });

});

