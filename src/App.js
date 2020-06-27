import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import RoverSight from './Components/RoverSight/RoverSight';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' render={() => <RoverSight /> }/>
        <Route path='*' render={() => <Redirect to='/' /> }/>
      </Switch>
    </div>
  );
}

export default App;
