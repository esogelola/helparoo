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

        <div className='scroll'>
          <h1 className='header'>Listing</h1>
          <div className='line'></div>
          <section className='item'>
						<div>
          		<h2>need help with a move</h2>
							<span>123 Rainbow Road</span>
							<span>12:30PM - 2:30PM </span>
						</div>
						<button>Help Out</button>
          </section>
          <section className='item'>
						<div>
          		<h2>need help with a move</h2>
							<span>123 Rainbow Road</span>
							<span>12:30PM - 2:30PM </span>
						</div>
						<button>Help Out</button>
          </section>
          <section className='item'>
						<div>
          		<h2>need help with a move</h2>
							<span>123 Rainbow Road</span>
							<span>12:30PM - 2:30PM </span>
						</div>
						<button>Help Out</button>
          </section>
          <section className='item'>
						<div>
          		<h2>need help with a move</h2>
							<span>123 Rainbow Road</span>
							<span>12:30PM - 2:30PM </span>
						</div>
						<button>Help Out</button>
          </section>
          <section className='item'>
						<div>
          		<h2>need help with a move</h2>
							<span>123 Rainbow Road</span>
							<span>12:30PM - 2:30PM </span>
						</div>
						<button>Help Out</button>
          </section>
        </div>

      </motion.div>
  );
}

export default Slidingcard