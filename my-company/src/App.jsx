import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Headerbar from './HeaderBar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import contact from './components/Contact';
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
 
   