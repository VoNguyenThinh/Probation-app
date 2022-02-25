import React from 'react';
import './App.css'
import { Button } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MainLayout from './components/MainLayout';
import SumitForm from './components/Form/SumitForm';

function App() {
  return (
    <div className="App">
      <Router>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <Link to='/'>
              <Button type='link'>Home</Button>
            </Link>
          </li>
          <li>
            <Link to='/all-form'>
              <Button type='link'>All Form</Button>
            </Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/all-form">
            <SumitForm />
          </Route>

          <Route exact path="/">
            <MainLayout />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
