import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import { AuthProvider } from './AuthContext'
import PrivateRoute from './components/PrivateRoute'

const Router = () => {
    return (<div>
      <AuthProvider>
        <Switch> 
          <Route exact path="/" component={Home}/>
          <Route path="/signin" component={Login}/>
          <Route path="/signup" component={Register}/>
          <PrivateRoute path="/profile" component={Profile}/>
        </Switch>   
      </AuthProvider>
      </div>)
}

export default Router