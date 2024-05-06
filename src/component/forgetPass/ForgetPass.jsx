import React, { useState } from 'react'
import FirstStep from './FirstStep/FirstStep'
import SecondStep from './SecondStep/SecondStep'
import ThirdStep from './ThirdStep/ThirdStep'
import { Link } from 'react-router-dom'
import fpass from '../../../public/mobile-testing.png'


const ForgetPass = () => {
    const windowHeight = window.innerHeight;
    const [StepCounter , setStepCounter] = useState(1)
    return (
<>
<div className='bg-contain bg-opacity-75 relative ' style={{height:windowHeight}}>
    <div className=' bg-forgetBackGround bg-contain blur-md'  style={{height:windowHeight}} ></div>
    <div className='w-[85%] h-[520px]  bg-[#DBD6FF]/50 rounded-[10px] flex absolute top-[100px] left-[115px] '>
        <div className='r w-[35%]  h-[100%]'>
        <img className='w-[80%] h-[60%] mt-[100px] mx-auto ' src={fpass}/>
        </div>
        <div className='l bg-[#ECE9FF] w-[65%] h-[100%] border-[#ECE9FF] border-2 rounded-xl'>
            <div className='lheader  flex w-[95%] h-[8%] mx-auto mt-[10px] '>
                <Link to='/' className='lheaderr h-[100%] w-[50%] flex indent-3 text-[#6359F0] leading-[45px] font-normal justify-start '>
                    <img className='w-[25px] h-[25px] mt-[10px]' src='../../public/inn.png'/>
                    ورود به سایت
                </Link>
                <div className='lheaderl h-[100%] w-[50%] flex  gap-[20px] justify-end'>
                    <div className=' mt-[10px]'> <img src='../../public/sun.png'/> </div>
                    <div className=' mt-[9px]'> <img src='../../public/home.png'/> </div>
                </div>
            </div>
            {StepCounter===1 && <FirstStep setStepCounter={setStepCounter}/>}
            {StepCounter===2 && <SecondStep setStepCounter={setStepCounter}/>}
            {StepCounter===3 && <ThirdStep  setStepCounter={setStepCounter}/>}
        </div>
    </div>
</div>
<div className='bg-forgetBlur'></div>
</>
      )
}

export default ForgetPass