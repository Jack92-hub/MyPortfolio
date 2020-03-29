import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout'
import Home from './containers/home'
import About from './containers/about'
import Projects from './containers/projects'
import Contact from './containers/contact'
import Resume from './containers/resume'

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/projects" component={Projects} /> 
            <Route path="/contact" component={Contact} /> 
            <Route path="/resume" component={Resume} /> 
            <Route path="/about" component={About} /> 
            <Route path="/" exact component={Home} />
           </Switch>
        </Layout>
      </div>
    );
  }
}


export default App;
