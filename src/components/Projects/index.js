import ProjectDisplay from '../ProjectDisplay'

import listOfProjexts from '../ProjectsList'

import './index.css'

const Projects = () => {
  const ListOfProjects = listOfProjexts
  return (
    <div className="project-container">
      <div className="para-container">
        <p className="project-text">
          I have collected a diverse range of{' '}
          <span className="span-element">Projects</span> that showcase my{' '}
          <span className="span-element">skills</span> and{' '}
          <span className="span-element">experience</span>. Each project
          represents a unique challenge I have tackled, and a chance for me to
          demonstrate my <span className="span-element">creativity</span> and{' '}
          <span className="span-element">problem-solving</span> abilities.{' '}
        </p>
      </div>
      <div className="projects-container">
        <ul className="projects-list-container">
          {ListOfProjects.map(each => (
            <ProjectDisplay key={each.id} item={each} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Projects
