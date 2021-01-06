import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Container } from "semantic-ui-react"

import "semantic-ui-css/semantic.min.css"
import "./App.css"
import { AuthProvider } from "./context/auth"
import AuthRoute from "./util/AuthRoute"

import MenuBar from "./components/MenuBar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import SinglePost from "./pages/SinglePost"

export default function App() {

  return (
    <AuthProvider> {/* pass the user and the login/logout functions from ./context/auth.js, to set/remove the user token */}
      <Router> {/* to route to different pages in the pages folder */}
        <Container> {/* semantic ui class to create margins */}
          <MenuBar />
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} /> {/* redirect to home if user is logged in */}
          <AuthRoute exact path="/register" component={Register} /> {/* redirect to home if user is logged in */}
          <Route exact path="/posts/:postId" component={SinglePost} />
        </Container>
      </Router>
    </AuthProvider>
  )
  
}
