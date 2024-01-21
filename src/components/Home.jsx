import logo from './../assets/insta-logo-dark.png'
import user from './../assets/user-img.jpg'
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




export default function Home() {
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
            <div className="flex items-center p-4 gap-3"><MdHomeFilled className='text-2xl '/><p className="text-md font-semibold lg:block hidden">Home</p></div>
            <div className="flex items-center p-4 gap-3"><FaSearch className='text-2xl'/><p className="text-md font-semibold lg:block hidden">Search</p></div>
            <div className="flex items-center p-4 gap-3"><FaCompass className='text-2xl'/><p className="text-md font-semibold lg:block hidden">Discover</p></div>
            <div className="flex items-center p-4 gap-3"><FaClapperboard className='text-2xl'/><p className="text-md font-semibold lg:block hidden">Reels</p></div>
            <div className="flex items-center p-4 gap-3">
              <div className='flex relative'>
                <FaFacebookMessenger className='text-2xl'/>
                <p className='w-4 h-4 bg-[#ff3040] rounded-full absolute top-0 left-4 text-xs text-center'>4</p>
              </div>
              <p className="text-md font-semibold lg:block hidden">
                Messages
              </p>
            </div>
            <div className="flex items-center p-4 gap-3">
              <div className='flex relative'>
                <FaRegHeart className='text-2xl' />
                <p className='w-3 h-3 bg-[#ff3040] rounded-full absolute top-0 left-4'> </p>
              </div>
              <p className="text-md font-semibold lg:block hidden">Notifications</p></div>
            <div className="flex items-center p-4 gap-3"><FaRegPlusSquare className='text-2xl'/><p className="text-md font-semibold lg:block hidden">Create</p></div>
            <div className="flex items-center p-4 gap-3"><FaRegUserCircle className='text-2xl'/><p className="text-md font-semibold lg:block hidden">Profile</p></div>
          </div>
          <div>
            <div className="flex items-center p-4 gap-3">
              <div className='flex relative'>
                <BsThreads className='text-2xl'/>
                <p className='w-4 h-4 bg-[#ff3040] rounded-full absolute top-0 left-4 text-xs text-center'>8</p>
              </div>
              <p className='text-md font-semibold lg:block hidden'>Threads</p>
            </div>
            <div className="flex items-center p-4 gap-3"><FaGripLines className='text-2xl'/><p className='text-md font-semibold lg:block hidden'>More</p></div>
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
              <p className=''>_.nobita.x</p>
              <p className=''>Saurav Tiwari</p>
            </div>
            <p className='text-blue-600 text-xs'>Switch</p>
          </div>
          <div className='flex justify-between my-2'>
            <h1 className='text-[#737373]'>Suggested for you</h1>
            <p className=''>See All</p>
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
