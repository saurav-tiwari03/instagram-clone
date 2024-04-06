/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom';
import instaLogo from './../assets/insta-logo.png'
import { FaFacebookSquare } from "react-icons/fa";
import playIcon from './../assets/play-btn.png'
import windowIcon from './../assets/window-btn.png'
import { useState } from 'react';
// import {  } from './../config/firsbase';
import { addDoc, collection,getDocs } from 'firebase/firestore';
import { db,database } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";


export default function SignUp() {
  const history = useNavigate();
  const [email,setEmail] = useState();
  const [name,setName] = useState();
  const [userId,setUserId] = useState();
  const [password,setPassword] = useState();
  const [val,setVal] = useState();
  const [eye,setEye] = useState();

  const value = collection(database,"users")

  const getData = async() => {
    const dbVal = await getDocs(value);
    setVal(dbVal);
  }
  

  const handleUser = async() =>{
    try {
      await createUserWithEmailAndPassword(email,password)
      await addDoc(value,{email:email,name:name,userid:userId,password:password,bio:""})
    } catch (error) { 
      console.log(error);
    }
    getData();
    history('/',{ propKey: {email:email,name:name,userid:userId,password:password} });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(db, email, password);
  }

  const eyeHandler = () => {
    setEye(!eye);
  }

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <div className='flex flex-col border-[1px] border-[#dbdbdb] items-center justify-center p-12 mt-4'>
        <img src={instaLogo} width={150} alt="" />
        <p className='text-[#737373] w-[250px] text-center'>Sign up to see photos and videos from your friends.</p>
        <a className='bg-[#4591fa] hover:bg-[#1877f2] text-white flex items-center justify-center w-[250px] p-1 rounded-md'
        href="https://shorturl.at/acxzJ" target='_blank' rel="noreferrer"><FaFacebookSquare/> Log in with Facebook</a>
        <div className='flex items-center justify-center gap-4 my-2'>
          <p className='bg-[#dbdbdb] h-[2px] w-[100px]'></p>
          <p>OR</p>
          <p className='bg-[#dbdbdb] h-[2px] w-[100px]'></p>
        </div>
        <form onSubmit={(e) => submitHandler(e)} className='flex flex-col items-center justify-center gap-2 '>
          <input className='bg-[#fafafa] rounded-sm h-10 border-[1px] border-[#cdcdcd] m-auto w-[250px] p-1 text-xs outline-none' onChange={(val) => setEmail(val.target.value)} type="text" name='email' placeholder='Mobile number or Email'/>
          <input className='bg-[#fafafa] rounded-sm h-10 border-[1px] border-[#cdcdcd] m-auto w-[250px] p-1 text-xs outline-none' onChange={(val) => setName(val.target.value)} type="text" name='name' placeholder='Full Name'/>
          <input className='bg-[#fafafa] rounded-sm h-10 border-[1px] border-[#cdcdcd] m-auto w-[250px] p-1 text-xs outline-none' onChange={(val) => setUserId(val.target.value)} type="text" name='userid' placeholder='Username'/>
          <div className='flex relative items-center' >
            <input className='bg-[#fafafa] rounded-sm h-10 border-[1px] border-[#cdcdcd] m-auto w-[250px] p-1 text-xs outline-none' onChange={(val) => setPassword(val.target.value)} type={`${eye ? 'text' : 'password'}`} name='password' placeholder='Password'/>
            <div onClick={eyeHandler} className='absolute right-2 text-xl cursor-pointer select-none'>
              {
                eye ? <FaRegEyeSlash /> : <FaRegEye />
              }
            </div>
          </div>
          <p className='text-[#737373] my-1 text-center flex flex-wrap w-[250px] text-[11px] items-center justify-center'>People who use our service may have uploaded your contact information to Instagram. 
          Learn More</p>
          <p className='text-center w-[250px] text-[11px] text-[#737373] my-1'>
            By signing up, you agree to our 
            <a href="https://help.instagram.com/581066165581870/?locale=en_US" target='_blank' rel='noreferrer'>Terms,</a>
            <a href="https://www.facebook.com/privacy/policy" target='_blank' rel='noreferrer'>Privacy Policy</a>  and 
            <a href="https://privacycenter.instagram.com/policies/cookies/" target='_blank' rel='noreferrer'>Cookies Policy</a> .</p>
          <button onClick={(data) => handleUser(data)} className='bg-[#4591fa] hover:bg-[#1877f2] text-white flex items-center justify-center w-[200px] p-1 rounded-md'>Sign up</button>
        </form>
      </div>
      <div className='flex border-[1px] border-[#dbdbdb] px-[89px] py-5'>
        <p>Have an account? </p><Link to='/' className='text-[#4591fa]'>Log in</Link>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='text-center'>Get the app.</div>
        <div className=''>
          <div className='flex justify-evenly gap-2'>
            <a href='https://shorturl.at/pvCK5' target='_blank' rel="noreferrer" className='bg-[#000] text-white flex items-center rounded-md px-2'><img src={playIcon} width={30} /><p className='text-xs text-start '>Get it from <br/> <span className='text-lg font-semibold'>Google Play </span></p> </a>
            <a href='https://shorturl.at/lANW5' target='_blank' rel="noreferrer" className='bg-[#000] text-white flex items-center rounded-md px-2'><img src={windowIcon} width={30} /> <p className='text-xs text-start'>Get it from <br/> <span className='text-lg font-semibold'>Microsoft</span></p> </a>
          </div>
        </div>
      </div>
      
    </div>
  )
}
