import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import { PrintContent } from './pages/PrintComponents'

const Router = () => {
    return (<div>

      <Switch> 
        <Route exact path="/" component={Home}/>
        <Route path="/print" component={PrintContent}/>
      </Switch>
    
  
    </div>)
}

export default Router