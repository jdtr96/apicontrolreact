import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Productos from './components/Productos'
import Login from './components/Login'
import Home from './components/Home'

function App(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Productos} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
