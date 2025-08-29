import React from 'react'
import { GoSearch } from "react-icons/go";
import { RxDotsHorizontal } from "react-icons/rx";
import { v4 } from 'uuid';

function Sponser() {
  const contacts = [
    {
      image:'/images/profile.jpg',
      name:'Rizwan Hanif'
    },
    {
      image:'/images/profile1.jpg',
      name:'Mukhtiar Ahmed'
    },
    {
      image:'/images/profile4.jpg',
      name:'Mahnoor Jamot'
    },
    {
      image:'/images/profile2.jpg',
      name:'Wahab Memon'
    },
    {
      image:'/images/profile5.jpg',
      name:'Danish Ali'
    },
    {
      image:'/images/profile6.jpg',
      name:'Ayan Hussain'
    }
  ]
  return (
    <div className='w-[250px] hidden overflow-y-scroll fixed top-[60px] bottom-0 right-0 px-2.5 h-screen lg:flex flex-col gap-2.5 sidebar-scroll'>
      <div className='flex flex-col gap-4 py-3.5 px-0.5 border-b-[1px] border-b-gray-300'>
        <h4 className='font-bold text-[20px] text-gray-500'>Sponsered</h4>
        <div className='flex items-center gap-5 '>
          <img className='h-20 w-50 rounded-md' src="/images/sponser1.jpg" alt="" srcset="" />
          <div className='text-[12px]'>
            <h4 className='font-semibold leading-4'>Save upto 31% on your tution fee </h4>
            <h6 className='text-gray-600 font-light'>web.ue.amsterdam.com</h6>
          </div>
        </div>
        <div className='flex items-center gap-2 '>
          <img className='h-20 w-50 rounded-md' src="/images/sponser2.jpg" alt="" srcset="" />
          <div className='text-[12px]'>
            <h4 className='font-semibold leading-4'>Iqra University Main Campus </h4>
            <h6 className='text-gray-600 font-light'>Admissions Open </h6>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 py-3.5 px-0.5 border-b-[1px] border-b-gray-300'>
        <h4 className='font-bold text-[20px] text-gray-500'>Birthdays</h4>
        <div className='flex items-center gap-1.5 '>
          <img className='h-15 w-15 rounded-md' src="https://static.xx.fbcdn.net/rsrc.php/v4/yq/r/MKwrVp_7k1D.png?_nc_eui2=AeG5G4adMPl74KlViU7utWL0uLqVmFvPuxq4upWYW8-7GmMyho_3efRxFdv_Tfjeni3BUK4lyB92E1MmN7CL-QFv" alt="" srcset="" />
          <div className=''>
            <h6 className='leading-5 text-[15px] font-light'><span className='font-semibold pr-0.5'>Asad Jaffri's</span>Birthday is today </h6>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 py-3.5 px-0.5 border-b-[1px] border-b-gray-300'>
        <div className='flex items-center justify-between px-0.5'>
        <h4 className='font-bold text-[20px] text-gray-500'>Contacts</h4>
        <div className='text-2xl text-gray-500 flex items-center gap-1.5'>
          <GoSearch/>
          <RxDotsHorizontal/>
        </div>
        </div>
        {
          contacts.map((e)=>(

            <div key={v4()} className='flex items-center gap-1.5 '>
          <div  className='h-10 overflow-hidden w-10 rounded-[50%]'>
          <img className='w-full' src={e.image} alt="" srcset="" />
          </div>
          <div className=''>
            <h4 className='font-semibold leading-5'>{e.name}</h4>
          </div>
        </div>
          ))
        }
      </div>
    </div>
  )
}

export default Sponser