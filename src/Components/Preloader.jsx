import React, { useEffect, useState } from 'react'
import { FaFacebook } from "react-icons/fa";

function Preloader() {
    const [preloader, setPreloader] = useState(false)
    useEffect(() => {
          const timer = setTimeout(() => {
                setPreloader(true)
            }, 2000);

       return ()=> clearTimeout(timer)
    }, [])
    
  return (
    <div className={`fixed ${preloader && 'hidden'} h-screen text-7xl w-screen text-blue-600 bg-white z-70 flex justify-center items-center`}>
        <FaFacebook/>
    </div>
  )
}

export default Preloader