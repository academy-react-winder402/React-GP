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
    <div className='w-[85%] h-[520px]  bg-blue-300 rounded-[10px] flex absolute top-[100px] left-[115px] '>
        <div className='r w-[35%]  h-[100%]'>
        <img className='w-[80%] h-[60%] mt-[100px] mx-auto ' src={fpass}/>
        </div>
        <div className='l bg-blue-400 w-[65%] h-[100%] rounded-xl'>
            <div className='lheader  flex w-[95%] h-[8%] mx-auto mt-[10px] '>
                <Link to='/login' className='lheaderr h-[100%] w-[50%] flex indent-3 text-white leading-[45px] font-normal justify-start '>
                    <img className='w-[25px] h-[25px] mt-[10px]' src='../../public/icons8-enter-32.png'/>
                    ورود به سایت
                </Link>
                <div className='lheaderl h-[100%] w-[50%] flex  gap-[20px] justify-end'>
                    <Link className=' mt-[10px]'> <img className='h-[35px] w-[35px]' src='../../public/icons8-sun-48.png'/> </Link>
                    <Link to='/' className=' mt-[9px]'> <img src='../../public/icons8-home-32.png'/> </Link>
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