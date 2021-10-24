import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Settings from './components/Settings'
import { AuthProvider } from './AuthContext'
import PrivateRoute from './components/PrivateRoute'
import CreateDonoCode from './components/CreateDonoCode'
import Dashboard from './components/Dashboard'

const Router = () => {
    return (<div>
      <AuthProvider>
        <Switch> 
          <Route exact path="/" component={Home}/>
          <Route path="/signin" component={Login}/>
          <Route path="/signup" component={Register}/>
          <PrivateRoute path="/createdonocode" component={CreateDonoCode}/>
          <PrivateRoute path="/dashboard" component={Dashboard}/>
          <PrivateRoute path="/settings" component={Settings}/>
        </Switch>   
      </AuthProvider>
      </div>)
}

export default Router
