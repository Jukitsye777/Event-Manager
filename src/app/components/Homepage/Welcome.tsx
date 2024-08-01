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
    <div className='welcomecontainer w-[45%] h-[50%] relative bg-white rounded-xl left-[27%] top-[25%] shadow-custom'>

    <h1 className='message text-[2em] relative left-[35%] top-[3%]'>Welcome To </h1>
    <h1 className={`${lobster.className} text-[5.5em] relative left-[29%] top-[-4%] text-blue-600`}>Eventify!</h1>
    <p className='relative w-[80%] text-[0.6em] left-[10%] p-[2.5%] top-[-4%]'>Eventify brings together the best caterers, decorators, photographers, makeup artists, DJs, and more in one place. Browse through portfolios, compare services, and contact your chosen experts directly to ensure your event is unforgettable. Let Eventify help you turn your vision into reality with ease and elegance.</p>

    
    <button onClick={handlejoinclick}  className='signin w-[25%] h-[10%] text-white rounded-md relative bg-blue-600 top-[0%] left-[37.5%] transition-transform duration-500 transition  hover:scale-110'>Join the Party</button>
    </div>
  )
}

export default Welcome
