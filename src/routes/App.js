import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../containers/Home';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import NotFound from '../containers/NotFound';
import { getStore } from '../helpers/helpers';

function AuthenticatedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => getStore('user') ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
};


const App = () => (
  <BrowserRouter>
    <Layout>

      <Switch>
        <AuthenticatedRoute exact path='/' component={Home} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFound} />


      </Switch>
    </Layout>

  </BrowserRouter>
)

export default App;