import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import CreateDonoCode from './core/CreateDonoCode'
import Home from './core/Home'
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
          <Route exact path="/createdonocode" component={CreateDonoCode}/>
        </Switch>   
      </div>)
}

export default Router