/* eslint-disable no-unused-vars */
import { useState, useRef } from 'react';
import dragNDrop from '../assets/drag-n-drop.png';
import { addDoc,collection } from 'firebase/firestore';
import { database } from '../config/firebase';

export default function Create() {
  const [show, setShow] = useState(false);
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [imageVisible, setImageVisible] = useState(true);
  
  const value = collection(database,"users")

  const clickHandler = () => {
    inputRef.current.click();
  };

  const changeHandler = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setImageVisible(false);
  };

  const uploadHandler= async() => {
    await addDoc(value,{userPost:{file}});
  }

  return (
    <div>
      {show ? (
        ''
      ) : (
        <div className='absolute flex items-center justify-center h-[100vh] w-[100vw] rounded-xl'>
          <div className='h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] bg-[#262626] rounded-xl'>
            <div className='flex items-center justify-center'>
              <p className='text-center text-xl font-semibold py-1'>Create new post</p>
              
            </div>
            <hr />
            <div  className='flex items-center justify-center h-full w-full'>
              <div className='w-[200px] h-[200px] flex flex-col justify-center gap-10'>
                {imageVisible ? (
                  <img onClick={clickHandler} className='cursor-pointer' width={250} src={dragNDrop} alt='Drag and Drop' />
                ) : (
                  <img onClick={clickHandler} className='rounded-md cursor-pointer' width={150} src={file ? URL.createObjectURL(file) : dragNDrop} alt='' />
                )}
                <input type='file' ref={inputRef} onChange={changeHandler} style={{ display: 'none' }} />
                <button className='text-center bg-blue-500 rounded-md py-1'
                onClick={uploadHandler}>Upload</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
