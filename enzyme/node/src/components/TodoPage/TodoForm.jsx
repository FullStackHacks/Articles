import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {

    return (
      <form onSubmit={this.props.submitHandler}>
        <input value={this.props.inputValue} onChange={this.props.inputChangeHandler} type="text" id="newTodo" />
        <button type="submit"> Add Todo </button>
      </form>
    );

  }

}

export default TodoForm;

