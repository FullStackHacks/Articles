import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Router, Route, Link, browserHistory } from 'react-router';
import TodoPage from '../pages/TodoPage';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={TodoPage} />
      </Router>
    );
  }
}


export default App;

