import React from 'react'

function Container({children}) {
  return (
    <div className='bg-[#f1f2f6] text-black max-w-screen mx-auto'>{children}</div>
  )
}

export default Container