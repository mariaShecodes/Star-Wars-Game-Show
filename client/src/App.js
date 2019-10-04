import React, { Component } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import ContestantsList from './components/Contestants-list'
import ContestantsDetails from './components/Contestants-details'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/contestants" render={() => <ContestantsList />} />
        <Route exact path="/contestants/:id" component={ ContestantsDetails }/>
      </Switch>
    </>
  );
}

export default App;
