import logo from './../assets/insta-logo-dark.png'
import user from './../assets/user-profile.png'
import { FaInstagram } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { FaClapperboard } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { BsThreads } from "react-icons/bs";
import { FaGripLines } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { database, db } from '../config/firsbase';
import { signOut } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';



export default function Home() {

  const val = collection(database,"users");
  const [userName,setUserName] = useState("");
  const [name,setName] = useState("");
  const usersCollection = collection(database, 'users');
  
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
  }, [val]);





  const [message,setMessage] = useState(3);
  const [thread,setThread] = useState(9);
  const [logoutStatus,setLogoutStatus] = useState(true);

  const logoutStatusHandler = () => {
    setLogoutStatus(!logoutStatus);
  }
  const clickHandler = () => {
    signOut(db).then((val) => {
      console.log(val);
      history('/');
    })
  }


  return (
    <div className='bg-black text-white flex justify-between'>
      {/*Navbar */}
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
            
            <Link to='/reels'>
            <div className="flex items-center p-4 gap-3 hover:bg-[#1a1a1a] hover:rounded-md duration-200"><FaClapperboard className='text-2xl'/><p className="text-md font-semibold lg:block hidden">Reels</p></div>
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

            <Link to=''>
            <div className="flex items-center p-4 gap-3 hover:bg-[#1a1a1a] hover:rounded-md duration-200"><FaRegPlusSquare className='text-2xl'/><p className="text-md font-semibold lg:block hidden">Create</p></div>
            </Link>
            <Link to='/user'>
            <div className="flex items-center p-4 gap-3 hover:bg-[#1a1a1a] hover:rounded-md duration-200"><FaRegUserCircle className='text-2xl'/><p className="text-md font-semibold lg:block hidden">Profile</p></div>
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
      
      {/*Dicover section */}
      

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
            <p className='text-blue-600 text-xs cursor-pointer'>Switch</p>
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
