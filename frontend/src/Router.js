import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import { PrintContent } from './pages/PrintComponents'
import Settings from './core/Settings'
import firebase from './firebase'

const Router = () => {
    let [isLoggedIn, setIsLoggedIn] = useState(false);
    let [user, setUser] = useState();

    firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        setIsLoggedIn(true);
        setUser(user);
    } else {
        setIsLoggedIn(false);
        setUser(null);
    }
    });

    return (<div>
        <Switch> 
          <Route exact path="/" component={Home}/>
          <Route exact path="/settings" component={Settings}/>
          <Route path="/print" component={PrintContent}/>
        </Switch>   
      </div>)
}

export default Router