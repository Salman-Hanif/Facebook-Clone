import { v4 } from 'uuid';



function Marketplace() {
  const products = [
  {
    postImg:'/images/1.jpg',
    price:'$11,500',
    model:'2018 Audi a4',
    location:'Karachi',
    millage:'120K KM'
  },
  {
    postImg:'/images/2.jpg',
    price:'$5,750',
    model:'Mercedes Benz S class',
    location:'Islamabad',
    millage:'152K KM'
  },
  {
    postImg:'/images/3.jpg',
    price:'$12,000',
    model:'2018 Iveco recovery truck',
    location:'Karachi',
    millage:'90K KM'
  },
  {
    postImg:'/images/4.jpg',
    price:'$12,150',
    model:'2020 BMW 420d m sport',
    location:'Lahore',
    millage:'64K KM'
  },
  {
    postImg:'/images/5.jpg',
    price:'$9,200',
    model:'2019 Peugeot 2008 puretech 1.2',
    location:'Peshawar',
    millage:'26K KM'
  },
  {
    postImg:'/images/6.jpg',
    price:'$2150',
    model:'Honda Civic Rs41',
    location:'Karachi',
    millage:'120K KM'
  },
  {
    postImg:'/images/7.jpg',
    price:'$2150',
    model:'Honda Civic Rs41',
    location:'Karachi',
    millage:'120K KM'
  },
  {
    postImg:'/images/8.jpg',
    price:'$2150',
    model:'Honda Civic Rs41',
    location:'Karachi',
    millage:'120K KM'
  },
  {
    postImg:'/images/9.jpg',
    price:'$2150',
    model:'Honda Civic Rs41',
    location:'Karachi',
    millage:'120K KM'
  },
  {
    postImg:'/images/10.jpg',
    price:'$2150',
    model:'Honda Civic Rs41',
    location:'Karachi',
    millage:'120K KM'
  },
  {
    postImg:'/images/11.jpg',
    price:'$2150',
    model:'Honda Civic Rs41',
    location:'Karachi',
    millage:'120K KM'
  },
  {
    postImg:'/images/12.jpg',
    price:'$2150',
    model:'Honda Civic Rs41',
    location:'Karachi',
    millage:'120K KM'
  },
  {
    postImg:'/images/13.jpg',
    price:'$2150',
    model:'Honda Civic Rs41',
    location:'Karachi',
    millage:'120K KM'
  },
  {
    postImg:'/images/14.jpg',
    price:'$2150',
    model:'Honda Civic Rs41',
    location:'Karachi',
    millage:'120K KM'
  },
  {
    postImg:'/images/15.jpg',
    price:'$2150',
    model:'Honda Civic Rs41',
    location:'Karachi',
    millage:'120K KM'
  },
  {
    postImg:'/images/16.jpg',
    price:'$2150',
    model:'Honda Civic Rs41',
    location:'Karachi',
    millage:'120K KM'
  },
  {
    postImg:'/images/17.jpg',
    price:'$2150',
    model:'Honda Civic Rs41',
    location:'Karachi',
    millage:'120K KM'
  },
  {
    postImg:'/images/18.jpg',
    price:'$2150',
    model:'Honda Civic Rs41',
    location:'Karachi',
    millage:'120K KM'
  },

  
 
]
  return (
  
      <div className='flex flex-col gap-5 py-3.5 w-full lg:w-[75%] lg:ml-[350px] bg-[#f1f2f6]'>
                    <div className="flex items-center px-2.5 justify-between">
                        <h4 className="text-2xl font-semibold">Today's Pick</h4>
                      <div className="flex text-blue-600 text-[17px] font-semibold items-center gap-2">
                      <p>London . 65 KM</p>
                      </div>
                    </div>
                    <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-6 px-2.5">
                    
        {
                      products.map((e)=>(
        
                     
        
        
                  <div key={v4()} className =" w-full gap-2 flex flex-col  rounded-md">
                  {/* image */}
                    <div className="flex overflow-hidden rounded-md justify-center">
                    <img className="w-full" src={e.postImg} alt="" srcset="" />
                    </div>
        
                    {/* details*/}

                    <div className="flex  flex-col ">
                      <p className='w-1/2 flex gap-0.5 font-semibold text-[20px]'>
                   {e.price}
                  </p>
                        <p>{e.model}</p>
                        <p className="text-gray-500 text-[15px]">{e.location}</p>
                        <p className="text-gray-500 text-[11px]">{e.millage}</p>
                 
                    </div>
                      
        
        
                  </div>
        
         ))
                    }
                      
                    </div>
      </div>
  )
}

export default Marketplace