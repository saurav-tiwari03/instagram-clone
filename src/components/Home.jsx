/* eslint-disable no-unused-vars */
import user from './../assets/user-profile.png'

import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { database } from '../config/firsbase';
import { collection, getDocs } from 'firebase/firestore';
import Navbar from './Navbar';
import Switch from './Switch';



export default function Home() {

  const val = collection(database,"users");
  const [userName,setUserName] = useState("");
  const [name,setName] = useState("");
  const usersCollection = collection(database, 'users');
  const [showAccount,setShowAccount] = useState(false)
  
  useEffect(() => {
    const getData = async () => {
      try {
        
        const querySnapshot = await getDocs(usersCollection);
        console.log(querySnapshot.docs[0].data().userid);
        setUserName(querySnapshot.docs[0].data().userid);


        // if (!querySnapshot.empty) {
        //   const firstDocument = querySnapshot.docs[0];
        //   console.log('First Document ID:', firstDocument.id);
        //   console.log('First Document Data:', firstDocument.data());
        // } else {
        //   console.log('No documents found in the collection');
        // }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, [usersCollection, val]);  
  


  return (
    <div className='bg-black text-white flex justify-between'>
      {/*Navbar */}
      <Navbar />
      
      {/*Dicover section */}
      {
        showAccount ? (
          <div className='hidden lg:flex relative'>
            <Switch showAccount={showAccount}/>
          </div>
        ) : ''
      }
      <div>

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
            <button onClick={() => setShowAccount(!showAccount)} className='text-blue-600 text-xs cursor-pointer'>Switch</button>
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
  )
}
