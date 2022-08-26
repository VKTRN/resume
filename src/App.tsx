import './scss/style.scss'
import { AiFillMobile } from 'react-icons/ai'

import { IoMdMailOpen }    from 'react-icons/io'
import { FaXingSquare }    from 'react-icons/fa'
import { AiOutlineGithub } from 'react-icons/ai'
import { BsTwitter }       from 'react-icons/bs'
import { MdLocationPin } from 'react-icons/md'
import { TbWorld }         from 'react-icons/tb'









import { IconContext } from "react-icons"


export const App = () => {

  return (
    <div className = 'app'>
      <div className="resume">
        <div className = 'left'>
          <div className = 'photo'>
            <img src = './profile.jpg' alt = 'photo'/>
          </div>
          <div className = 'name'>
            <div>Viktor Niedens</div>
          </div>
          <div className = 'about'>
            <h1>About</h1>
            <p>I am a software engineer based in Hannover, Germany. I specialize in fullstack web development with a focus on frontend development. I like to write clean, readable, reusable code and deliver a smooth and intuitive user experience.</p>
          </div>
          <div className = 'contact'>
            <h1>Contact</h1>

            <IconContext.Provider value={{ className: "shared-class", size: '30px' }}>
              
              <div>
                <TbWorld />
                <div>vktrn.com</div>
              </div>

              <div>
                <IoMdMailOpen />
                <div>vktr.ndns@gmail.com</div>
              </div>

              <div>
                <AiFillMobile />
                <div>+49 1522 805 3924</div>
              </div>

              <div>
                <FaXingSquare />
                <div>/Viktor_Niedens</div>
              </div>

              <div>
                <AiOutlineGithub />
                <div>/VKTRN</div>
              </div>

            </IconContext.Provider>
          </div>
          <div className = 'education'>
            <h1>Education</h1>
            <div>M.Sc. Computational Engineering</div>
            <div>Leibniz Universität Hannover - 2021</div>
          </div>
        </div>
        <div className = 'right'></div>
      </div>
    </div>
  )
}