import React from 'react'
import { quotes } from '../assets'

const FeedbackCard = ({content , name, title, img}) => {
  return (
    <div className='flex justify-between flex-col px-10 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card py-5'>
        <img src={quotes} alt='quote' className='w-[42px] h-[47px] object-contain'/>

        <p className='font-popins font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>

        <div className='flex flex-row '>
            <img src={img} alt="image" className='size-[48px] rounded-full' />

            <div className='flex flex-col ml-4'>
                <h4 className='font-popins font-semibold text-[20px] leading-[32px] text-white '>{name}</h4>
                <p className='font-popins font-semibold text-[16px] leading-[24px] text-dimWhite '>{title}</p>
            </div>
        </div>
    </div>
  )
}

export default FeedbackCard