function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/Services" component={Services} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
    );
  }
  