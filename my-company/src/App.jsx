// src/App.jsx
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; // Import necessary components
import Headerbar from './HeaderBar'; // Make sure to import your components
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

export default function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Headerbar />
      <BrowserRouter>
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/" exact component={Home} /> {/* Use "/" for the root path */}
          {/* Add more routes as needed */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}
