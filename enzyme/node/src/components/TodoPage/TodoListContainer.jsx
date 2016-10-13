import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TodoList from './TodoList';
import { connect } from 'react-redux';


class TodoListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <TodoList
        todos={this.props.todos}
      />
    );
  }
}


function mapStateToProps(state) {

  return {
    todos: state.get('todos')
  };

}


export default connect(mapStateToProps)(TodoListContainer);
