import { shallow } from 'enzyme';
import TodoPage from '../../../src/pages/TodoPage';
import { expect } from 'chai';
import React from 'react';


describe('ENMZYME    src/pages/   <TodoPage />' , () => {

  let todoPage;

  before( () => {

    todoPage = shallow(
      <TodoPage />
    );

  });


  it('contains TodoFormContainer', () => {

    let todoFormContainer = todoPage.find('TodoFormContainer');
    expect(todoFormContainer).to.not.equal(undefined);

  });

  it('contains TodoListContainer', () => {

    let todoListContainer = todoPage.find('TodoListContainer');
    expect(todoListContainer).to.not.equal(undefined);

  });

});
