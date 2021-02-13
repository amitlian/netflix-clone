import './App.css';
import React from "react";
import HomeScreen from "./HomescreenFolder/HomeScreen";
import Login from "./HomescreenFolder/Login"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user  = null;
  
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login/>
        ):(
          <Switch>
          <Router exact path="/">
            <HomeScreen/>
          </Router>
        </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
