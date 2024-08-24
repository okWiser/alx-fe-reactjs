// src/App.jsx
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; // Import necessary components
import Headerbar from './HeaderBar'; // Make sure to import your components
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Routes from './Routes';

["Routes", "element"]
// <BrowserRouter>

<Route path="/" component={Routes} />
export default function App() {
    return (
        <div style={{ textAlign: 'center' }}>
            <Headerbar />
            <BrowserRouter>
                <Switch>
                    <Route path="/about" exact component={About} />
                    <Route path="/Home" exact component={Home} />
                    <Route path="/services" exact component={Services} />
                    <Route path="/contact" exact component={Contact} />
                </Switch>
            </BrowserRouter>
        </div>
    );
  }