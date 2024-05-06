import React from 'react'
import { Field, Form, Formik } from 'formik'


const FirstStep = ({setStepCounter}) => {

    const handleFirst = (values)=>{
        console.log(values);
        setStepCounter(2)
    }
    
  return (
  <>

<h1 className='text-center text-[#2416E9] font-normal text-3xl leading-10'>ثبت نام</h1>
    <p className='leading-5 text-[#A193FF] text-center mt-[40px]'>جهت دریافت کد یک بار مصرف شماره تلفن خود را وارد کنید.</p>
    <div className='border-2 w-[350px] h-[45px] mx-auto mt-[20px]'>

        <Formik initialValues={{phoneNumber:''}} onSubmit={handleFirst}>
          <Form>
            <Field name='phoneNumber' placeholder='شماره موبایل خود را وارد کنید' className='h-[40px] w-[100%] rounded-[10px]'/>
          <div className='flex justify-center '> 
              <button type='submit' className='text-[#fff] rounded-[5px] bg-gradient-to-r from-[#732AFF] to-[#4545FF] mt-[35px] h-[42px] w-[270px]'>
                  دریافت کد یک بار مصرف
              </button>
          </div>

          </Form>
        </Formik>
      </div>

      <div className='flex h-[40px] mt-[180px] w-[600px] mx-auto justify-between' >
        <div className='w-[40px] h-[40px]  border-2 border-[#8735F5] text-[#3F40EA] rounded-full leading-8 text-center '>3</div>
        <div className='w-[240px] h-[0] mt-[16px] border-4 border-[#A193FF]'></div>
        <div  className='w-[40px] h-[40px]  border-2 border-[#8735F5] text-[#3F40EA] rounded-full leading-8 text-center '>2</div>
        <div  className=' w-[240px] h-[0] mt-[16px] border-4  border-[#A193FF]'></div>
        <div  className='w-[40px] h-[40px] text-[#3F40EA] text-center border-2 border-[#8735F5]  rounded-full leading-8  '>1
        </div>
      </div>
      <div className='flex mx-auto  w-[600px] justify-between'>
        <div className='text-[#A193FF] font-normal text-sm leading-[50px]'>  مشخصات کاربری </div>
        <div className='text-[#A193FF] font-normal text-sm leading-[50px]'>دریافت کد</div>
        <div className='text-[#4E447D] font-normal text-sm leading-[50px] indent-6'>  شماره تماس </div>

      </div>
  </>
  )
}

export default FirstStep