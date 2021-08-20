import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Account from './components/Account'
import Settings from './components/Settings'


function App() {



  return (
   <>
     <Router>
        <Navbar />
        <Switch>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/account' component={Account}/>
            <Route path='/settings' component={Settings}/>
        </Switch>
     </Router>
   </>
  );
}

export default App;
