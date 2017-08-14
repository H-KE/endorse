import React, { Component } from 'react'

class ProjectForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projectName: 'Project Name',
      projectDescription: 'Why should this project be endorsed?',
      endorsePeriodEnd: '',
      competitionEnd: '',
      minimumDORS: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.projectName.length < 2 || this.state.projectDescription.length < 10)
    {
      return alert('Please fill in project details.')
    }

    this.props.onProjectFormSubmit(this.state)
  }

  render() {
    return(
      <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <label>Name</label>
          <input name="projectName" type="text" value={this.state.projectName} onChange={this.handleInputChange} />

          <br />

          <label>Description</label>
          <input name="projectDescription" type="text" value={this.state.projectDescription} onChange={this.handleInputChange} />

          <br />

          <button type="submit" className="pure-button pure-button-primary">Host</button>
        </fieldset>
      </form>
    )
  }
}

export default ProjectForm
