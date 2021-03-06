import todoReducer from '../../../src/reducers/todoReducer';
import { expect } from 'chai';
import {
  addTodoAction,
  archiveTodoAction,
  updateTodoAction,
} from '../../../src/actions/todoActions';
import { Map, fromJS } from 'immutable';


describe('src/reducers/     todoReducer.js', () => {

  it('ADD_TODO adds the todos list', () => {

    const initialState = Map({});
    let todo1 = "Call your mother and tell how great she is";

    let action = addTodoAction(todo1);

    const newState = todoReducer(initialState, action);

    const expectedState = fromJS({
      todos: [todo1],
    });

    expect(newState).to.equal(expectedState);

    let todo2 = "Order your girl freind flowers";

    action = addTodoAction(todo2);

    const finalState = todoReducer(newState, action);

    const finalExepectedState = fromJS({
      todos: [todo1, todo2]
    });

    expect(finalState).to.equal(finalExepectedState);

  });

  it('ARCHIVE_TODO removes todo from todos and puts it on the archved list', () => {

    let todo1 = "Call your mother and tell how great she is";
    let todo2 = "Order your girl freind flowers";


    const initialState = fromJS({
      todos: [todo1, todo2]
    });

    let action = archiveTodoAction(0);

    const newState = todoReducer(initialState, action);

    const expectedState = fromJS({
      todos: [todo2],
      archived: [todo1]
    });

    expect(newState).to.equal(expectedState);

    const emptyState = new Map();

    expect(todoReducer(emptyState, action)).to.equal(emptyState);

  });

  it('EDIT_TODO removes todo from todos and puts it on the archved list', () => {

    let todo = "Get an B in DataStructures";

    const initialState = fromJS({
      todos: [todo]
    });

    let editedTodo = "Get an A in DataStructures";

    let action = updateTodoAction(0, editedTodo);

    const newState = todoReducer(initialState, action);

    const expectedState = fromJS({
      todos: [editedTodo],
    });

    expect(newState).to.equal(expectedState);

  });

});
