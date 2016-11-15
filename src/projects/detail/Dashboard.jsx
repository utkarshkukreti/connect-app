import React from 'react'
import { connect } from 'react-redux'
import ProjectInfoContainer from './containers/ProjectInfoContainer'
import FeedContainer from './containers/FeedContainer'
import Sticky from 'react-stickynode'

require('./Dashboard.scss')

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {project, currentMemberRole, isAddingTeamMember} = this.props
    return (
      <div>
        <div className="dashboard-container">
          <div className="left-area">
            <Sticky top={80} shouldFreeze={() => isAddingTeamMember }>
              <div className="dashboard-left-panel">
                <ProjectInfoContainer currentMemberRole={currentMemberRole} project={project} />
              </div>
            </Sticky>
          </div>
          <div className="right-area">
            <FeedContainer currentMemberRole={currentMemberRole} project={project} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ teamManagement }) => {
  return {
    isAddingTeamMember: teamManagement.isAddingTeamMember
  }
}

export default connect(mapStateToProps)(Dashboard)