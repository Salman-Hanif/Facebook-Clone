import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { v4 } from 'uuid';

function Sidebar() {
    const sidebar1 = [
        {
            image:'/images/myprofile.jpg',
            title:'Salman Hanif'
        },
        {
            image:'https://static.xx.fbcdn.net/rsrc.php/v4/yX/r/w5I9ktz_3Ib.png?_nc_eui2=AeErjRKvScFJ2n00gwG5zQhGeJuJLUjrSS54m4ktSOtJLhE13kEMzgNuEE7q6ksaSw3sOIdG17P1q0WrgcjgyMQC',
            title:'Meta'
        },
        {
            image:'https://static.xx.fbcdn.net/rsrc.php/v4/y5/r/UcI9fM2oUUV.png?_nc_eui2=AeGyCLfNnao72E9GcLKUGHQ8l_S6Gttu7AiX9Loa227sCDs7g-m3MhQHfm0TAFGIeXC9LLnWLMD6zmb-3C0QyW7r',
            title:'Professional Dashboard'
        },
        {
            image:'https://static.xx.fbcdn.net/rsrc.php/v4/yb/r/eECk3ceTaHJ.png?_nc_eui2=AeFv2XrJKiiU8qOH3hUEpCPtF-F-rSS5bMUX4X6tJLlsxaGeYlImqnmX5duFrS1W2CmHcOZXzXIN_vUyn4y8KhAW',
            title:'Feeds'
        },
        {
            image:'https://static.xx.fbcdn.net/rsrc.php/v4/yq/r/MKwrVp_7k1D.png?_nc_eui2=AeG5G4adMPl74KlViU7utWL0uLqVmFvPuxq4upWYW8-7GmMyho_3efRxFdv_Tfjeni3BUK4lyB92E1MmN7CL-QFv',
            title:'Gifts'
        },
        {
            image:'https://scontent.fkhi2-2.fna.fbcdn.net/v/t1.15752-9/393810885_2231790810345018_805470013994639129_n.jpg?stp=cp0_dst-jpg_s50x50_tt6&_nc_cat=101&ccb=1-7&_nc_sid=54a0aa&_nc_eui2=AeGRDsRc9XLgeDgQ_iue3WBdxocju7VE-zfGhyO7tUT7Ny0KTXri1tFLDlIGMnCVy8357ROLRH2ZnRnCkf1X73TL&_nc_ohc=j-B4CIcX03IQ7kNvwEKq5k4&_nc_oc=AdmujIHF9P2Z4ZnPm2otPwvI1LsoTPpTvSde3j8dM3rGuaqqLm4wOUfGkFTO3V_wcYw&_nc_zt=23&_nc_ht=scontent.fkhi2-2.fna&oh=03_Q7cD3AGd5cRPDFHL2IWZeQ4Ki5KZg5MoN2PRxAbuszek6VbEBQ&oe=68CFB473',
            title:'Fox'
        },
    ]

    const sidebar2 = [
                {
            image:'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.2081-6/42630609_2166936443330818_3464735768197464064_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=ed3f67&_nc_eui2=AeHyhY29w8y5WwDELFcZ3l-MkGwkPrvJAp6QbCQ-u8kCnk--MjyNYqwVcl8AZDg4OVXrvL_zis4N5LQprWtDHZFW&_nc_ohc=aDPdlC2GyEUQ7kNvwFSXPbw&_nc_oc=Adncat6akXs4ryqjPkqrK38pVCc3kuIawY_MOTmTMxkgY3r8FiAmgedaPdBE_n3RulI&_nc_zt=14&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=DlcfpmyJaLKcYftScshAgg&oh=00_AfWSZrBbBBLM-54f9KoXdQ-faWNZYWjZRlrmGMmRMsC0cQ&oe=68ADF92F',
            title:'8 BallPool'
        },
                {
            image:'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.2081-6/21817190_1496498490442841_8651979251471351808_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=ed3f67&_nc_eui2=AeHMX8imRBQwipdVuPtl_G4XrXumjnUA3eyte6aOdQDd7BgCO03FHp_75yUJEXRYDFrFBUTNkv1a65h5OFhciQn7&_nc_ohc=aFQ7KFIV6RUQ7kNvwFEoEme&_nc_oc=AdlckQZInPBH97UgfHjpGZQL2zZWykngjNaXVV-XNUcyhfs4se3Z9BRvWMbgoZuDOrE&_nc_zt=14&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=DlcfpmyJaLKcYftScshAgg&oh=00_AfWlJnkPT33KhnefoY-ngEHwoiTMqs1lBY98YNzLYHGAWg&oe=68AE025A',
            title:'Blossom Blast'
        },
                {
            image:'https://scontent.fkhi2-2.fna.fbcdn.net/v/t39.30808-1/449781035_122158023506113654_2510255820372433625_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=103&ccb=1-7&_nc_sid=f907e8&_nc_eui2=AeFLXCtLk7EA39mxdOhN1B6C1Dg2eCroPUTUODZ4Kug9RFqmLPlk_Bcz-NnVjtpPMEwpg51r7A4RSPVYNoS_LO3X&_nc_ohc=PYjWD_RPOVIQ7kNvwEFq-rv&_nc_oc=AdkKPWD_QKTqkdllgCVxUZ5LPhqx-pofU5oUL1Ao_VWw9kxln4vIQrKiwEMIxKbu37s&_nc_zt=24&_nc_ht=scontent.fkhi2-2.fna&_nc_gid=DlcfpmyJaLKcYftScshAgg&oh=00_AfW6pThrnGlMNrlkpJt0X-ukcz8Ve236_ppF_cyraqLuqw&oe=68ADF178',
            title:'Movie Box'
        },
                {
            image:'https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.2081-6/10574700_1002395243110827_234271886_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=ed3f67&_nc_eui2=AeFVkzkVOTx1AWqNISfe78379x-GYi0ID1n3H4ZiLQgPWa9JCuC9xKY_nKQeLijg6J6un57SbP7VE6tlysdXwPgj&_nc_ohc=ysJFgSYsD6QQ7kNvwG5GCyL&_nc_oc=AdmYB4PCS1Rm2Jdl3I8wAGMZYYTcmeFZFIkg3PFyo2cRx1ZdRpaPl8R_f_6i0OuC9M8&_nc_zt=14&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=DlcfpmyJaLKcYftScshAgg&oh=00_AfWim3tSfSOUcFKRHHq9Dsa8FefWt-BQljyMH-OaEocHjQ&oe=68AE0236',
            title:'Teen Patti Gold'
        },
    ]
  return (
    
    <div className=' w-[350px] hidden fixed top-[60px] bottom-0 left-0 lg:flex flex-col overflow-y-scroll h-screen px-4 sidebar-left-scroll'>
        <div className='w-full flex flex-col gap-5.5 py-5 h-full border-b-gray-300 border-b-1'>


        {
            sidebar1.map((e)=>(
                
                <div key={v4()} className='flex font-semibold items-center text-[17px] gap-2'>
                    <img className='w-[40px] rounded-full h-[40px]' src={e.image} alt="" srcset="" />
                    {e.title}
                </div>
                
            ))
        }
                <div className='flex font-semibold items-center text-[17px] gap-2'>
                    <MdKeyboardArrowDown  className='w-[40px] rounded-full h-[40px] bg-white ' />
                    See More
                </div>
            </div>

        <div className='w-full  flex flex-col gap-5.5 py-5 h-full border-b-gray-300 border-b-1'>


            <h3 className=' semifont-bold text-gray-500 text-[20px]'>Your shortcuts</h3>
        {
            sidebar2.map((e)=>(
                <>
                <div key={v4()} className='flex font-semibold items-center text-[17px] gap-2'>
                    <img className='w-[40px] rounded-full h-[40px]' src={e.image} alt="" srcset="" />
                    {e.title}
                </div>
                </>
            ))
        }
                <div className='flex font-semibold items-center text-[17px] gap-2'>
                    <MdKeyboardArrowDown  className='w-[40px] rounded-full h-[40px] bg-white ' />
                    See More
                </div>
            </div>
            
    </div>
    
  )
}

export default Sidebar