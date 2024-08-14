import React from 'react'
import { card } from '../assets'
import styles,{layout} from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
         <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/> in flew easy steps</h2>

         <p className={`${styles.paragraph} max-w-[480px] mt-5 `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugiat, perferendis libero quos quis quo ex.</p>

         <Button styles={"mt-10 "}/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="" className='size-[100%]'/>
      </div>
    </section>
  )
}

export default CardDeal