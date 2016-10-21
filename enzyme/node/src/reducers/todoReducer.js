import { List } from 'immutable';
import {
  ADD_TODO,
  ARCHIVE_TODO,
  UPDATE_TODO,
  INPUT_CHANGE,
} from '../actions/todoActions';

export default function todoReducer(state, action) {

  switch(action.type) {
    case ADD_TODO:
      return addTodo(state, action.payload);
    case ARCHIVE_TODO:
      return archiveTodo(state, action.payload);
    case UPDATE_TODO:
      return updateTodo(state, action.payload);
    case INPUT_CHANGE:
      return inputChange(state, action.payload);
    default:
      return state;
  }


}


function addTodo(state, payload) {

  let todo = payload.todo;

  const todoList = state.get('todos', new List());
  const updatedList = todoList.push(todo);

  return state.set('todos', updatedList);

}


function archiveTodo(state, payload) {

  let todoId = payload.id;

  const archiveList = state.get('archived', new List());
  const todoList = state.get('todos', new List());

  if(todoList.size == 0) return state;

  const todo = state.getIn(['todos', todoId]);
  const updatedTodoList = todoList.delete(todoId);

  const updateArchiveList = archiveList.push(todo);


  return state.set("archived", updateArchiveList)
              .set('todos', updatedTodoList);


}


function updateTodo(state, payload) {

  let updatedTodo = payload.updatedTodo;
  let todoId = payload.id;


  return state.setIn(['todos', todoId], updatedTodo);

}


function inputChange(tate, payload) {

  let value = payload.value;
  return state.set('inputValue', value);

}
