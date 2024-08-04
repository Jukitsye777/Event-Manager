    import React from 'react'

    import google from './pictureshome/google2.png'
    import Image from 'next/image'
    import pic2 from './pictureshome/pic3.webp'
    import { Lobster } from 'next/font/google'
    import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import app from '../firebase/Firebase'
import { auth } from '../firebase/Firebase'
import { setDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/Firebase'


    const lobster = Lobster({ weight: '400', subsets: ['latin'] })

    
        
    

        const Homepage = () => {
            

            



            const handleregister = (e) => {
                e.preventDefault();
            
                createUserWithEmailAndPassword(auth, formdata.email, formdata.password1)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        console.log(user);
                        console.log("User registered successfully!");

                        if (user) {
                            setDoc(doc(db, 'users', user.uid), {
                                email: user.email,
                                Phoneno: formdata.phonenumber,
                            })
                            .then(() => {
                                console.log('User document successfully written!');
                            })
                            .catch((error) => {
                                console.error('Error writing user document: ', error);
                            });
                        }
                        
                    })
                    .catch((error) => {
                        console.error('Error occurred during registration:', error);
                    });
            };
            



            const [formdata,setformdata] = useState({email:'',phonenumber:'',password1:'',password2:''})

            const handlechange = (e)=>{
                const {name,value} = e.target
                setformdata({...formdata,[name]:value})
            }


            const handlesubmit = (e) => {
                e.preventDefault()
                console.log(formdata)
            }



        return (
            <div className='w-[100vw] h-[100vh]  flex flex-col  justify-evenly overflow-y-scroll '>
            <div className='navbordercontainer max-phone:text-[0.7em]  bg-white max-phone:top-[11%] w-[95%] max-phone:h-[6%] h-[10%] border-l-8 rounded-[10px] border-blue-600 relative top-[-2%] left-[2%]'>

                    <div className='linkcontainer flex flex-row  relative gap-4 max-phone:gap-2 justify-evenly font-semibold left-[75%] max-phone:left-[45%] items-center w-[15%] h-[90%] top-[4.5%] p-[2%]'>
                        <a href='' className='hover:text-blue-600'>Creator</a>
                        <a href='' className='hover:text-blue-600'>Info</a>
                        <a href='' className='hover:text-blue-600'>LogIn</a>
                        
                
                    </div>
                <button className='signin w-[70px] h-[40px] text-white rounded-md relative bg-blue-600 top-[-69%] left-[91%] max-phone:left-[77%] max-phone:w-[50px] max-phone:h-[30px]'>Signin</button>
                <div className={`Companyname font-poppins relative text-[1.5em] font-bold top-[-120%] left-[8%] w-[12%]  ${lobster.className}`}>Eventify</div>            

                
            </div>


            





    <div className='loginoutercontainer max-phone:flex max-phone:flex-col lg:w-[95%] lg:h-[75%] max-phone:top-[10%] relative lg:left-[2%] lg:top-[0%] lg:flex lg:justify-between '>
        <div className='relative flex flex-col  justify-center max-phone:p-[3%]  flex-shrink' >
        
            <h1 className='bigfont max-phone:text-[2rem] max-phone:w-[300px] text-black text-[4rem] w-[700px]  relative  font-bold'>Streamline your <span className='text-blue-600'>Moments</span> with ease.</h1>

            <h1 className='smallfont text-black max-phone:text-[1rem] text-[2rem] w-[700px] relative font-semibold  h-[100px]  overflow-hidden'>We make it <span className='text-blue-600'>Happen</span> for you!</h1>
            </div>
    
        <form onSubmit={handleregister} className='form max-phone:w-[97%] max-phone:p-[5%] w-[360px] h-[480px] relative bg-white left-[0%] max-phone:left-[1.5%] top-[4%] rounded-[20px] border-t-[6px] border-blue-600 max-phone:flex max-phone:flex-col overflow-hidden'>
            





            
            <h1 className='font-bold text-Black text-[1.3em] relative left-[40%] top-[6%] w-[100px]'>Sign Up</h1>
            <p className='text-black text-[0.8em] relative top-[7%] left-[5%] font-bold'>Welcome to <span className='text-blue-600'>Eventify</span>, Elevating every occasion</p>
            <div className='flex flex-col gap-[20px] relative top-[12%] left-[5%]' >
            

            <input onChange={handlechange} type="text" name="email" id="email" value={formdata.email}  className=" relative  block w-[90%] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 max-phone:text-[0.7em] text-sm sm:leading-6" placeholder="Email">
            </input>


            <input onChange={handlechange} type="number" name="phonenumber" id="phonenumber" value={formdata.phonenumber} className=" relative  block w-[90%] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm max-phone:text-[0.7em] sm:leading-6" placeholder="Phone no.">
            </input>

            <input onChange={handlechange} type="password" name="password1" value={formdata.password1} id="password1" className=" relative  block w-[90%] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm max-phone:text-[0.7em] sm:leading-6" placeholder="Password">
            </input>
            <input onChange={handlechange} type="password" name="password2" id="password2" value={formdata.password2} className=" relative  block w-[90%] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm max-phone:text-[0.7em] sm:leading-6" placeholder="Confirm Password">
            </input>

            
            <button type='submit' className='signin w-[30%] h-[35px] text-white rounded-md relative bg-blue-600 top-[0%] left-[31%]'>SignUp</button>
          
                    <button className='signin w-[60%] h-[35px] max-phone:w-[80%] text-white rounded-md relative bg-green-500 border-2 border-green-500 top-[0%] left-[18%] max-phone:left-[7%] flex flex-row'><div> <Image src={google} className='w-[25px] h-[25px] relative top-[9%] left-[8%]'/></div> <span className='relative left-[7%] top-[7%]'>Signin with Google</span></button>

                    
            </div>
            </form>
            </div>
        
 
    

    </div>

            

            
        )
        }

        export default  Homepage
