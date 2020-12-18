import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Productos from './components/Productos'
import Login from './components/Login'
import Home from './components/Home'
import Layout from './components/Layout'
import Registro from './components/Registro'
import Compra from './components/Comprar'
import Editar from './components/EditarProducto'
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';

function App(){

  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Productos} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/comprar/:idpro/" component={Compra} />
          <PrivateRoute exact path="/update/:id/" component={Editar} />
          <PrivateRoute exact path="/home" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
