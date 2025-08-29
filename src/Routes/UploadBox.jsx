import { RxCross1 } from "react-icons/rx";
import { FaGlobeAmericas } from "react-icons/fa";
import React, { useContext } from 'react'
import { ContextStore } from '../Store/ContextStore'
import { useNavigate } from "react-router-dom";

function UploadBox() {
    const navigate = useNavigate()
    const {imgSource,setTitle,addPostFun} = useContext(ContextStore)
  return (
    <div className='w-screen h-screen bg-[#f1f2f6] flex items-center justify-center'>
            <div className='w-[500px] bg-white flex flex-col px-3 rounded-md'>
                <div className='w-full py-3 text-center relative text-2xl font-bold border-b-[1px] border-b-gray-200'>
                    <h4>Create Post</h4>
                    <RxCross1 className="text-4xl absolute right-2 top-1/4 p-2 text-gray-500 bg-gray-300 rounded-full "/>
                </div>
                <div className='w-full py-3 flex items-center gap-1.5'>
                    <img className='rounded-full w-12 h-12' src="/images/myprofile.jpg" alt="" srcset="" />
                    <div>
                        <p className='font-semibold text-[20px]'>Salman Hanif</p>
                        <button className='bg-gray-400 flex items-center gap-0.5 rounded-md py-0.5 px-2 text-[10px]'>Public
                            < FaGlobeAmericas />
                        </button>
                    </div>
                </div>
                <input onChange={(e)=>{setTitle(e.target.value,navigate);
                }} className='w-full py-3 focus:outline-none' type="text" placeholder='Whats in you mind Salman?' />
                <div className='w-full rounded-2xl h-[300px] overflow-y-scroll'>
                <img className='w-full rounded-3xl' src={imgSource} alt="" srcset="" />
                </div>
                <button onClick={()=>addPostFun(navigate)
                } className='bg-blue-600 text-white my-2 font-semibold py-1 w-full rounded-md' type="button">Post</button>
            </div>
    </div>
  )
}

export default UploadBox





