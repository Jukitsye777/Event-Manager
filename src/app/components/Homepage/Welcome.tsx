import React from 'react'
import { Lobster } from 'next/font/google'
import { NavLink  } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'





const lobster = Lobster({weight:'400', subsets:['latin']})
const Welcome = () => {

const navigater = useNavigate()

function handlejoinclick(){
    navigater('/homepage')
}


  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center overflow-hidden'>
    <div className='welcomecontainer max-phone:w-[96%] w-[45%] h-[50%] relative bg-white rounded-xl  shadow-custom flex flex-col justify-evenly items-center  '>

    <h1 className='message text-[2em] relative '>Welcome To </h1>
    <h1 className={`${lobster.className} text-[5.5em] max-phone:text-[4em] relative  text-blue-600`}>Eventify!</h1>
    <p className='relative w-[80%] text-[0.6em]  p-[2.5%] '>Eventify brings together the best caterers, decorators, photographers, makeup artists, DJs, and more in one place. Browse through portfolios, compare services, and contact your chosen experts directly to ensure your event is unforgettable. Let Eventify help you turn your vision into reality with ease and elegance.</p>

    
    <button onClick={handlejoinclick}  className='signin w-[25%] h-[10%] max-phone:w-[60%] text-white rounded-md relative bg-blue-600  transition-transform duration-500 transition  hover:scale-110'>Join the Party</button>
    </div>
    </div>
  )
}

export default Welcome
