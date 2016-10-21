export const ADD_TODO = "TODOS@ADD_TODO";
export const ARCHIVE_TODO = "TODOS@ARCHIVE_TODO";
export const UPDATE_TODO = "TODOS@UPDATE_TODO";
export const INPUT_CHANGE = "TODOS@INPUT_CHANGE";


export function addTodoAction(todo) {

  return {
    type: ADD_TODO,
    payload: {
      todo,
    }
  };

}


export function archiveTodoAction(id) {

  return {
    type: ARCHIVE_TODO,
    payload: {
      id,
    }
  };

}


export function updateTodoAction(id, updatedTodo) {

  return {
    type: UPDATE_TODO,
    payload: {
      id,
      updatedTodo
    }
  };

}


export function inputChangeAction(value) {

  return {
    type: INPUT_CHANGE,
    payload: {
      value,
    }
  };

}
