import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TodoForm from './TodoForm';
import { connect, dispatch } from 'react-redux';
import { 
  inputChangeAction,
  addTodoAction,
} from '../../actions/todoActions';

class TodoFormContainer extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  inputChangeHandler(event) {

    let value = event.value;
    this.dispatch(inputChangeAction(value));

  }

  submitHandler(event) {

    let value = this.props.value;
    this.dispatch(addTodoAction(value));

  }

  render() {
    return (
      <TodoForm
        submitHandler={this.submitHandler}
        inputChangeHandler={this.inputChangeHandler}
        inputValue={this.props.inputValue}
      />
    );
  }
}


function mapStateToProps(state) {

  return {
    inputValue: state.todo.get('inputValue')
  };

}


export default connect(mapStateToProps)(TodoFormContainer);
