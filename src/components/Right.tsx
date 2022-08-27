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
          <p className = 'description'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et dolore 
            magna aliquyam erat, sed diam voluptua.
          </p>
          <ul className = 'summary'>
            <li>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy
            </li>
            <li>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy
            </li>
            <li>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy
            </li>
          </ul>
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
      </div>
      <div>
        <h1>Interests</h1>
      </div>
    </div>
  )
}