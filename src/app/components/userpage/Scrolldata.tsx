import React, { useRef, useState } from 'react';
import Image from 'next/image';
import celeb from '../userprofilepics/celeb8.png'

const Scrolldata = () => {
  // const scrollerRef = useRef(null);
  // const [isDown, setIsDown] = useState(false);
  // const [startX, setStartX] = useState(0);
  // const [scrollLeft, setScrollLeft] = useState(0);

  // const handleMouseDown = (e) => {
  //   const scroller = scrollerRef.current;
  //   setIsDown(true);
  //   scroller.classList.add('active');
  //   setStartX(e.pageX - scroller.offsetLeft);
  //   setScrollLeft(scroller.scrollLeft);
  // };

  // const handleMouseLeave = () => {
  //   const scroller = scrollerRef.current;
  //   setIsDown(false);
  //   scroller.classList.remove('active');
  // };

  // const handleMouseUp = () => {
  //   const scroller = scrollerRef.current;
  //   setIsDown(false);
  //   scroller.classList.remove('active');
  // };

  // const handleMouseMove = (e) => {
  //   if (!isDown) return;
  //   e.preventDefault();
  //   const scroller = scrollerRef.current;
  //   const x = e.pageX - scroller.offsetLeft;
  //   const walk = (x - startX) * 3; // Adjust the scroll speed here if necessary
  //   scroller.scrollLeft = scrollLeft - walk;
  //  };

  return (
    <div
      //  ref={scrollerRef}
      className="outerscroller max-phone:w-[350%]   w-[150%] h-[100%] flex overflow-x-scroll gap-6 max-phone:gap-4"
      //  onMouseDown={handleMouseDown}
      // onMouseLeave={handleMouseLeave}
      //  onMouseUp={handleMouseUp}
      //  onMouseMove={handleMouseMove}
    >
      <div className="  border-l-8 max-phone:w-[70%] border-blue-600 w-[35%] h-[100%]  bg-white rounded-lg flex flex-col p-[1%] justify-between  ">
        <Image className='relative w-[85%] h-[90%]' src={celeb}/>
       
        <h1 className=' font-bold relative text-[1.3em] max-phone:text-[0.9em]'>Company Name</h1>

        <p className='text-[0.7em] max-phone:text-[0.5em]'>Welcome to our Event Catering Company! We specialize in providing exquisite catering services tailored to your event's unique needs. Whether it’s a wedding, corporate event.</p>
        
        <h1 className='font-semibold text-[1.3em] max-phone:text-[0.9em]'>Contact Us</h1>
        <p className='text-[0.7em] max-phone:text-[0.5em]'>Phone:977884033<br/> 
        Email: info@eventcatering.com<br/>
        Website: www.eventcatering.com<br/>
        </p>

        <button className='signin relative left-[73%] w-[70px] h-[70px] text-[0.8em] text-white rounded-md relative bg-blue-600 max-phone:left-0 '>Explore</button>
      </div>


      <div className="  border-l-8 max-phone:w-[70%] border-blue-600 w-[35%] h-[100%]  bg-white rounded-lg flex flex-col p-[1%] justify-between  ">
        <Image className='relative w-[85%] h-[90%]' src={celeb}/>
       
        <h1 className=' font-bold relative text-[1.3em] max-phone:text-[0.9em]'>Company Name</h1>

        <p className='text-[0.7em] max-phone:text-[0.5em]'>Welcome to our Event Catering Company! We specialize in providing exquisite catering services tailored to your event's unique needs. Whether it’s a wedding, corporate event.</p>
        
        <h1 className='font-semibold text-[1.3em] max-phone:text-[0.9em]'>Contact Us</h1>
        <p className='text-[0.7em] max-phone:text-[0.5em]'>Phone:977884033<br/> 
        Email: info@eventcatering.com<br/>
        Website: www.eventcatering.com<br/>
        </p>

        <button className='signin relative left-[73%] w-[70px] h-[70px] text-[0.8em] text-white rounded-md relative bg-blue-600 max-phone:left-0 '>Explore</button>
      </div>



      <div className="  border-l-8 max-phone:w-[70%] border-blue-600 w-[35%] h-[100%]  bg-white rounded-lg flex flex-col p-[1%] justify-between  ">
        <Image className='relative w-[85%] h-[90%]' src={celeb}/>
       
        <h1 className=' font-bold relative text-[1.3em] max-phone:text-[0.9em]'>Company Name</h1>

        <p className='text-[0.7em] max-phone:text-[0.5em]'>Welcome to our Event Catering Company! We specialize in providing exquisite catering services tailored to your event's unique needs. Whether it’s a wedding, corporate event.</p>
        
        <h1 className='font-semibold text-[1.3em] max-phone:text-[0.9em]'>Contact Us</h1>
        <p className='text-[0.7em] max-phone:text-[0.5em]'>Phone:977884033<br/> 
        Email: info@eventcatering.com<br/>
        Website: www.eventcatering.com<br/>
        </p>

        <button className='signin relative left-[73%] w-[70px] h-[70px] text-[0.8em] text-white rounded-md relative bg-blue-600 max-phone:left-0 '>Explore</button>
      </div>



      <div className="  border-l-8 max-phone:w-[70%] border-blue-600 w-[35%] h-[100%]  bg-white rounded-lg flex flex-col p-[1%] justify-between  ">
        <Image className='relative w-[85%] h-[90%]' src={celeb}/>
       
        <h1 className=' font-bold relative text-[1.3em] max-phone:text-[0.9em]'>Company Name</h1>

        <p className='text-[0.7em] max-phone:text-[0.5em]'>Welcome to our Event Catering Company! We specialize in providing exquisite catering services tailored to your event's unique needs. Whether it’s a wedding, corporate event.</p>
        
        <h1 className='font-semibold text-[1.3em] max-phone:text-[0.9em]'>Contact Us</h1>
        <p className='text-[0.7em] max-phone:text-[0.5em]'>Phone:977884033<br/> 
        Email: info@eventcatering.com<br/>
        Website: www.eventcatering.com<br/>
        </p>

        <button className='signin relative left-[73%] w-[70px] h-[70px] text-[0.8em] text-white rounded-md relative bg-blue-600 max-phone:left-0 '>Explore</button>
      </div>


      <div className="  border-l-8 max-phone:w-[70%] border-blue-600 w-[35%] h-[100%]  bg-white rounded-lg flex flex-col p-[1%] justify-between  ">
        <Image className='relative w-[85%] h-[90%]' src={celeb}/>
       
        <h1 className=' font-bold relative text-[1.3em] max-phone:text-[0.9em]'>Company Name</h1>

        <p className='text-[0.7em] max-phone:text-[0.5em]'>Welcome to our Event Catering Company! We specialize in providing exquisite catering services tailored to your event's unique needs. Whether it’s a wedding, corporate event.</p>
        
        <h1 className='font-semibold text-[1.3em] max-phone:text-[0.9em]'>Contact Us</h1>
        <p className='text-[0.7em] max-phone:text-[0.5em]'>Phone:977884033<br/> 
        Email: info@eventcatering.com<br/>
        Website: www.eventcatering.com<br/>
        </p>

        <button className='signin relative left-[73%] w-[70px] h-[70px] text-[0.8em] text-white rounded-md relative bg-blue-600 max-phone:left-0 '>Explore</button>
      </div>

      <div className="  border-l-8 max-phone:w-[70%] border-blue-600 w-[35%] h-[100%]  bg-white rounded-lg flex flex-col p-[1%] justify-between  ">
        <Image className='relative w-[85%] h-[90%]' src={celeb}/>
       
        <h1 className=' font-bold relative text-[1.3em] max-phone:text-[0.9em]'>Company Name</h1>

        <p className='text-[0.7em] max-phone:text-[0.5em]'>Welcome to our Event Catering Company! We specialize in providing exquisite catering services tailored to your event's unique needs. Whether it’s a wedding, corporate event.</p>
        
        <h1 className='font-semibold text-[1.3em] max-phone:text-[0.9em]'>Contact Us</h1>
        <p className='text-[0.7em] max-phone:text-[0.5em]'>Phone:977884033<br/> 
        Email: info@eventcatering.com<br/>
        Website: www.eventcatering.com<br/>
        </p>

        <button className='signin relative left-[73%] w-[70px] h-[70px] text-[0.8em] text-white rounded-md relative bg-blue-600 max-phone:left-0 '>Explore</button>
      </div>

    </div>
  );
};

export default Scrolldata;
