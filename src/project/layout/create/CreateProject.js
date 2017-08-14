import React, { Component } from 'react'
import ProjectFormContainer from '../../ui/projectform/ProjectFormContainer'

class CreateProject extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Host a project</h1>
             <ProjectFormContainer />
          </div>
        </div>
      </main>
    )
  }
}

export default CreateProject
