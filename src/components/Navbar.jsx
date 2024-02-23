/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext } from 'react'
import { FirebaseContext } from '../context/Firebase';
import logo from './../assets/insta-logo-dark.png'
import { FaInstagram } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { FaClapperboard } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import user from './../assets/user-profile.png'
import { BsThreads } from "react-icons/bs";
import { FaGripLines } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { signOut } from 'firebase/auth';
import { db } from '../config/firebase';
import { Link } from 'react-router-dom';
import Create from './Create';
import { ImCross } from 'react-icons/im';


export default function Navbar(props) {

  const Firebase = useContext(FirebaseContext)
  const [message,setMessage] = useState(3);
  const [thread,setThread] = useState(9);
  const [logoutStatus,setLogoutStatus] = useState(true);
  const [upload,setUpload] = useState(true);
  const [userName,setUserName] = useState("");


  const logoutStatusHandler = () => {
    setLogoutStatus(!logoutStatus);
  }
  const clickHandler = () => {
    signOut(db).then((val) => {
      console.log(val);
      history('/');
    })
  }
  const callHandler = () => {
    setUserName(Firebase.userName);
    console.log(userName);
  }
  useEffect(() => {
    callHandler();
  },[])
  



  return (
    <div>
      {
        upload ? "" : (
          <div className='absolute'>
            <Create/>
          </div>
        )
      }
      {
        upload ? "" : 
        <button className='absolute top-4 right-4' onClick={() => setUpload(!upload)}>
          <ImCross />
        </button>
      }

      <div className="h-[100vh] flex ">
        <div className='px-2 lg:pr-[40px] flex flex-col justify-evenly'>
          <div className='flex items-center pl-2'>
            <p className=' text-3xl lg:block hidden'><img src={logo} width={120} alt="" /></p>
            <FaInstagram className='pl-2 text-3xl lg:hidden block'/>
          </div>
          <div className="flex flex-col" >
            <Link tp='/home'>
              <div className="flex items-center p-4 gap-3 w-auto hover:bg-[#1a1a1a] hover:rounded-md duration-200">
                <MdHomeFilled className='text-2xl '/>
                <p className="text-md font-semibold lg:block hidden">
                  Home
                </p>
              </div>
            </Link>
            
            <Link to='/search'>
              <div className="flex items-center p-4 gap-3 hover:bg-[#1a1a1a] hover:rounded-md duration-200">
                <FaSearch className='text-2xl'/>
                <p className="text-md font-semibold lg:block hidden">
                  Search
                </p>
              </div>
            </Link>

            <Link to='discover'>
            <div className="flex items-center p-4 gap-3 hover:bg-[#1a1a1a] hover:rounded-md duration-200">
              <FaCompass className='text-2xl'/>
              <p className="text-md font-semibold lg:block hidden">
                Discover
              </p>
            </div>
            </Link>
            <Link to='/direct/inbox'>
            <div className="flex items-center p-4 gap-3 hover:bg-[#1a1a1a] hover:rounded-md duration-200">
              <div className='flex relative'>
                <FaFacebookMessenger className='text-2xl'/>
                <p className='w-4 h-4 bg-[#ff3040] rounded-full absolute top-0 left-4 text-xs text-center'>{message}</p>
              </div>
              <p className="text-md font-semibold lg:block hidden">
                Message
              </p>
            </div>
            </Link>
            
            <Link to='/notifications'>
            <div className="flex items-center p-4 gap-3 hover:bg-[#1a1a1a] hover:rounded-md duration-200">
              <div className='flex relative'>
                <FaRegHeart className='text-2xl' />
                <p className='w-3 h-3 bg-[#ff3040] rounded-full absolute top-0 left-4'> </p>
              </div>
              <p className="text-md font-semibold lg:block hidden">Notifications</p></div>
            </Link>

            <button className='' onClick={() => setUpload(!upload)}>
              <div className="flex items-center p-4 gap-3 hover:bg-[#1a1a1a] hover:rounded-md duration-200"><FaRegPlusSquare className='text-2xl'/><p className="text-md font-semibold lg:block hidden">Create</p></div>
            </button>
            <Link to={`${userName}`}>
            <div className="flex items-center p-4 gap-3 hover:bg-[#1a1a1a] hover:rounded-md duration-200"><img src={user} width={25} alt="" /><p className="text-md font-semibold lg:block hidden">Profile</p></div>
            </Link>
            
          </div>
          <div className='relative'>
            <a href='https://www.threads.net/login' target='_blank' rel="noreferrer">
            <div className="flex items-center p-4 gap-3 hover:bg-[#1a1a1a] hover:rounded-md duration-200">
              <div className='flex relative'>
                <BsThreads className='text-2xl'/>
                <p className='w-4 h-4 bg-[#ff3040] rounded-full absolute top-0 left-4 text-xs text-center'>{thread}</p>
              </div>
              <p className='text-md font-semibold hidden lg:flex lg:items-center'>
                Threads
                <p className='hidden hover:block'><FaArrowUpRightFromSquare/></p>
              </p>
            </div>
            </a>
            
              <div className="flex items-center p-4 gap-3 hover:bg-[#1a1a1a] hover:rounded-md duration-200
              " id='more' onClick={logoutStatusHandler}>
                <FaGripLines className='text-2xl'/>
                <p className='text-md font-semibold lg:block hidden'>More</p>
                {
                  logoutStatus ? '' :
                  <div className='bg-[#262626] rounded-lg top-0 left-0 h-[50px] w-[150px] absolute flex items-center justify-center'>
                    <Link to='/' className=' rounded-lg top-0 left-0 bg-[#262626] m-auto w-[120px] p-1 text-white hover:bg-[#3c3c3c]'
                    onClick={clickHandler}>Logout</Link>
                  </div>
                  
                }
              </div>

            </div>
        </div>
        <div className="h-[100vh] w-[1px] bg-[#262626]"></div>
      </div>
    </div>
  )
}
