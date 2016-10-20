import React from 'react';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import TodoPage from '../../../../src/pages/TodoPage';
import TodoFormContainer from '../../../../src/components/TodoPage/TodoFormContainer';
import TodoListContainer from '../../../../src/components/TodoPage/TodoListContainer';


describe('src/pages/     <TodoPage />', () => {

  let todoPage;

  before(() => {

    todoPage = TestUtils.renderIntoDocument(
      <TodoPage />
    );

  });

  it('contains <TodoFormContiner />', () => {

    let todoFormContainer = TestUtils.findRenderedComponentWithType(TodoFormContainer);

    expect(TodoListContainer).to.not.equal(undefined);

  });

  it('contains <TodoListContiner />', () => {

    let todoListContainer = TestUtils.findRenderedComponentWithType(TodoListContainer);

    expect(TodoListContainer).to.not.equal(undefined);

  });

});
