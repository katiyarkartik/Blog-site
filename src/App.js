import "./App.css";
import { useState } from "react";
import Navbar from "./Navbar";
import Home2 from "./Home2";
import Menu from "./Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails.js";
import Settings from "./Settings";
import NotFound from "./NotFound";
import Author from "./Author";
import New from "./New";

function App() {

  // const title = "Hello World";
  // const likes = "78";
  // const google = "https://www.google.com";
  // /* const person = {
  //   name: "vuv",
  //   age: "89",
  // };*/ //objects cant be passed as jsx renders
  return (
  
      <Router>
       
          <div className="App">
            <div className="content">
              <div className="split left">
                <Menu />
              </div>
              <div className="split right">
                <Switch>
                  <Route exact path="/">
                    <New />
                  </Route>
                  <Route exact path="/create">
                    <Create />
                  </Route>
                  <Route exact path="/blogs/:id">
                    <BlogDetails />
                  </Route>
                  <Router exact path="/settings">
                    <Settings />
                  </Router>
                  <Router exact path="/authors">
                    <Author />
                  </Router>
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
       
      </Router>
   
  );
}

export default App;
