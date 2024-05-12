import React from 'react'
import { Field, Form, Formik } from 'formik'


const SecondStep = ({setStepCounter}) => {
    const handleSecond = (values)=>{
        console.log(values);
        setStepCounter(3)
    }

    return (
      <>
      <h1 className='text-center text-white font-normal text-3xl leading-10'> تایید کد</h1>
      <p className='leading-5 text-white text-center mt-[40px]'>لطفا کد یک بار مصرف را وارد کنید  </p>
      <div className='w-[350px] h-[45px] mx-auto mt-[20px]'>

          <Formik initialValues={{registerCode:''}} onSubmit={handleSecond}>
            <Form>
              <Field name='registerCode' placeholder='   کد تایید را وارد کنید  ' className='h-[40px] w-[100%] rounded-[10px]'/>
            <div className='flex justify-center '> 
                <button type='submit' className='text-[#fff] rounded-full border-2 bg-gradient-to-r from-[#732AFF] to-[#4545FF] mt-[35px] h-[42px] w-[150px]'>
                  تایید کد
                </button>
             </div>

            </Form>
          </Formik>
        </div>
        <div className='steps flex mt-[110px] relative'>
          {/* <div><button  className='border-2  w-[88px] h-[32px] bg-[#E3DCFF] text-[#2416E9]'>مرحله بعدی </button></div> */}
          <div className='absolute w-[100px] left-4'><button onClick={()=>setStepCounter(1)} className='border-2 w-[88px] h-[32px] bg-[#E3DCFF] rounded-lg'>مرحله ی قبل</button></div>
        </div>

<<<<<<< HEAD
      <div className='flex justify-center h-[40px] mt-[70px] w-[600px] mx-auto' >
        <div className='w-[40px] h-[40px]  border-2 border-[#8735F5] text-[#3F40EA] rounded-full leading-8 text-center'>3</div>
        <div className='w-[25%] h-[0] mt-[16px] border-4 border-[#A193FF]'></div>
        <div  className='w-[40px] h-[40px]  border-2 border-[#8735F5] text-[#3F40EA] rounded-full   leading-8 text-center'>2</div>
        <div  className=' w-[25%] h-[0] mt-[16px] border-4 border-[#732AFF]'></div>
        <div  className='w-[40px] h-[40px]  border-2 border-[#8735F5] text-[#3F40EA] rounded-full bg-[#732AFF]  leading-8 text-center'>
=======
      <div className='flex h-[40px] mt-[70px] w-[600px] mx-auto justify-center' >
        <div className='w-[40px] h-[40px]  border-2 border-gray-700 text-gray-700 rounded-xl leading-8 text-center'>3</div>
        <div className='w-[25%] h-[0] mt-[16px] border-4 border-blue-400'></div>
        <div  className='w-[40px] h-[40px]  border-2 border-gray-700 text-gray-700 rounded-xl   leading-8 text-center'>2</div>
        <div  className=' w-[25%] h-[0] mt-[16px] border-4 border-blue-400'></div>
        <div  className='w-[40px] h-[40px]  border-2 border-gray-700 text-gray-700 rounded-xl bg-[#732AFF]  leading-8 text-center'>
>>>>>>> Amir/dev
          <img className='w-[65%] h-[65%] mt-[7px] mx-auto' src='../../../../public/check.png'/>
        </div>
      </div>
        <div className='flex mx-auto  w-[600px] justify-center gap-[20%]'>
        <div className='text-white font-normal text-sm leading-[50px]'>  مشخصات کاربری </div>
        <div className='text-white font-normal text-sm leading-[50px]'>دریافت کد  </div>
        <div className='text-white font-normal text-sm leading-[50px] indent-6'> شماره تماس  </div>

       </div>
      </>
      )
}

export default SecondStep