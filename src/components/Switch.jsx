import React, { useEffect, useState } from 'react';
import user from './../assets/user-profile.png';
import { ImCross } from 'react-icons/im';

export default function Switch(props) {
  const [loginAccount, setLoginAccount] = useState(false);
  const [show, setShow] = useState(true);


  return (
    <div>
      {show ? (
        <div>
          {loginAccount ? (
            <div className='absolute h-[100vh] flex flex-col items-center justify-center'>
              {/* Your login account content */}
              <div className='bg-[#262626] h-[250px] w-[400px] rounded-md'>
                <div className='flex items-center justify-end gap-28 mr-4'>
                  <div className='text-xl text-center'>Login accounts</div>
                  <p>
                    <ImCross className='cursor-pointer' onClick={() => setShow(!show)} />
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className='absolute h-[100vh] flex flex-col items-center justify-center'>
              {/* Your switch accounts content */}
              <div className=' bg-[#262626] h-[250px] w-[400px] rounded-md'>
                <div className='flex items-center justify-end gap-28 mr-4'>
                  <div className='text-xl text-center'>Switch accounts</div>
                  <p>
                    <ImCross className='cursor-pointer' onClick={() => setShow(!show)} />
                  </p>
                </div>
                <div className='bg-[#363636] h-[2px] w-full my-1'></div>
                <div className='flex items-center gap-20'>
                  <img src={user} width={50} className='rounded-full' alt='' />
                  <p className='text-center'>_.nobita.x</p>
                </div>
                <div className='flex items-end justify-center '>
                  <button
                    onClick={() => setLoginAccount(!loginAccount)}
                    className='text-blue-600 font-semibold hover:text-[#e0f1ff]'
                  >
                    Log into Existing Account
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
