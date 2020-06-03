import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import './App.css';
import Home from './components/home/home'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import About from './components/about/about'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </header>
      <body>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
      </body>
    </div>
  );
}

export default App;
