import React from 'react'

const Navbar = () => {
  return (
    
      <div className='navbordercontainer w-[95%] h-[10%] border-l-8 rounded-[10px] border-blue-500 relative top-[1%] left-[2%]'>
            < div className='navcontainer  w-[100%] h-[100%] bg-slate-300 relative top-[0%] rounded-[10px]'>

                <div className='linkcontainer flex flex-row relative gap-4 font-semibold left-[75%] bg-slate-300 items-center w-[15%] h-[90%] top-[4.5%] p-[2%]'>
                    <a href=''>Creator</a>
                    <a href=''>Info</a>
                    <a href=''>LogIn</a>
                    
              
                </div>
               <button className='signin w-[6%] h-[55%] text-white rounded-md relative bg-blue-500 top-[-69%] left-[91%]'>Signin</button>
               <div className='Companyname font-poppins relative font-semibold top-[-113%] left-[8%]'>FlavourHub</div>
            </div>

            
        </div>
    
  )
}

export default Navbar
