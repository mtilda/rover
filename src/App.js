import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import RoverSight from './Components/RoverSight/RoverSight';
import './App.css';

import {api_key} from './.credentials';

function App() {
  const fetchManifest = async (rover) => {
    const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${api_key}`);
    const json = await res.json();
    return json.photo_manifest;
  }

  return (
    <div className="App">
      <Switch>
        <Route path='/curiosity' render={() => <RoverSight rover='curiosity' fetchManifest={fetchManifest} /> }/>
        <Route path='/opportunity' render={() => <RoverSight rover='opportunity' fetchManifest={fetchManifest} /> }/>
        <Route path='/spirit' render={() => <RoverSight rover='spirit' fetchManifest={fetchManifest} /> }/>
        <Route path='*' render={() => <Redirect to='/curiosity' /> }/>
      </Switch>
    </div>
  );
}

export default App;
