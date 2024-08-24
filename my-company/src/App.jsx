// src/App.jsx
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Headerbar from './HeaderBar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Routes from './Routes';
import Navbar from './Navbar'; 

export default function App() {
return (
    <div style={{ textAlign: 'center' }}>
        <Navbar />
        <BrowserRouter>
            <Switch>
                <Route path="/about" exact component={About} />{/About' component={About} */}
                <Route path="/home" exact component={Home} /> {/Home' component={Home} */}
                <Route path="/services" exact component={Services} /> {/Services' component={Services} */}
                <Route path="/contact" exact component={Contact} /> {/Contact' component={Contact} */}
            </Switch>
        </BrowserRouter>
    </div>
);
}




["Routes", "element"]
// <BrowserRouter>

<Route path="/" component={Routes} /> 
export default function App() {
}
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