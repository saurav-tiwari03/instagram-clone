import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SignUp from './components/SignUp'
import { onAuthStateChanged } from 'firebase/auth';
import { database,db } from './config/firsbase';
import { useEffect, useState } from 'react'



function App() {
  const [user, setUser] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(db, (authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={user ? <Home/> : <Login />} />
            <Route path='/signup' element={<SignUp />}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
