import React, {useState, useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import RoverSight from './Components/RoverSight/RoverSight';
import './App.css';

import {api_key} from './.credentials';

function App() {
  const [manifests, updateManifests] = useState({curiosity: [], opportunity: [], spirit: []});

  useEffect( () => {
    const fetchManifest = async (rover) => {
      const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${api_key}`);
      const json = await res.json();
      return json.photo_manifest;
    }
  
    updateManifests({
      curiosity: fetchManifest('curiosity'),
      opportunity: fetchManifest('opportunity'),
      spirit: fetchManifest('spirit')
    });
  },[])

  return (
    <div className="App">
      <Switch>
        <Route path='/curiosity' render={() => <RoverSight rover='curiosity' manifest={manifests.curiosity} /> }/>
        <Route path='/opportunity' render={() => <RoverSight rover='opportunity' manifest={manifests.opportunity} /> }/>
        <Route path='/spirit' render={() => <RoverSight rover='spirit' manifest={manifests.spirit} /> }/>
        <Route path='*' render={() => <Redirect to='/curiosity' /> }/>
      </Switch>
    </div>
  );
}

export default App;
