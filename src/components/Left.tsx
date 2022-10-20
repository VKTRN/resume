import {IconContext}     from 'react-icons'
import {AiFillMobile}    from 'react-icons/ai'
import {IoMdMailOpen}    from 'react-icons/io'
import {FaXingSquare}    from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'
import {TbWorld}         from 'react-icons/tb'
import {MdLocationOn}    from 'react-icons/md'
import {text}            from './english'



export const Left = () => {
  return (
    <div className = 'left'>
      <div className = 'photo'>
        <img src = './cropped.jpg' alt = 'photo'/>
      </div>
      <div className = 'name'>
        <div>Viktor Niedens</div>
        <span className = 'craft'>
            Frontend Developer
        </span>
      </div>
      <div className = 'about'>
        <h1>{text.about.title}</h1>
        <p>{text.about.text}</p>
      </div>


      
      <div className = 'contact'>
        <h1>{text.contact}</h1>

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

      <div className = 'location'>
        <MdLocationOn />
        <span>Alte Stöckener Str. 12</span>
        <span>30419 Hannover</span>
        <span>Niedersachsen</span>
      </div>
  </div>
  )
}