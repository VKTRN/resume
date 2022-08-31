import {IconContext}     from 'react-icons'
import {AiFillMobile}    from 'react-icons/ai'
import {IoMdMailOpen}    from 'react-icons/io'
import {FaXingSquare}    from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'
import {TbWorld}         from 'react-icons/tb'

export const Left = () => {
  return (
    <div className = 'left'>
      <div className = 'photo'>
        <img src = './profile.jpg' alt = 'photo'/>
      </div>
      <div className = 'name'>
        <div>Viktor Niedens</div>
        <span className = 'craft'>
            Frontend Developer
        </span>
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
            <div className = 'contact-value'>vktrn.com</div>
          </div>

          <div>
            <IoMdMailOpen />
            <div className = 'contact-value'>vktr.ndns@gmail.com</div>
          </div>

          <div>
            <AiFillMobile />
            <div className = 'contact-value'>+49 1522 805 3924</div>
          </div>

          <div>
            <FaXingSquare />
            <div className = 'contact-value'>/Viktor_Niedens</div>
          </div>

          <div>
            <AiOutlineGithub />
            <div className = 'contact-value'>/VKTRN</div>
          </div>

        </IconContext.Provider>
      </div>
  </div>
  )
}