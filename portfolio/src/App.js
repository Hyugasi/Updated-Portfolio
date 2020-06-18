import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import './App.css';
import Home from './components/home/home'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import { useEffect, useState } from 'react';

function App() {
  const [projectsData, setProjectsData] = useState([])

  useEffect(() => {
      const id = `14G7FymaxpdAgNrQGA0VjtZpni3n6LBznLBRQ9fuUbrc`
      const projectsUrl = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`
      const makeAPICall = async () => {
          const res = await fetch(projectsUrl)
          const json = await res.json()
          setProjectsData(json)
      }
      makeAPICall()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </header>
      <body>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" render={data => <Projects projectsData={projectsData} {...data}/>} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </body>
    </div>
  );
}

export default App;
