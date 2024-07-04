import { motion, useScroll } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const HeroText = () => {
  const { scrollY } = useScroll()
  const [direction, setDirection] = useState(1)

  const handleScroll = () => {
    const current = scrollY.get() - scrollY.getPrevious()
    
    // agar sidha scroll hua to value 1
    // agar ulta scroll hua to value -1

    if(current>0){
      setDirection(1)
    }else{
      setDirection(-1)
    }
  }

  useEffect(() => {

    scrollY.on("change", handleScroll)

  }, [scrollY])
  return (
    <motion.div
      initial={{
        x:-1500,
      }}
      animate={{
        x: direction>0?-3000:0
      }}
      transition={{
        duration: 10,
        ease: 'linear',
        repeat: Infinity
      }}
      className='relative flex mt-2'
      
      >
      <h1 className='text-[15.1vw] text-slate-800 font-light whitespace-nowrap '>-Anshita Dubey</h1>
      <h1 className='text-[15.1vw] text-slate-800 font-light whitespace-nowrap '>-Anshita Dubey</h1>
      <h1 className='text-[15.1vw] text-slate-800 font-light whitespace-nowrap '>-Anshita Dubey</h1>
      <h1 className='text-[15.1vw] text-slate-800 font-light whitespace-nowrap '>-Anshita Dubey</h1>
    </motion.div>
  )
}

export default HeroText