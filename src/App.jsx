import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import SignUp from './components/SignUp'
import { onAuthStateChanged } from 'firebase/auth';
import { db } from './config/firebase';
import { useContext, useEffect, useState } from 'react'
import Profile from './components/Profile'
import { FirebaseContext } from './context/Firebase'
import { Search } from './pages/Search'
import { Discover } from './pages/Discover'
import { Messages } from './pages/Messages'


function App(props) {
  const Firebase = useContext(FirebaseContext)
  
  const [user, setUser] = useState(true);
  const [userName,setUserName] = useState("");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(db, (authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  });
  useEffect(() => {
    setUserName(Firebase.userName)
  });
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={user ? <Home/> : <Login />} />
            <Route path='/signup' element={<SignUp />}/>
            <Route path={`/${userName}`} element={<Profile username={userName}/>}/>
            <Route path='/search' element={<Search />}/>
            <Route path='/discover' element={<Discover />}/>
            <Route path='/direct/inbox' element={<Messages />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
