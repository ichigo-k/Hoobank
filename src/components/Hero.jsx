import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from "./GetStarted"

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className='size-[32px]' />
          <p className={`${styles.paragraph}`}>
          <span className="text-white">20%</span> Discount for {" "} <span className="text-white">1 month</span> Account
          </p>
        </div>


        <div className='flex flex-row justify-between items-center w-full'>

          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]leading-[75px]">
            The Next <br className='sm:block hidden '/>{' '}
            <span className='text-gradient'>Generation</span>{' '}
          </h1>

          <div className='ss:flex hidden md:mr-4 mr-0'>
              <GetStarted />
          </div>
        </div>


        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
           Payment Method.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Experience how technology has evolved to make your life easier and more accessible. Our payment method is designed
        </p>
      </div>


      <div className={`flex-1 flex relative md:my-0 my-10 ${styles.flexCenter}`}>
         <img src={robot} alt="billing" className='size-[100%] relative z-[5] ' />

         <div className='absolute top-0 w-[40%] h-[35%] pink__gradient right-0 z-[0]'/>

         <div className='absolute bottom-40 w-[80%] h-[80%] white__gradient right-0 z-[1] rounded-full'/>

         <div className='absolute bottom-20 w-[50%] h-[50%] blue__gradient right-20 z-[0]'/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero