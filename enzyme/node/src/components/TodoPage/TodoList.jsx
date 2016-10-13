import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <ul>
        {
          this.props.todos.map( (todo, index) => {

            return ( <li key={"todo" + index}> {todo} </li> );

          })
        }
      </ul>
    );
  }
}


export default TodoList;
