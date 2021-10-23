import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
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
        </Switch>   
      </div>)
}

export default Router