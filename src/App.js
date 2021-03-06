import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/scss/style.scss";
import DetailsPage from "./pages/DetailsPage";
import Example from "./pages/Example";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        <Route path="/example" exact component={Example}></Route>
      </Router>
    </div>
  );
}

export default App;
