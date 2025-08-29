import { AiOutlineLike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { TbDots } from "react-icons/tb";
import { IoMdGlobe } from "react-icons/io";
import { v4 } from "uuid";

function Video() {
  const videos = [
    {
      profile:'https://imageio.forbes.com/specials-images/imageserve/663e595b4509f97fdafb95f5/0x0.jpg?format=jpg&crop=383,383,x1045,y23,safe&height=416&width=416&fit=bounds',
      name:"Messi is Love",
      postVid:'/images/video3.mp4',
      time:'May 1, 2024',
      title:'GOAT 🐐',
      reactions:'507 . 22 comments .75k views ',
      comments:53
    },
    {
      profile:'data:image/jpeg;base64,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',
    name:"Fun File",
    postVid:'/images/video2.mp4',
    time:'January 22, 2025',
    title:'🤣',
    reactions:'507 . 22 comments .75k views ',
    comments:503
  },
  {
    profile:'/images/profile4.jpg',
    name:"Ayeza Khan",
    time:'January 22, 2025',
    postVid:'/images/video1.mp4',
    title:'HBD LIO',
    reactions:'507 . 22 comments .75k views ',
    comments:46
  },
 
]
  return (
  
      <div className='flex flex-col items-center py-3.5 w-full whitespace-pre-wrap lg:w-[75%] lg:ml-[350px] bg-[#f1f2f6]'>
        {
                      videos.map((e)=>(
        
                     
        
        
                  <div key={v4()} className=" lg:w-[70%] w-full gap-2 flex flex-col bg-white py-3.5  rounded-md">
                  {/* profile and name */}
                    <div id="profilediv" className="flex items-center px-2.5 justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className=" w-11 h-11 overflow-hidden rounded-full">
                        <img src={e.profile} alt="" srcset="" />
                        </ div>
                        <div className='leading-4'>
                        <p className="font-bold text-[15px]">{e.name} . <span className="text-blue-600 font-semibold">Follow</span></p>
                        <div className="text-gray-500 flex gap-0.5 items-center text-[13px] font-medium">{e.time} . <IoMdGlobe/> </div>
                        </div>
                      </div>
        
                      <div className="flex text-gray-500 text-2xl items-center gap-2">
                      <TbDots/>
                      </div>
                    </div>
                    {/* title/des */}
                      <div className="px-3.5">
                      {e.title}
                      </div>
                      {/* image video */}
                    <div className="flex justify-center bg-black/70 backdrop-blur-2xl">
                    <video className="h-[800px]" muted controls src={e.postVid}></video>
                    </div>
        
                    {/* like and comments count */}
                   
                    <div className="flex justify-between lg:flex-row flex-col gap-1.5 items-center border-b-[1px] px-3 py-1 border-gray-600 ">
                    {/* like and comment button */}
                      <div className='w-1/2 grid grid-cols-3 gap-0.5 font-bold text-gray-400 text-[11px]'>
                    <div  className='hover:bg-[#f1f2f6] justify-center flex items-center cursor-pointer gap-1 rounded-md w-full py-1.5 px-4'>
                     <AiOutlineLike className="text-2xl"/>
                    <p>Live</p>
                    </div>
                    <div  className='hover:bg-[#f1f2f6] justify-center flex items-center cursor-pointer gap-1 rounded-md w-full py-1.5 px-4'>
                    < FaRegComment className="text-2xl"/>
                    <p>Comment</p>
                    </div>
                    <div  className='hover:bg-[#f1f2f6] justify-center flex items-center cursor-pointer gap-1 rounded-md w-full py-1.5 px-4'>
                    <PiShareFat className="text-2xl"/>
                    <p>Share</p>
                    </div>
                  </div>
                   <div className="flex gap-1.5 items-center">
                    <div className="flex">
                    <img className="h-5" src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E" alt="" srcset="" />
                    <img className="h-5" src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9963 8c0 4.4179-3.5811 7.9993-7.9986 7.9993-4.4176 0-7.9987-3.5814-7.9987-7.9992 0-4.4179 3.5811-7.9992 7.9987-7.9992 4.4175 0 7.9986 3.5813 7.9986 7.9992Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M7.9996 5.9081c-.3528-.8845-1.1936-1.507-2.1748-1.507-1.4323 0-2.4254 1.328-2.4254 2.6797 0 2.2718 2.3938 4.0094 4.0816 5.1589.3168.2157.7205.2157 1.0373 0 1.6878-1.1495 4.0815-2.8871 4.0815-5.159 0-1.3517-.993-2.6796-2.4254-2.6796-.9811 0-1.822.6225-2.1748 1.507Z' fill='%23fff'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23E11731' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23E11731' stop-opacity='.1'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3986' y1='2.4007' x2='13.5975' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF74AE'/%3E%3Cstop offset='.5001' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23FF5758'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.001.0009h15.9992v15.9984H-.001z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E" alt="" srcset="" />
                    </div>
                   
                    <p className="text-gray-500 text-[14px]">{e.reactions}</p>
                   </div>
                 
                    </div>
                      
        
        
                  </div>
        
         ))
                    }
      </div>
  )
}

export default Video