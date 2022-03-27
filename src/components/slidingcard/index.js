import React from 'react'
import "./index.scss"
import { useAnimation, motion } from 'framer-motion';



const Slidingcard = () => {

  const controls = useAnimation();

  

  return (
      <motion.div 
        className='sliding-card'
        drag="y"
        onLoad={controls.start({y : -70})}
        dragConstraints={{top: -550, bottom: 0}}
        onDragEnd={( event, info ) => {
          if( info.velocity.y > 20 || (info.velocity.y >= 0 && info.point.y > 45)) {
            controls.start({ y: -70, })
          } else {
            controls.start({  y: -550, })
          }
        }}
        animate={controls}
      >
        <div className='drag-bar'></div>

      </motion.div>
  );
}

export default Slidingcard