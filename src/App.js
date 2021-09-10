import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Content from './components/pages/Content';
import Error from './components/pages/Error';
import Loading from './components/pages/Loading';
function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={() => <Content />} />
            <Route path="/Loading" exact component={() => <Loading />} />


            <Route exact component={() => <Error />} />
        </Switch>
    </Router>
  );
}

export default App;
