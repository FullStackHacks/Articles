import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TodoFormContainer from '../components/TodoPage/TodoFormContainer';
import TodoListContainer from '../components/TodoPage/TodoListContainer';


class TodoPage extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>
        <TodoListContainer />
        <TodoFormContainer />
      </div>
    );
  }
}


export default TodoPage;
