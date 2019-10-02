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
        <Route path="/" exact component={ Home } />
        <Route path="/contestants" exact render={() => <ContestantsList />} />
        <Route path="/contestants/:id" exact component={ ContestantsDetails }/>
      </Switch>
    </>
  );
}

export default App;
