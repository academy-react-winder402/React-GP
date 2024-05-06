import React from 'react'
import { Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'

const ThirdStep = ({setStepCounter}) => {
    const navigate=useNavigate()
    const handleThird = (values)=>{
        console.log(values);
        navigate('/')
    }
    return (
    <>

      <h1 className='text-center text-[#2416E9] font-normal text-3xl leading-10'> ثبت نام نهایی </h1>
      <p className='leading-5 text-[#A193FF] text-center mt-[40px]'>لطفا اطلاعات خواسته شده را کامل کنید</p>
      <div className='border-2 w-[350px] h-[45px] mx-auto mt-[20px]'>

          <Formik initialValues={{email:'',password:''}} onSubmit={handleThird} >
            <Form>
              <Field name='email' placeholder='لطفا ایمیل خود را وارد کنید'  className='h-[40px] w-[100%] rounded-[10px]'/>
              <Field name='password' type='password' placeholder='لطفا رمز خود را وارد کنید'  className='h-[40px] w-[100%] rounded-[10px] mt-[30px]'/>
            <div className='flex justify-center '> 
                <button type='submit' className='text-[#fff] rounded-[5px] border-2 bg-gradient-to-r from-[#732AFF] to-[#4545FF] mt-[35px] h-[42px] w-[270px]'>
                  تکمیل ثبت نام
                </button>
             </div>

            </Form>
          </Formik>
        </div>
        <div className='steps flex mt-[110px] relative'>
          {/* <div><button  className='border-2  w-[88px] h-[32px] bg-[#E3DCFF] text-[#2416E9]'>مرحله بعدی </button></div> */}
          <div className='absolute w-[100px] left-4'><button onClick={()=>setStepCounter(2)} className='border-2 w-[88px] h-[32px] bg-[#E3DCFF]'>مرحله ی قبل</button></div>
        </div>
      <div className='flex h-[40px] mt-[70px] w-[600px] mx-auto' >
        <div className='w-[40px] h-[40px]  border-2 border-[#8735F5] text-[#3F40EA] rounded-full  leading-8 text-center'>3</div>
        <div className='w-[240px] h-[0] mt-[16px] border-4 border-[#732AFF]'></div>
        <div  className='w-[40px] h-[40px]  border-2 border-[#8735F5] rounded-full text-[#3F40EA] bg-[#732AFF] leading-8 text-center'>
          <img className='w-[65%] h-[65%] mt-[7px] mx-auto' src='../../../../public/check.png'/>
        </div>
        <div  className=' w-[240px] h-[0] mt-[16px] border-4 border-[#732AFF]'></div>
        <div  className='w-[40px] h-[40px]  border-2 border-[#8735F5] rounded-full text-[#3F40EA] bg-[#732AFF]  leading-8 text-center'>
          <img className='w-[65%] h-[65%] mt-[7px] mx-auto' src='../../../../public/check.png'/>
        </div>
      </div>
        <div className='flex mx-auto  w-[600px] justify-between'>
        <div className='text-[#4E447D] font-normal text-sm leading-[50px]'>  مشخصات کاربری </div>
        <div className='text-[#4E447D] font-normal text-sm leading-[50px]'>دریافت کد  </div>
        <div className='text-[#4E447D] font-normal text-sm leading-[50px] indent-6'> شماره تماس  </div>

       </div>
    </>
      )
}

export default ThirdStep