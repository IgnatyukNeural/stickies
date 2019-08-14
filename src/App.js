import React from 'react';
import './App.css';

import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Landing from './Landing/Landing';
import Editor from './Editor/Editor';

const history = createBrowserHistory();

function App() { 
  return (
    <Router history={history}>
       <div className="app">
         <Route exact  path="/" component={Landing} /> 
         <Route path="/editor" component={Editor} />
       </div>
    </Router>
  );
}

export default App;
