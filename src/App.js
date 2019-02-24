import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";




const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
    
    </div>
  </Router>
);

export default App;
