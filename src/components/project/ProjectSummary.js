import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <div className="card-title">
                    <span>{project.title}</span>
                    <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                    <p className="grey-text">{moment(project.createdAt.toDate().toString()).format('lll')}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary;