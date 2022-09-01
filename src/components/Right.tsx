import {IoLogoNodejs}  from 'react-icons/io'
import {SiTypescript}  from 'react-icons/si'
import {DiCss3}        from 'react-icons/di'
import {RiReactjsLine} from 'react-icons/ri'
import {FaGitAlt}      from 'react-icons/fa'
import {SiWebpack}     from 'react-icons/si'
import {FaDocker}      from 'react-icons/fa'
import {FaHtml5}       from 'react-icons/fa'
import {FaSass}        from 'react-icons/fa'

export const Right = () => {
  return (
    <div className = 'right'>
     
      <div>
        <h1>Experience</h1>

        <div>
          <div className = 'title'>
            <span className = 'job-position'>Frontend Development</span>
              <span className = 'date'>September 2021 - Present</span>
          </div>
          <div className = 'company'>Treubrodt Consulting | Lehre, Niedersachsen</div>
          
          <div className = 'project'>
            <p className = 'description'>
              Design unification of multiple user authentication systems for Volkswagen
            </p>
            <ul className = 'summary'>
              <li>
                Implemented the unified design for multiple user authentication pages.
              </li>
              
              <li>
                Wrote End to End tests for the authentication pages.
              </li>
              <li>
                Integrated the test-automation into the ci/cd pipeline in bamboo (Atlassian).
              </li>
            </ul>
                <span className = 'tech'>Javascript &bull; HTML &bull; 11ty &bull; Sass &bull; Cypress.io &bull; Docker </span>
          </div >

          <div className = 'project'>
            <p className = 'description'>
              Development of a document management system
            </p>
            <ul className = 'summary'>
              <li>
                Developing the frontend for creating, editing and managing company specific documents.
              </li>
              
              <li>
                Developing a backend for storing and accessing the documents.
              </li>
            </ul>
                <span className = 'tech'>React.js &bull; Electron.js &bull; draft.js &bull; Typescript &bull; Sass &bull; MongoDB &bull; Express</span>
          </div >

          <div className = 'project'>
            <p className = 'description'>
              Support of a content management system for CARIAD
            </p>
            <ul className = 'summary'>
              <li>
                Created and edited web-pages in the CARIAD Intranet.
              </li>
              <li>
                Fixed issues with the display of the content using HTML and CSS.
              </li>
            </ul>
                <span className = 'tech'>HTML &bull; CSS</span>
          </div >

        </div>




      </div>
      
      <div>
        <h1>Skills</h1>
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
        &#10625; certified Scrum Master
      </div>

      <div className = 'educations'>
        <h1>Education</h1>
        <div className = 'education'>
          <div className = 'degree'>M.Sc. Computational Methods in Engineering</div>
          <div className = 'university' >Leibniz Universität Hannover  &bull; 2021</div>
        </div>

        <div className = 'education'>
          <div className = 'degree'>B.Sc. Mechanical Engineering</div>
          <div className = 'university' >TU Braunschweig  &bull; 2017</div>
        </div>
      </div>

    </div>
  )
}