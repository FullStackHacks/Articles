import { expect } from 'chai';
import {
  ADD_TODO,
  ARCHIVE_TODO,
  UPDATE_TODO,
  addTodoAction,
  archiveTodoAction,
  updateTodoAction,
} from '../../../src/actions/todoActions';


describe("src/actions/      todoActions.js", () => {


  it("ADD_TODO constant has the expected value", () => {

    expect(ADD_TODO).to.equal("TODOS@ADD_TODO");

  });

  it("ARCHIVE_TODO constant has the expected value", () => {

    expect(ARCHIVE_TODO).to.equal("TODOS@ARCHIVE_TODO");

  });

  it("UPDATE_TODO constant has the expected value", () => {

    expect(UPDATE_TODO).to.equal("TODOS@UPDATE_TODO");

  });

  it("addTodoAction creates a properly formatted action", () => {

    let todo = "write mocha test";
    let expectedAction = {
      type: ADD_TODO,
      payload: {
        todo,
      }
    };

    let actualAction = addTodoAction(todo);


    expect(actualAction).to.deep.equal(expectedAction);

  });

  it("archiveTodoAction creates a properly formatted action", () => {

    let id = 0;
    let expectedAction = {
      type: ARCHIVE_TODO,
      payload: {
        id,
      }
    };

    let actualAction = archiveTodoAction(id);


    expect(actualAction).to.deep.equal(expectedAction);

  });

  it("updateTodoAction creates a properly formatted action", () => {

    let updatedTodo = "switch from npm to yarn";
    let id = 0;
    let expectedAction = {
      type: UPDATE_TODO,
      payload: {
        id,
        updatedTodo,
      }
    };

    let actualAction = updateTodoAction(id, updatedTodo);


    expect(actualAction).to.deep.equal(expectedAction);

  });

});
