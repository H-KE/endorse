import { connect } from 'react-redux'
import ProjectForm from './ProjectForm'
import { createProject } from './ProjectFormActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onProjectFormSubmit: (project) => {
      event.preventDefault();

      dispatch(createProject(project))
    }
  }
}

const ProjectFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm)

export default ProjectFormContainer
