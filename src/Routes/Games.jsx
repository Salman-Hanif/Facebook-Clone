import { v4 } from "uuid"

function Games() {
  const games = [
  {
    postImg:'/images/game1.jpg',
    name:'Ludo World',
    type:'Board'
  },
  {
    postImg:'/images/game2.jpg',
    name:'8 BallPool',
    type:'Sport'
  },
  {
    postImg:'/images/game3.jpg',
    name:'Ball Master',
    type:'Sport'
  },
  {
    postImg:'/images/game4.jpg',
    name:'Ludo King',
    type:'Board'
  },
  {
    postImg:'/images/game5.jpg',
    name:'Teen Patti',
    type:'Card'
  },
  {
    postImg:'/images/game6.jpg',
    name:'Hero Wars',
    type:'Sport'
  },
  {
    postImg:'/images/game7.jpg',
    name:'Ludo Club',
    type:'Board'
  },
  {
    postImg:'/images/game8.jpg',
    name:'Carrom',
    type:'Board'
  },

 
]
  const games2 = [
  {
    postImg:'/images/game9.jpg',
    title:'Family Farm'
  },
  {
    postImg:'/images/game10.jpg',
    title:'Uno Cards'
  },
  {
    postImg:'/images/game11.jpg',
    title:'Huntery'
  },
  {
    postImg:'/images/game12.jpg',
    title:'Merge Vally'
  },
  {
    postImg:'/images/game13.jpg',
    title:'WormZone'
  },
  {
    postImg:'/images/game6.jpg',
    title:'Hero Wars'
  },
  

 
]
  return (
  
      <div className='flex flex-col gap-5  w-full lg:w-[75%] lg:ml-[350px] bg-[#f1f2f6]'>
                    <div className="flex items-center px-2.5 py-2 ">
                        <h4 className="text-2xl font-bold">Top Picks form you</h4>
                    </div>
                    <div className="flex ">
                    
                    <img className="rounded-md h-[350px]" src="/images/gamebanner.jpg" alt="" srcset="" />
                    <div className="w-full grid  grid-cols-2 lg:grid-cols-4 gap-1 px-2.5">
                    
        {
          games.map((e)=>(
            
            
            
            <div key={v4()} className ="  h-full flex flex-col  rounded-md">
        
                  {/* image */}
                    <div className="flex overflow-hidden rounded-md h-full justify-center relative">
                    <img className="w-full" src={e.postImg} alt="" srcset="" />
                    <div className="absolute bottom-0  flex-col  hidden lg:flex gap-2.5 justify-center px-1.5 left-0 right-0 w-full h-1/2 bg-black/30 backdrop-blur-sm">
                    <p className="text-white text-2xl">{e.name}</p>
                    <button className="bg-black/90  text-gray-400 rounded-full w-1/3 py-0.5 px-2">{e.type}</button>
                    </div>
                    </div>  
                  </div>
        
         ))
                    }
                      
                    </div>
                    </div>





                    <div className="flex items-center px-2.5 ">
                        <h4 className="text-2xl font-bold">Happining Now</h4>
                    </div>
                    <div className="w-full grid grid-cols-2 lg:grid-cols-6 gap-2 py-3.5 h-[200px] px-2.5">
                    
        {
                    games2.map((e)=>(
        
                     
        
        
                  <div key={v4()} className =" w-full flex flex-col bg-white py-3 gap-2.5 h-full rounded-md">
                    <div className="flex py-0.5 px-1 items-center gap-1">
                      <img className="w-9 h-9 rounded-md" src={e.postImg} alt="" srcset="" />
                      <p className="font-semibold">{e.title}</p>
                    </div>
                  {/* image */}
                    <div className="flex overflow-hidden rounded-md h-full justify-center">
                    <img className="w-full h-full" src={e.postImg} alt="" srcset="" />
                    </div> 
                    <p className="text-center text-blue-600 font-bold">Play Now</p> 
                  </div>
        
         ))
                    }
                      
                    </div>
                    
                    
      </div>
  )
}

export default Games