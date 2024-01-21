import './App.css'

import LoginSignup from './components/LoginSignup'
import Home from './components/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<LoginSignup/>} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
