import bannerImg from '../assets/live-striming.png'
import heroIcon from '../../public/images/heroicons_sm-user.svg'
import gridIc from '../../public/images/gridicons_location.svg'
import bxIc from '../../public/images/bx_bxs-server.svg'
import {motion} from 'framer-motion'
import { useMemo } from 'react'
import getScrollAnimation from '../utils/getScrollAnimation'
import ScrollAnimationWrapper from '../utils/ScrollAnimationWrapper'

const listUser = [
  {
    name:'End Users Annually',
    number:'500+ Million',
    icon:heroIcon
  },
  {
    name:'Country and Regions',
    number:'212+',
    icon:gridIc
  },
  {
    name:'Service Uptime',
    number:'99.99%',
    icon:bxIc
  },
]
const Hero = () => {

  const scrollAnimation  = useMemo(()=>getScrollAnimation(),[])
  return (
    <>
    <div className="max-w-screen-xl mt-24 px8 xl:px-16 mx-auto">
      <ScrollAnimationWrapper>
      <motion.div
      variants={scrollAnimation}
       className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">

        <div className='flex flex-col justify-center items-start row-start-2 sm:row-start-1'>
          <h1 className="text-4xl font-semibold text-black leading-normal">Build Interactive Live Streaming and Reach <span className="text-blue-600">Millions Globally</span></h1>
          <p className="mt-4 mb-6">Embed scalable interactive live streaming into your platforms with our fully customizable and easy-to-integrate live SDK.</p>
          <button className="bg-[#7a1be7] py-3 px-8 text-white rounded-md font-semibold">Get Started</button>
        </div>
        <div className='flex w-full'>
        <div className='h-full w-full'>
          <img src={bannerImg} alt="live-streaming banner" />
        </div>
        </div>
      </motion.div>
      </ScrollAnimationWrapper>

      {/* company statics  */}

      <div className='relative w-full flex'>
        <ScrollAnimationWrapper className='rounded-lg w-full grid grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white z-10'>
          {
            listUser.map((list,index)=>(
              <motion.div
              variants={scrollAnimation}
               key={index} className='flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 sm:m-auto px-4 mx-auto sm:mx-0'>
                <div className='flex mx-auto w-40 sm:w-auto'>

                
                <div className='flex items-center justify-center bg-orange-100 w-12 h-12 mr-5 rounded-full'>
                  <img src={list.icon} alt=""  className='h-6 w-6'/>
                </div>
                <div className='flex flex-col'>
                  <p className='text-xl font-bold text-black'>{list.number}</p>
                  <p className=' text-black'>{list.name}</p>
                </div>
                </div>
                </motion.div>
              
            ))
          }
        </ScrollAnimationWrapper>
      </div>

      {/* bg blur*/}

      <div className='absolute bg-black opacity-5 w-11/12 rounded-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0' style={{filter:'blur(114px'}}>

      </div>

      
    </div>
    </>
  )
}

export default Hero