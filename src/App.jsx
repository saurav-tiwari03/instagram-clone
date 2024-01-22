import './App.css'

import LoginSignup from './components/Login'
import Home from './components/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SignUp from './components/SignUp'

function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<LoginSignup/>} />
            <Route path='/home' element={<Home />} />
            <Route path='/signup' element={<SignUp />}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
