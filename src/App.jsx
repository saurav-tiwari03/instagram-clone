import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SignUp from './components/SignUp'
import { onAuthStateChanged } from 'firebase/auth';
import { db } from './config/firebase';
import { useEffect, useState } from 'react'
import Profile from './components/Profile'

// import { useContext } from 'react'


function App(props) {
  
  const [user, setUser] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(db, (authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);
  const username = props.username;
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={user ? <Home/> : <Login />} />
            <Route path='/signup' element={<SignUp />}/>
            <Route path={`/${username}`} element={<Profile username={username}/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
