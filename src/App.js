import logo from './logo.svg';
import './App.css';
// Contents 
import Home from './components/Content/Home'
import About from './components/Content/About'
import Education from './components/Content/Education'
import Skills from './components/Content/Skills'
import Contact from './components/Content/Contact'
// Navbar
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
  return (
   <Router>
    <div className="App">
      <Navbar />  
      <Route exact path="/">
        <Home />
      </Route>
      
      <Route exact path="/about">
          <About />
      </Route>
        
      <Route exact path="/Education">
          <Education />
      </Route>
        
      <Route exact path="/Skills">
          <Skills />
      </Route>
        
      <Route exact path="/Contact">
          <Contact />
      </Route>
        
      </div>
    </Router>
  );
}

export default App;
