import { useState } from 'react'
import user from './../assets/user-profile.png'
export const Story = ({userName}) => {
  return (
    <div>
      <div className=''>
        <div className='rounded-full'>
          <img className='rounded-full' id='story-border' src={user} width={75} alt="" />
          <p>{userName} </p>
        </div>
      </div>
    </div>
  )
}
