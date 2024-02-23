/* eslint-disable no-unused-vars */
import user from './../assets/user-profile.png'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { database,db } from './../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Navbar from './Navbar';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { FirebaseContext } from '../context/Firebase';
import { Story } from './Story';




export default function Home() {
  const Firebase = useContext(FirebaseContext);
  const val = collection(database,"users");
  const [userName,setUserName] = useState("Loading..");
  const [name,setName] = useState("");
  const [showAccount,setShowAccount] = useState(false);
  const [logoutStatus,setLogoutStatus] = useState(true);
  useEffect(() =>  {
    setUserName(Firebase.userName);
  },[0])
  const clickHandler = () => {
    signOut(db).then((val) => {
      console.log(val);
      history('/');
    })
  }
  

  return (
    <div className='bg-black text-white flex'>
      {/*Navbar */}
      <Navbar />
      <div className='bg-black text-white flex justify-between w-[100vw]'>
      
      {/*Dicover section */}
      <div className='flex items-start justify-start m-4'>
        <div className='flex gap-4'>
          <Story userName={userName}/>
        </div>

      </div>
      {/*Suggestions */}
      
      <div className='hidden w-[300px] lg:flex lg:justify-evenly gap-10' >
        {/*User section */}
        <div className='mt-10' >
          <div className='flex mb-4 items-center'>
            <img src={user} alt="" className='rounded-full' width={50}/>
            <div className='w-[250px] pl-2'>
              <Link to={`/${userName}`}><p className=''>{userName}</p></Link>
              <p className='text-[#a8a8a8] font-light'>{name}</p>
            </div>
            <button onClick={clickHandler} className='text-blue-600 text-xs cursor-pointer'>Signout</button>
          </div>
          <div className='flex justify-between my-2'>
            <h1 className='text-[#737373]'>Suggested for you</h1>
            <Link to='/explore/people'><p className=''>See All</p></Link>
          </div>

          <div>

          </div>

          <div className='text-[#737373] text-xs '>
            <div className='flex flex-wrap gap-2'>
              <div><a href="/">About </a></div>
              <div><a href="/">Help </a></div>
              <div><a href="/">Press </a></div>
              <div><a href="/">API </a></div>
              <div><a href="/">Jobs </a></div>
              <div><a href="/">Privacy </a></div>
              <div><a href="/">Terms </a></div>
              <div><a href="/">Locations </a></div>
              <div><a href="/">Language </a></div>
              <div><a href="/">Meta Verified</a></div>
            </div>
            <div className='text-md'>
              © 2024 INSTAGRAM FROM META
            </div>
          </div>


        </div>
        <div>

        </div>
      </div>
    </div>
    </div>
  )
}
