import { v4 } from "uuid";
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { FaRegComment } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { TbDots } from "react-icons/tb";
import { FaCirclePlus } from "react-icons/fa6";
import { IoMdGlobe } from "react-icons/io";
import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { ContextStore } from "../Store/ContextStore";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const { posts, uploadPost } = useContext(ContextStore);

  const friends = [
    {
      img: "/images/profile.jpg",
    },
    {
      img: "/images/profile1.jpg",
    },
    {
      img: "/images/profile2.jpg",
    },
    {
      img: "/images/postprofile1.jpg",
    },
    {
      img: "/images/profile4.jpg",
    },
    {
      img: "/images/postprofile2.jpg",
    },
  ];
  const contact = [
    {
      img: "/images/profile.jpg",
    },
    {
      img: "/images/profile1.jpg",
    },
    {
      img: "/images/profile2.jpg",
    },
    {
      img: "/images/postprofile1.jpg",
    },
    {
      img: "/images/profile4.jpg",
    },
    {
      img: "/images/profile5.jpg",
    },
    {
      img: "/images/profile6.jpg",
    },
    {
      img: "/images/postprofile2.jpg",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="bg-[#f1f2f6] w-full">
        <div className="lg:w-[70%] w-full mx-auto mt-[60px] bg-white">
          {/* Banner section */}
          <div className="h-[200px] lg:h-[350px] w-full overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-bl-md rounded-br-md"
              src="/images/banner.jpg "
              alt=""
              srcset=""
            />
          </div>
          <div className=" flex flex-col lg:flex-row items-center justify-between">
            {/* Profile Pic/Name section  */}
            <div className="flex px-2.5 flex-col lg:flex-row items-start lg:items-center w-full gap-3.5">
              <img
                className="rounded-full border-7 mt-[-100px] lg:mt-[-50px] border-white"
                src="/images/myprofile.jpg"
                alt=""
                srcset=""
              />
              <div>
                <h3 className="font-bold text-4xl">Salman Hanif</h3>
                <p className="text-gray-500 font-semibold">
                  {" "}
                  <span className="font-bold text-black">1.6</span> followers .{" "}
                  <span className="font-bold text-black">11</span> following
                </p>
                {/* Contacts/Bio Section  */}
                <div className="lg:flex  hidden mt-2 w-full items-center">
                  {contact.map((e) => (
                    <img
                      key={v4()}
                      className="rounded-full lg:-m-0.5 w-8 h-8"
                      src={e.img}
                      alt=""
                      srcset=""
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Contacts/Bio Section  */}
            <div className="flex flex-col px-2.5 py-3.5 lg:hidden mt-2 w-full items-start">
              <div className="flex">
                {contact.map((e) => (
                  <img
                    key={v4()}
                    className="rounded-full lg:-m-1 w-8 h-8"
                    src={e.img}
                    alt=""
                  />
                ))}
              </div>
              <p>Frontend Developer</p>
              <p>Karachi Pakistan</p>
            </div>
            {/* Dashboard Button section  */}
            <div className="lg:py-9 w-full flex flex-col px-2.5 gap-3.5">
              <div className="flex gap-2.5 items-center justify-end">
                <button className="bg-blue-600 w-full lg:w-auto text-white font-semibold rounded-md px-4 py-1.5">
                  Professional Dashboard
                </button>
                <button className=" font-semibold rounded-md px-4 py-1.5 hidden lg:block bg-gray-200">
                  Edit
                </button>
              </div>
              <div className="flex items-center justify-end gap-2.5">
                <button className=" font-semibold rounded-md px-4 grow py-1.5 lg:hidden bg-gray-200">
                  Add to Story
                </button>
                <button className=" font-semibold rounded-md px-4 py-1.5 hidden lg:block bg-gray-200">
                  Advertise
                </button>
                <button className=" font-semibold rounded-md px-4 py-1.5 bg-gray-200">
                  <TbDots />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t-[1px] py-3.5 hidden lg:flex items-center justify-between px-3.5 border-gray-400">
            <div className="flex items-center gap-4.5">
              <p className="border-b-2 border-b-blue-600 text-blue-600 pb-5 font-semibold ">
                Posts
              </p>
              <p className="font-semibold text-gray-500 pb-5">About</p>
              <p className="font-semibold text-gray-500 pb-5">Reels</p>
              <p className="font-semibold text-gray-500 pb-5">Photos</p>
              <p className="font-semibold text-gray-500 pb-5">Videos</p>
              <p className="font-semibold text-gray-500 pb-5">Groups</p>
              <p className="font-semibold text-gray-500 pb-5">more</p>
            </div>
            <button className=" font-semibold rounded-md px-4 py-1.5 hidden lg:block bg-gray-200">
              <TbDots />
            </button>
          </div>
          {/* Post Section  */}
          <div className="w-full gap-4 bg-[#f1f2f6] flex">
            {/* Column 1 */}
            <div className="w-[40%] top-0 sticky hidden lg:flex bg-white">
              <div className="w-[350px] hidden lg:flex flex-col gap-4 sticky top-16 h-fit">
                {/* Intro Section */}
                <div className="bg-white shadow rounded-xl p-4">
                  <h2 className="text-xl font-bold mb-3">Intro</h2>
                  <ul className="flex flex-col gap-2 text-gray-900 text-sm">
                    <li>Frontend Developer</li>
                    <li>CS Noob</li>
                    <li>
                      <button className="w-full text-black font-semibold bg-gray-200 text-[15px] cursor-pointer py-2 px-1.5 rounded-md">
                        Edit Bio
                      </button>
                    </li>
                    <li className="font-medium">Profile · Digital Creator</li>
                    <li>Better at study</li>
                    <li>
                      Went to{" "}
                      <span className="font-medium">
                        Info English Grammar School Murad Memon Goth
                      </span>
                    </li>
                    <li>
                      Studied at{" "}
                      <span className="font-medium">
                        Jamia Millia Govt Degree College Morning
                      </span>
                    </li>
                    <li>
                      Went to{" "}
                      <span className="font-medium">
                        Crescent Grammar School
                      </span>
                    </li>
                    <li>
                      Lives in{" "}
                      <span className="font-medium">Karachi, Pakistan</span>
                    </li>
                    <li>
                      From <span className="font-medium">Malir</span>
                    </li>
                    <li>
                      Status: <span className="font-medium">Single</span>
                    </li>
                    <li>
                      <a
                        href="https://youtube.com/@Bekaar%20Boyz"
                        target="_blank"
                        className="hover:underline"
                      >
                        https://salmanhanif-portfolio.vercel.app/
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://youtube.com/@bekaarboyz?si=Xnz38aMgGeICGrX-"
                        target="_blank"
                        className="hover:underline"
                      >
                        https://www.linkedin.com/in/salman-hanif
                      </a>
                    </li>
                    <li>
                      <button className="w-full text-black font-semibold bg-gray-200 text-[15px] cursor-pointer py-2 px-1.5 rounded-md">
                        Edit Details
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Friends */}
                <div className="bg-white shadow rounded-xl p-4">
                  <h2 className="text-xl font-bold mb-3">Friends</h2>
                  <p className="text-gray-600 text-sm">1,546 friends</p>
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {friends.map((i) => (
                      <div
                        key={v4()}
                        className="bg-gray-200 overflow-hidden h-[90px] rounded-lg flex items-center justify-center text-xs"
                      >
                        <img className="w-full" src={i.img} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Column 2 */}
            <div className="lg:w-[60%] w-full bg-white">
              <div className="w-full flex">
                <main className="w-full lg:py-4 flex flex-col items-center">
                  <div className=" flex w-full flex-col gap-3.5">
                    <div className="bg-white gap-2.5 flex flex-col px-3.5 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)] rounded-md  border-b-gray-300 border-b-[1px] py-4">
                      <div className="flex  gap-2.5 items-center h-[40px] w-full">
                        <img
                          className="w-[40px] h-[40px] rounded-full"
                          src="/images/myprofile.jpg"
                          alt=""
                          srcset=""
                        />
                        <input
                          className="px-3.5 bg-[#f1f2f6] focus:outline-blue-400 text-[18px] text-gray-900 font-normal rounded-full w-full h-full"
                          type="text"
                          placeholder="Whats on you mind, Salman?"
                        />
                      </div>
                      <div className="w-full grid grid-cols-3 gap-1.5 font-bold text-gray-400 text-[17px]">
                        <div className="hover:bg-[#f1f2f6] justify-center flex items-center cursor-pointer gap-1 rounded-md w-full py-1.5 px-4">
                          <img src="/images/proicon1.png" alt="" srcset="" />
                          <p>Live</p>
                        </div>
                        <div className="hover:bg-[#f1f2f6] overflow-hidden relative justify-center flex items-center cursor-pointer gap-1 rounded-md w-full py-1.5 px-4">
                          <img src="/images/proicon2.png" alt="" />
                          <p>Photo/Video</p>

                          <input
                            className="absolute top-0 bottom-0 left-0 right-0 opacity-0"
                            type="file"
                            id="hiddenFileInput"
                            accept="image/*"
                            onChange={(e) => uploadPost(e, navigate)}
                          />
                        </div>
                        <div className="hover:bg-[#f1f2f6] justify-center flex items-center cursor-pointer gap-1 rounded-md w-full py-1.5 px-4">
                          <img src="/images/proicon3.png" alt="" srcset="" />
                          <p>Reel</p>
                        </div>
                      </div>
                    </div>

                    {/*                     Posts               */}
                    {posts.map((e) => (
                      <div
                        key={v4()}
                        className=" w-full gap-2 flex flex-col bg-white py-3.5  rounded-2xl"
                      >
                        {/* profile and name */}
                        <div
                          id="profilediv"
                          className="flex items-center px-2.5 justify-between"
                        >
                          <div className="flex items-center gap-1.5">
                            <div className=" w-11 h-11 overflow-hidden rounded-full">
                              <Link to="/profile">
                                <img
                                  className="w-full"
                                  src="/images/myprofile.jpg"
                                  alt=""
                                  srcset=""
                                />
                              </Link>
                            </div>
                            <div className="leading-4">
                              <p className="font-bold text-[15px]">
                                Salman Hanif
                              </p>
                              <div className="text-gray-500 flex gap-0.5 items-center text-[13px] font-medium">
                                {e.time} . <IoMdGlobe />{" "}
                              </div>
                            </div>
                          </div>

                          <div className="flex text-gray-500 text-2xl items-center gap-2">
                            <TbDots />
                            <RxCross2 />
                          </div>
                        </div>
                        {/* title/des */}
                        <div className="px-3.5">{e.title}</div>
                        {/* image video */}
                        <div className="flex justify-center">
                          <img
                            className="w-full"
                            src={e.postImg}
                            alt=""
                            srcset=""
                          />
                        </div>

                        {/* like and comments count */}

                        <div className="flex justify-between gap-1.5 items-center border-b-[1px] px-3 py-1 border-gray-600 ">
                          <div className="flex gap-1.5 items-center">
                            <div className="flex">
                              <img
                                className="h-5"
                                src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                                alt=""
                                srcset=""
                              />
                              <img
                                className="h-5"
                                src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9963 8c0 4.4179-3.5811 7.9993-7.9986 7.9993-4.4176 0-7.9987-3.5814-7.9987-7.9992 0-4.4179 3.5811-7.9992 7.9987-7.9992 4.4175 0 7.9986 3.5813 7.9986 7.9992Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M7.9996 5.9081c-.3528-.8845-1.1936-1.507-2.1748-1.507-1.4323 0-2.4254 1.328-2.4254 2.6797 0 2.2718 2.3938 4.0094 4.0816 5.1589.3168.2157.7205.2157 1.0373 0 1.6878-1.1495 4.0815-2.8871 4.0815-5.159 0-1.3517-.993-2.6796-2.4254-2.6796-.9811 0-1.822.6225-2.1748 1.507Z' fill='%23fff'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23E11731' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23E11731' stop-opacity='.1'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3986' y1='2.4007' x2='13.5975' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF74AE'/%3E%3Cstop offset='.5001' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23FF5758'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.001.0009h15.9992v15.9984H-.001z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                                alt=""
                                srcset=""
                              />
                            </div>

                            <p className="text-gray-500 text-[17px]">
                              {e.reactions}
                            </p>
                          </div>
                          <div className="flex items-center gap-1.5 text-gray-500">
                            <p>{e.comments}</p>
                            <FaComment />
                          </div>
                        </div>
                        {/* like and comment button */}
                        <div className="w-full grid grid-cols-3 gap-1.5 font-bold text-gray-400 text-[17px]">
                          <div className="hover:bg-[#f1f2f6] justify-center flex items-center cursor-pointer gap-1 rounded-md w-full py-1.5 px-4">
                            <AiOutlineLike className="text-2xl" />
                            <p>Live</p>
                          </div>
                          <div className="hover:bg-[#f1f2f6] justify-center flex items-center cursor-pointer gap-1 rounded-md w-full py-1.5 px-4">
                            <FaRegComment className="text-2xl" />
                            <p>Comment</p>
                          </div>
                          <div className="hover:bg-[#f1f2f6] justify-center flex items-center cursor-pointer gap-1 rounded-md w-full py-1.5 px-4">
                            <PiShareFat className="text-2xl" />
                            <p>Share</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
