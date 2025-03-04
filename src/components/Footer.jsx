import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'


const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt="logo" className='w-[266px] h-[72px] object-contain '/>

          <p className={` ${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, relaible and secure</p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {
            footerLinks.map((footerlink)=>(
              <div key={footerlink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                  <h4 className='font-popins font-medium text-[18px] leading-[27px] text-white '> {footerlink.title} </h4>

                  <ul className='list-none mt-4'>
                    {
                      footerlink.links.map((link,index)=>(
                        <li key={link.name} className={`font-popins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${ index !== footerlink.links.length -1 ? "mb-4" : "mb-0"}`}>
                            {link.name}
                        </li>
                      ))
                    }
                  </ul>
              </div>
            ))
          }

        </div>

      </div>


      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3fer45]'>
        <p className='font-popins font-normal text-center text-[18px] leading-[27px] text-white '>
         2024 HooBank. All Rights Reserved.
        </p>

        <div className='flex flex-row md:mt-0 mt-6'>
            {
              socialMedia.map((social, index)=>(
                <img src={social.icon} key={social.id} alt='image' className={`w-[21px] h-[21px] object-contain ${ index !== socialMedia.length -1 ? "mr-6" : "mr-0"}`}/>
              ))
            }
        </div>
      </div>
    </section>
  )
}

export default Footer