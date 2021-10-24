import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Settings from './components/Settings'
import { AuthProvider } from './AuthContext'
import PrivateRoute from './components/PrivateRoute'
import CreateDonoCode from './components/CreateDonoCode'
import { PrintContent } from './pages/PrintComponents'
import Settings from './components/Settings'
import firebase from './firebase'

const Router = () => {
    return (<div>
      <AuthProvider>
        <Switch> 
          <Route exact path="/print" component={PrintContent} />
          <Route exact path="/" component={Home}/>
          <Route path="/signin" component={Login}/>
          <Route path="/signup" component={Register}/>
          <Route path="/createdonocode" component={CreateDonoCode}/>
          <PrivateRoute path="/settings" component={Settings}/>
        </Switch>   
      </AuthProvider>
      </div>)
}

export default Router
