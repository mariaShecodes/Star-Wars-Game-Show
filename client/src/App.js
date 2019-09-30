import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'

import ContestantsList from './components/Contestants-list'
import ContestantsDetails from './components/Contestants-details'

function App() {
  return (
    <>
      <h1>Star Wars Game Show</h1>
      <Switch>
        <Route path="/contestants" exact render={() => <ContestantsList />} />
        <Route path="/contestants/:id" exact component={ContestantsDetails}/>
      </Switch>
    <div className="App">
      
      
    </div>
    </>
  );
}

export default App;
