import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import Account from './components/Account'
import Support from './components/Support'


function App() {
  return (
   <>
     <Router>
        <Navbar />
        <Switch>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/account' component={Account}/>
            <Route path='/support' component={Support}/>
        </Switch>
     </Router>
   </>
  );
}

export default App;
