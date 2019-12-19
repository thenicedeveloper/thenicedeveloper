import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/pages/Main';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="App">      
      <Router>  
        <Navbar />    
        <Switch>          
          <Route exact path="/" component={Main}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </Router>        
    </div>
  );
}

export default App;
