import React from 'react'
import { Lobster } from 'next/font/google'
import Image from 'next/image'
import searchpic from '../userprofilepics/search.png'
import Scrolldata from './Scrolldata'
import Scrollmusic from './Scrollmusic'
import Scrolldecoration from './Scrolldecoration'

const lobster = Lobster({ subsets: ['latin'], weight: '400' })

const Usermenu = () => {
  return (

    <>
    <div className="parent-container relative w-[100vw]  h-[240vh] flex flex-col items-center overflow-hidden  justify-between  gap-[2%]"> 
    <div className='navbordercontainer  max-phone:text-[0.7em] bg-white w-[95%] max-phone:h-[4%]  h-[4%] border-l-8 rounded-[10px] border-blue-600 relative top-[1%] flex flex-row-reverse  justify-between items-center'>

<div className='linkcontainer flex flex-row relative max-phone:gap-1 gap-2 justify-between font-semibold max-phone:w-[70%] items-center w-[25%] h-[90%]  p-[2%]'>
    <a href='' className='hover:text-blue-600'>Creator</a>
    <a href='' className='hover:text-blue-600'>Info</a>
    <a href='' className='hover:text-blue-600'>LogIn</a>
    
    <button className='signin w-[80px] h-[40px] text-white rounded-md relative bg-blue-600   max-phone:w-[50px] max-phone:h-[30px]'>Signin</button>

</div>
<div className={`Companyname  relative text-[1.5em] font-bold left-[2%]  w-[12%]  ${lobster.className}`}>Eventify</div>            


</div>

<div className='relative flex flex-col gap-3 justify-between items-center max-phone:p-[5%]'>
  <h1 className= {`${lobster.className} text-[4em] max-phone:text-[1.8em] relative  `}>Turning<span className='text-blue-600'> Moments </span> into Milestones!</h1>
<div className='flex flex-row justify-center gap-1 max-phone:flex-col max-phone:items-center max-phone:justify-center max-phone:gap-2 w-[110%] '>
  <input  type="text" name="email" id="email"   className=" relative   block w-[90%] max-phone:text-[0.7em] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Search for the best Event Organisers">
            </input>

            <button className='signin max-phone:text-[0.8em] max-phone:w-[50%] w-[15%] h-[35px] text-white rounded-md relative bg-gray-900 p-[0%] flex flex-row justify-between items-center p-4 '><div> <Image src={searchpic} className='w-[25px] h-[25px] relative '/></div> <span className='relative '>Search</span></button>

            </div>
</div>





<div className='scrolltext w-[80%] h-[4%] flex flex-row justify-start items-center font-bold text-[1.5em] ' ><h1>Food and Cattering</h1></div>
<div className='scrollcontainer w-[80%] max-phone:w-[97%] h-[25%] overflow-scroll '>
  <Scrolldata/>

</div>


<div className='scrolltext w-[80%] h-[4%]  flex flex-row justify-start items-center font-bold text-[1.5em]'><h1>Music and DJ</h1></div>

<div className='scrollcontainer w-[80%] h-[25%]  max-phone:w-[97%]  overflow-scroll'>
  <Scrollmusic/>

</div>
<div className='scrolltext w-[80%] h-[4%] flex flex-row justify-start items-center font-bold text-[1.5em]'><h1>Decoration and Management</h1></div>

<div className='scrollcontainer w-[80%] h-[25%]  max-phone:w-[97%] overflow-scroll '>
  <Scrolldecoration/> 

</div>







    </div>



















    </>
  )
}

export default Usermenu
