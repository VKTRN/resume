import {Left}  from './components/Left'
import {Right} from './components/Right'
import              './scss/style.scss'

export const App = () => {

  return (
    <div className = 'app'>
      <div className='resume'>
        <Left />
        <Right />
      </div>
    </div>
  )
}