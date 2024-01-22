import { Link } from 'react-router-dom';
import instaLogo from './../assets/insta-logo.png'
import { FaFacebookSquare } from "react-icons/fa";
import playIcon from './../assets/play-btn.png'
import windowIcon from './../assets/window-btn.png'


export default function SignUp() {
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
        <form action="" className='flex flex-col items-center justify-center gap-2 '>
          <input className='bg-[#fafafa] rounded-sm h-10 border-[1px] border-[#cdcdcd] m-auto w-[250px] p-1 text-xs outline-none' type="text" placeholder='Mobile number or Email'/>
          <input className='bg-[#fafafa] rounded-sm h-10 border-[1px] border-[#cdcdcd] m-auto w-[250px] p-1 text-xs outline-none' type="text" placeholder='Full Name'/>
          <input className='bg-[#fafafa] rounded-sm h-10 border-[1px] border-[#cdcdcd] m-auto w-[250px] p-1 text-xs outline-none' type="text" placeholder='Username'/>
          <input className='bg-[#fafafa] rounded-sm h-10 border-[1px] border-[#cdcdcd] m-auto w-[250px] p-1 text-xs outline-none' type="text" placeholder='Password'/>
          <p className='text-[#737373] my-1 text-center flex flex-wrap w-[250px] text-[11px] items-center justify-center'>People who use our service may have uploaded your contact information to Instagram. 
          Learn More</p>
          <p className='text-center w-[250px] text-[11px] text-[#737373] my-1'>
            By signing up, you agree to our 
            <a href="https://help.instagram.com/581066165581870/?locale=en_US" target='_blank' rel='noreferrer'>Terms,</a>
            <a href="https://www.facebook.com/privacy/policy" target='_blank' rel='noreferrer'>Privacy Policy</a>  and 
            <a href="https://privacycenter.instagram.com/policies/cookies/" target='_blank' rel='noreferrer'>Cookies Policy</a> .</p>
          <button className='bg-[#4591fa] hover:bg-[#1877f2] text-white flex items-center justify-center w-[200px] p-1 rounded-md'>Sign up</button>
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
      <div className='my-12 flex flex-col items-center justify-center'>
        <div className='text-xs flex lg:gap-4 md:gap-2 gap-1 flex-wrap` text-center'>
          <a className='hover:underline' target='_blank' rel='noreferrer' href="https://about.meta.com/">About</a>
          <a className='hover:underline' target='_blank' rel='noreferrer' href="https://about.instagram.com/">Blog</a>
          <a className='hover:underline' target='_blank' rel='noreferrer' href="https://about.instagram.com/blog/">Meta</a>
          <a className='hover:underline' target='_blank' rel='noreferrer' href="https://www.instagram.com/about/jobs/">Jobs</a>
          <a className='hover:underline' target='_blank' rel='noreferrer' href="https://help.instagram.com/">Help</a>
          <a className='hover:underline' target='_blank' rel='noreferrer' href="https://developers.facebook.com/docs/instagram">API</a>
          <a className='hover:underline' target='_blank' rel='noreferrer' href="https://www.instagram.com/legal/privacy/">Privacy</a>
          <a className='hover:underline' target='_blank' rel='noreferrer' href="https://www.instagram.com/privacy/cookie_settings/">Cookie Settings</a>
          <a className='hover:underline' target='_blank' rel='noreferrer' href="https://www.instagram.com/legal/terms/">Terms</a>
          <a className='hover:underline' target='_blank' rel='noreferrer' href="https://www.instagram.com/explore/locations/">Locations</a>
          <a className='hover:underline' target='_blank' rel='noreferrer' href="https://www.instagram.com/web/lite/">Instagram Lite</a>
          <a className='hover:underline' target='_blank' rel='noreferrer' href="https://www.threads.net/">Threads</a>
          <a className='hover:underline' target='_blank' rel='noreferrer' href="https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fhelp%2Finstagram%2F261704639352628&e=AT053hfbynsCeOCv42oZxBoxIx6wJOKD-8jOsYqRxBmuVZScaPsOWawODi75WXPd3rTgjgAbfsISLDv4pX8l4Ra80LeNbW9eCnm2ebKaALBJBFgCHobLSEanET0ymaxEtfpEwXFGOwbKtd3ijr7yw7u_qAAqLtomi6cfcA">Contact Uploading & Non-Users</a>
          <a className='hover:underline' target='_blank' rel='noreferrer' href="https://about.meta.com/technologies/meta-verified/">Meta Verified</a>
        </div>
        <div>
          <p className='text-center my-2 text-xs '>© 2024 Instagram from Meta</p>
        </div>
      </div>
    </div>
  )
}