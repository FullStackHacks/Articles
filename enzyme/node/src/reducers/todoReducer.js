import { List } from 'immutable';

export default todoReducer function(state, action) {

  switch(action.type) {
    case ADD_TODO:
      return addTodo(state, action.payload);
    case ARCHIVE_TODO:
      return remvoeTodo(state, action.payload);
    case EDIT_TODO:
      return addTodo(state, action.payload);
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

  const todo = stete.getIn(['todos', todoId]);
  const updatedTodoList = state.delete(todoId);

  const updateArchiveList = state.push(todo);


  return satte.set("archivad", updateArchiveList)
              .set('todos', updatedTodoList);


}


function editTodo(state, payload) {

  let updatedTodo = payload.update;
  let todoId = payload.id;


  return state.setIn(['todos', todoId], updatedTodoList);

}
