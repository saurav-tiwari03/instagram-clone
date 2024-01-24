import instaDemo from './../assets/insta-demo.png'
import instaLogo from './../assets/insta-logo.png'
import playIcon from './../assets/play-btn.png'
import windowIcon from './../assets/window-btn.png' 
import { IoLogoFacebook } from "react-icons/io";
import {Link} from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { db } from '../config/firsbase';

export default function LoginSignup() {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();


  const signInHandler = () => {
    try {
      signInWithEmailAndPassword(db, email, password)
        .then(() => console.log('Signin successful'));
    } catch (error) {
      console.log(error);
    }
    

  }

  return (
    <div className='flex justify-center items-center gap-4 mt-12 overflow-x-hidden'>
      <div className='lg:block md:block hidden'>
        <img src={instaDemo} alt="" width={400}/>
      </div>
      <div className=''>
        <div className='flex flex-col'>
          <div className='border-[1px] border-[#cdcdcd] p-12'>
            <div className='flex justify-center mb-8'>
              <img className='' src={instaLogo} alt="" width={200} />
            </div>
          
            <div>
              <div  className='flex flex-col gap-2'>
                <input onChange={(e) => setEmail(e.target.value)} className='bg-[#fafafa] rounded-sm h-10 border-[1px] border-[#cdcdcd] m-auto w-[250px] p-1 text-xs outline-none' type="email" name='email' placeholder='Phone number,username, or email'/>
                <input onChange={(e) => setPassword(e.target.value)} className='bg-[#fafafa] rounded-sm h-10 border-[1px] border-[#cdcdcd] m-auto w-[250px] p-1 text-xs outline-none' type="text" name='password' placeholder='Password'/>
                  <button onClick={signInHandler}  className='bg-[#4cb5f9] w-[250px] m-auto text-center text-white rounded-md py-1'>
                    Sign in
                  </button>
              </div>
              <p className='text-center my-4'>-------OR-------</p>
              <a href="https://shorturl.at/qDNQ4" className='my-2 flex items-center justify-center text-[#385185] font-medium text-sm '><IoLogoFacebook className='mr-1 text-xl'/> Log in with Facebook</a>
              <p className='text-sm text-center my-2'>Forgot password?</p>
            </div>
          </div>
          <div className='border-[1px] border-[#cdcdcd] my-4 '>
            <p className='text-center p-4'>Dont have an account? <Link to='/signup'>Sign up</Link> </p>
          </div>

          <div className='text-center text-sm my-2'>
            Get the app
          </div>

          <div className=''>
            <div className='flex justify-evenly'>
              <a href='https://shorturl.at/pvCK5' target='_blank' rel="noreferrer" className='bg-[#000] text-white flex items-center rounded-md px-2'><img src={playIcon} width={30} /><p className='text-xs text-start '>Get it from <br/> <span className='text-lg font-semibold'>Google Play </span></p> </a>
              <a href='https://shorturl.at/lANW5' target='_blank' rel="noreferrer" className='bg-[#000] text-white flex items-center rounded-md px-2'><img src={windowIcon} width={30} /> <p className='text-xs text-start'>Get it from <br/> <span className='text-lg font-semibold'>Microsoft</span></p> </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
