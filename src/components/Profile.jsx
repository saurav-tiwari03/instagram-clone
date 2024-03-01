/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import user from './../assets/user-profile.png'
import { IoIosSettings } from "react-icons/io";
import Footer from './Footer';
import { EditProfile } from './EditProfile';



export default function Profile({username}) {
  console.log(username)
  const [name,setName] = useState();
  const [post] = useState(0)
  const [followers,setFollowers] = useState(11);
  const [following,setFollowing] = useState(32);
  const [editProfile,setEditProfile] = useState(false);
  useEffect(() => {
    setName(username);
    setFollowers(12)
    setFollowing(30)
  },[0])
  const updateProfileHandler = async () => {
    setEditProfile(false);
  }
  return (
    <div className='bg-black text-white flex relative h-[100vh] w-[100vw]'>
      <Navbar />
      {
        editProfile ? (<div className='flex flex-col gap-4 items-center justify-center absolute top-[30%] left-[30%] h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[300px] lg:w-[350px] bg-[#262626] rounded-xl'>
        <div className='flex flex-col gap-4 text-center'>
          <p>Edit name : <input className='bg-transparent outline-none border-b-slate-200' type="text" placeholder='Saurav Tiwari' /></p>
          <p>Edit bio : <input className='bg-transparent outline-none' type="text" placeholder='Mad Mad Hindu'/></p>
          <button onClick={updateProfileHandler} className=''>Update button</button>
        </div>
      </div>) : ''}
      <div className=''>
        {/*Bio Section */}
        <div className=''>
          {/*Upper Half */}
          <div className='flex items-center justify-center gap-20 ml-[150px] mt-[30px] m-auto mr-[100px]'>
            <div>
              <img className='rounded-full' src={user} alt="" width={135} />
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-4'>
                <p>{name}</p>
                <button className='bg-[#4c4c4c] hover:bg-[#262626] rounded-md duration-200 px-4 py-1'>Edit profile</button>
                <button className='bg-[#4c4c4c] hover:bg-[#262626] rounded-md duration-200 px-4 py-1'>View archive</button>
                <p onClick={() => setEditProfile(!editProfile)} className='text-2xl cursor-pointer select-none'><IoIosSettings/></p>
              </div>
              <div className='flex items-center gap-4'>
                <p>Posts {post}</p>
                <p>Followers {followers}</p>
                <p>Following {following}</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p>Saurav Tiwari</p>
                <p></p>
                <p className='text-sm'>Mad Mad Hindu🚩
                </p>
              </div>
            </div>

          </div>
          {/*Lower Half */}
          <div>

          </div>
        </div>
        <hr className='my-[50px] ml-[125px]'/>

        {/*Posts Section */}
        <div>
          <div className='text-xl text-center'>
            Posts
          </div>
          <div>
            <p className='text-center text-red-600'>No posts till now</p>
          </div>
          
        </div>
        <div className='ml-20 hidden md:flex lg:flex'>
            <Footer />
        </div>
      </div>
      
    </div>
  )
}
