import React from 'react';
import './App.css';

import Signup from './screens/Signup';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Signup/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
