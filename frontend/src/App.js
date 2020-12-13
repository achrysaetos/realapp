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
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact_us">
            <Contact />
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


function Products() {
  return <h2>About</h2>;
}
function Features() {
  return <h2>About</h2>;
}
function Pricing() {
  return <h2>About</h2>;
}
function About() {
  return <h2>About</h2>;
}
function Contact() {
  return <h2>Users</h2>;
}
