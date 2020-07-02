import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import RoverSight from './Components/RoverSight/RoverSight';
import './App.css';

function App() {
  console.log('key: ', process.env.REACT_APP_API_KEY);

  // get the manifest for the current rover
  const getManifest = async (rover) => {
    const res = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${process.env.REACT_APP_API_KEY}`);
    const json = await res.json();
    return json.photo_manifest;
  }

  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route exact path='/curiosity'          render={() => <RoverSight rover='Curiosity' getManifest={getManifest} /> }/>
        <Route exact path='/opportunity'        render={() => <RoverSight rover='Opportunity' getManifest={getManifest} /> }/>
        <Route exact path='/spirit'             render={() => <RoverSight rover='Spirit' getManifest={getManifest} /> }/>
        <Route exact path='/curiosity/bounce'   render={() => <Redirect to='/curiosity' /> }/>
        <Route exact path='/opportunity/bounce' render={() => <Redirect to='/opportunity' /> }/>
        <Route exact path='/spirit/bounce'      render={() => <Redirect to='/spirit' /> }/>
        <Route path='*'                   render={() => <Redirect to='/curiosity' /> }/>
      </Switch>
    </div>
  );
}

export default App;
