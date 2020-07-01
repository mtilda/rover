import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import RoverSight from './Components/RoverSight/RoverSight';
import './App.css';

import {api_key} from './.credentials';

function App() {
  // get the manifest for the current rover
  const getManifest = async (rover) => {
    const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${api_key}`);
    const json = await res.json();
    return json.photo_manifest;
  }

  return (
    <div className="App">
      <Switch>
        <Route path='/curiosity' render={() => <RoverSight rover='curiosity' getManifest={getManifest} /> }/>
        <Route path='/opportunity' render={() => <RoverSight rover='opportunity' getManifest={getManifest} /> }/>
        <Route path='/spirit' render={() => <RoverSight rover='spirit' getManifest={getManifest} /> }/>
        <Route path='*' render={() => <Redirect to='/curiosity' /> }/>
      </Switch>
    </div>
  );
}

export default App;
