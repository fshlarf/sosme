import React from 'react'
import Index from './view/index/index'
import Reg from './view/reg/reg'
import Login from './view/login/login'
import Profile from './view/profile/profile'
import Users from './view/users/users'
import Error from './view/error/error'
// import indexScss from './index.scss'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

function RouteComponent() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/registrasi" component={Reg}/>
        <Route path="/login" component={Login}/>
        <Route path="/profil" component={Profile}/>
        <Route path="/users" component={Users}/>
        <Route component={Error}/>
      </Switch>
    </Router>
  )
}

export default RouteComponent