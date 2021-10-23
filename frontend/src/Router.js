import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'

const Router = () => {
    return (<div>

      <Switch> 
        <Route exact path="/" component={Home}/>
      </Switch>
      
    </div>)
}

export default Router