import {IoLogoNodejs}  from 'react-icons/io'
import {SiTypescript}  from 'react-icons/si'
import {DiCss3}        from 'react-icons/di'
import {RiReactjsLine} from 'react-icons/ri'
import {FaGitAlt}      from 'react-icons/fa'
import {SiWebpack}     from 'react-icons/si'
import {FaDocker}      from 'react-icons/fa'
import {FaHtml5}       from 'react-icons/fa'
import {FaSass}        from 'react-icons/fa'
import {DiScrum}       from 'react-icons/di'
import {text}          from './english'

export const Right = () => {
  return (
    <div className = 'right'>
     
      <div>
        <h1>{text.experience}</h1>

        <div>
          <div className = 'title'>
            <span className = 'job-position'>Frontend Development</span>
              <span className = 'date'>{text.date}</span>
          </div>
          <div className = 'company'>Treubrodt Consulting | Lehre, Niedersachsen</div>
          {
            text.projects.map(project => {
              return (
                <div className = 'project'>
                  <p className = 'description'>
                    {project.title}
                  </p>
                  <ul className = 'summary'>
                    {project.description.map((bullet) => <li>{bullet}</li>)}
                  </ul>
                    <span className = 'tech'>
                      {project.tech.map((tech) =>(
                        <>
                          {tech}  &bull;
                        </>
                        ) )}
                    </span>
                </div >
              )
            })
          }
        </div>
      </div>
      
      <div>
        <h1>{text.skills}</h1>
        <div className = 'skills'>
          <div className = 'skill'>
            <RiReactjsLine/>
            <span>React.js</span>
          </div>
          <div className = 'skill'>
            <SiTypescript/>
            <span>Typescript</span>
          </div>
          <div className = 'skill'>
            <FaGitAlt/>
            <span>Git</span>
          </div>
          <div className = 'skill'>
            <FaSass/>
            <span>Sass</span>
          </div>
          <div className = 'skill'>
            <SiWebpack/>
            <span>Webpack</span>
          </div>
          <div className = 'skill'>
            <FaHtml5/>
            <span>HTML</span>
          </div>
          <div className = 'skill'>
            <DiCss3/>
            <span>CSS</span>
          </div>
          <div className = 'skill'>
            <IoLogoNodejs/>
            <span>Node.js</span>
          </div>
          <div className = 'skill'>
            <FaDocker/>
            <span>Docker</span>
          </div>
        </div>
        <div className = 'scrum'>
            <DiScrum/>
            <span>certified Scrum Master</span>
          </div>
      </div>

      <div className = 'educations'>
        <h1>{text.education.title}</h1>

          {text.education.description.map((edu) => (
            <div className = 'education'>
              <div className = 'degree'>{edu.title}</div>
              <div className = 'university' >{edu.institute}  &bull; {edu.date}</div>
            </div>
          ))}
      </div>
    </div>
  )
}