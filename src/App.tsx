import ReactPDF   from '@react-pdf/renderer'
import {Left}     from './components/Left'
import {Right}    from './components/Right'
import {Resume}    from './components/Resume'
import {MyDocument} from './components/Document'
import                 './scss/style.scss'

import {renderToString} from 'react-dom/server';


export const App = () => {

  const printPDF = () => {
    const htmlString = renderToString(<Resume/>)

    console.log(htmlString)
  }

  return (
    <div className = 'app'>
      <Resume/>
      {/* <button className = 'print-pdf' onClick={printPDF}>print</button> */}
    </div>
  )
}