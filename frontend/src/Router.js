import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Settings from './components/Settings'
import { AuthProvider } from './AuthContext'
import PrivateRoute from './components/PrivateRoute'
import CreateDonoCode from './components/CreateDonoCode'
import RecipientAddMessage from './components/RecipientAddMessage'
import RecipientGreeting from './components/RecipientGreeting'
import DonorGreeting from './components/DonorGreeting'
import DonorAddMessage from './components/DonorAddMessage'
import Dashboard from './components/Dashboard'
import { PrintContent } from './components/PrintComponents'

const Router = () => {
    return (<div>
      <AuthProvider>
        <Switch> 
          <Route exact path="/print" component={PrintContent} />
          <Route exact path="/" component={Home}/>
          <Route path="/signin" component={Login}/>
          <Route path="/signup" component={Register}/>
          <PrivateRoute path="/createdonocode" component={CreateDonoCode}/>
          <PrivateRoute path="/dashboard" component={Dashboard}/>
          <PrivateRoute path="/settings" component={Settings}/>
          <Route exact path="/donor/greeting" component={DonorGreeting}/>
          <Route exact path="/donor/addmessage" component={DonorAddMessage}/>
          <Route exact path="/recipient/greeting" component={RecipientGreeting}/>
          <Route exact path="/recipient/addmessage" component={RecipientAddMessage}/>
        </Switch>   
      </AuthProvider>
      </div>)
}

export default Router
