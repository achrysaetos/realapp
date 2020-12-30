import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Button from '@material-ui/core/Button';

import TodoApp from "./components/TodoApp"
import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  return (
    <Router>
      <div>
        
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />

      </div>
    </Router>
  );
}


function Features() {
  return <h2>Features</h2>;
}
function Pricing() {
  return <h2>Pricing</h2>;
}
