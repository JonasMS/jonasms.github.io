import React, { Component } from 'react';
import Project from './Project';
import projectsCollection from '../projects';
import '../styles/App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    }

    this.displayProjects = this.displayProjects.bind(this);
  }

  componentWillMount() {
    this.setState({projects: projectsCollection});
  }

  displayProjects(projects) {
    return projects.map((project, key) => <Project project={project} key={key} />);
  }

  render() {
    console.log("state: ", this.state);
    return (
      <div className="container">
        <div className="main-title">
          Jonas' Portfolio
        </div>
        <div className="projects">
          {this.displayProjects(this.state.projects)}
        </div>
      </div>
    );
  }
}

export default App;
