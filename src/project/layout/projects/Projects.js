import React, { Component } from 'react'
import { Link } from 'react-router'

class Projects extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>PROJECTS GO HERE</h1>
            <button className="pure-button pure-button-primary">
              <Link to="/projects/create" className="pure-menu-link">Host a project</Link>
            </button>
          </div>
        </div>
      </main>
    )
  }
}

export default Projects
