import {Left}     from './Left'
import {Right}    from './Right'
import {MdPictureAsPdf} from 'react-icons/md'

export const Resume = () => {
  return (
    <div className='resume'>
      <Left />
      <Right />
      <a href = './Resume.pdf' target="_blank">
        <MdPictureAsPdf className = 'open-pdf'  />
      </a>
  </div>
  )
}