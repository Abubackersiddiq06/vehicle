import React from 'react';
import GetData from './Vehicle/Getdata/Getdata';
import PutData from './Vehicle/Putdata/Putdata';
import './App.css';
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Switch>
         <Route path= "/" exact  component={GetData} />
         <Route path= "/put" component={PutData} />
         <Route path= "/get" component={GetData} />
      </Switch>   
    </div>
  );
}
//test

export default App;
