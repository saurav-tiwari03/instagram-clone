/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import user from './../assets/user-profile.png'
import { IoIosSettings } from "react-icons/io";
import Footer from './Footer';



export default function Profile({username}) {
  console.log(username)
  const [name,setName] = useState();
  useEffect(() => {
    setName(username);
  },[username])
  return (
    <div className='bg-black text-white flex'>
      <Navbar />
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
                <button className='bg-[#4c4c4c] hover:bg-[#262626] rounded-md duration-200 px-4 py-1'>Edit Profile</button>
                <button className='bg-[#4c4c4c] hover:bg-[#262626] rounded-md duration-200 px-4 py-1'>View Profile</button>
                <p className='text-2xl'><IoIosSettings/></p>
              </div>
              <div className='flex items-center gap-4'>
                <p>Posts {1}</p>
                <p>Followers {11}</p>
                <p>Following {32}</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p>Saurav Tiwari</p>
                <p></p>
                <p className='text-sm'>Mad Mad Hindu🚩
                  <p className='text-[#e0f1ff] flex flex-col'>
                  <p>@gaurav_x_tiwari</p>
                  <p>@tiwaribsarika</p>
                  </p>
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

          </div>
          
        </div>
        <div className='ml-20 '>
            <Footer />
        </div>
      </div>
      
    </div>
  )
}
