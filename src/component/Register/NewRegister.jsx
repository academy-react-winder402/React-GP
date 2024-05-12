import React, { useState } from "react";
import FirstStep from "./FirstStep/FirstStep";
import SecondStep from "./SecondStep/SecondStep";
import ThirdStep from "./ThirdStep/ThirdStep";
import { Link } from "react-router-dom";
import register from "../../../public/mobile-testing.png"

const NewRegister = () => {
    const windowHeight = window.innerHeight;
    const [StepCounter , setStepCounter] = useState(1)
    return (
        <>
          <div className='bg-contain bg-opacity-75 relative flex justify-between' style={{height:windowHeight}}>
          <div className=' bg-forgetBackGround bg-contain blur-md'  style={{height:windowHeight}} ></div>
            <div className='w-[40%] h-[520px] bg-blue-400/50 rounded-[10px] flex absolute top-[50px] right-[50px] '>

        <div className='l bg-blue-400 w-[100%] h-[100%] rounded-xl'>
          <div className='lheader  flex w-[95%] h-[8%] mx-auto mt-[10px] '>

            <Link to='/login' className='lheaderr h-[100%] w-[50%] flex indent-3 text-white leading-[45px] font-normal justify-start '>
              <img className='w-[25px] h-[25px] mt-[10px]' src='../../public/icons8-enter-32.png'/>
              ورود به سایت

            </Link>
            <div className='lheaderl h-[100%] w-[50%] flex justify-end'>
              <Link to='/' className=' mt-[9px]'> <img src='../../public/icons8-home-32.png'/> </Link>

            </div>

            {StepCounter === 1 && <FirstStep setStepCounter={setStepCounter} />}
            {StepCounter === 2 && (
              <SecondStep setStepCounter={setStepCounter} />
            )}
            {StepCounter === 3 && <ThirdStep setStepCounter={setStepCounter} />}
          </div>
        </div>
      </div>
      <img src={register} alt="" />
    </div>

      <div className="bg-forgetBlur"></div>
    </>
  );
};

export default NewRegister;
