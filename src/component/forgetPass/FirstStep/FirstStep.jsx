import React from 'react'
import { Field, Form, Formik } from 'formik'


const FirstStep = ({setStepCounter}) => {

    const handleFirst = (values)=>{
        console.log(values);
        setStepCounter(2)
    }
    
  return (
  <>
    <div className='block sm:hidden'>
      <h1 className='text-center text-white font-normal text-3xl leading-10'>تغییر رمز عبور </h1>
      <p className='leading-5 text-white text-center mt-[40px]'>جهت دریافت کد یک بار مصرف ایمیل  خود را وارد کنید.</p>
      <div className='w-[350px] h-[45px] mx-auto mt-[20px]'>

        <Formik initialValues={{email:''}} onSubmit={handleFirst}>
          <Form>
            <Field name='email' placeholder='ایمیل  خود را وارد کنید' className='h-[40px] w-[100%] rounded-[10px] indent-2'/>
          <div className='flex justify-center '> 
              <button type='submit' className='text-[#fff] rounded-full bg-gradient-to-r from-[#732AFF] to-[#4545FF] mt-[35px] h-[42px] w-[270px]'>
                  دریافت کد یک بار مصرف
              </button>
          </div>

          </Form>
        </Formik>
      </div>

      <div className='flex h-[40px] mt-[180px] mx-auto justify-center' >
        <div className='w-[40px] h-[40px]  border-2 border-gray-700 text-gray-700 rounded-xl leading-8 text-center '>3</div>
        <div className='w-[25%] h-[0] mt-[16px] border-4 border-blue-400'></div>
        <div  className='w-[40px] h-[40px]  border-2 border-gray-700 text-gray-700 rounded-xl leading-8 text-center '>2</div>
        <div  className=' w-[25%] h-[0] mt-[16px] border-4  border-blue-400'></div>
        <div  className='w-[40px] h-[40px] text-gray-700 text-center border-2 border-gray-700  rounded-xl leading-8  '>1
        </div>
      </div>
      <div className='flex mx-auto justify-center gap-[20%]'>
        <div className='text-white font-normal text-sm leading-[50px]'>  تغییر رمز عبور  </div>
        <div className='text-white font-normal text-sm leading-[50px]'>دریافت کد</div>
        <div className='text-white font-normal text-sm leading-[50px] indent-6'>  ایمیل  </div>

      </div>
    </div>

    <div className='hidden sm:block md:hidden'>
      <h1 className='text-center text-white font-normal text-3xl leading-10'>تغییر رمز عبور </h1>
      <p className='leading-5 text-white text-center mt-[40px]'>جهت دریافت کد یک بار مصرف ایمیل  خود را وارد کنید.</p>
      <div className='w-[350px] h-[45px] mx-auto mt-[20px]'>

        <Formik initialValues={{email:''}} onSubmit={handleFirst}>
          <Form>
            <Field name='email' placeholder='ایمیل  خود را وارد کنید' className='h-[40px] w-[100%] rounded-[10px] indent-2'/>
          <div className='flex justify-center '> 
              <button type='submit' className='text-[#fff] rounded-full bg-gradient-to-r from-[#732AFF] to-[#4545FF] mt-[35px] h-[42px] w-[270px]'>
                  دریافت کد یک بار مصرف
              </button>
          </div>

          </Form>
        </Formik>
      </div>

      <div className='flex h-[40px] mt-[180px] mx-auto justify-center' >
        <div className='w-[40px] h-[40px]  border-2 border-gray-700 text-gray-700 rounded-xl leading-8 text-center '>3</div>
        <div className='w-[25%] h-[0] mt-[16px] border-4 border-blue-400'></div>
        <div  className='w-[40px] h-[40px]  border-2 border-gray-700 text-gray-700 rounded-xl leading-8 text-center '>2</div>
        <div  className=' w-[25%] h-[0] mt-[16px] border-4  border-blue-400'></div>
        <div  className='w-[40px] h-[40px] text-gray-700 text-center border-2 border-gray-700  rounded-xl leading-8  '>1
        </div>
      </div>
      <div className='flex mx-auto justify-center gap-[20%]'>
        <div className='text-white font-normal text-sm leading-[50px]'>  تغییر رمز عبور  </div>
        <div className='text-white font-normal text-sm leading-[50px]'>دریافت کد</div>
        <div className='text-white font-normal text-sm leading-[50px] indent-6'>  ایمیل  </div>

      </div>
    </div>

    <div className='hidden md:block lg:hidden'>
      <h1 className='text-center text-white font-normal text-3xl leading-10'>تغییر رمز عبور </h1>
      <p className='leading-5 text-white text-center mt-[40px]'>جهت دریافت کد یک بار مصرف ایمیل  خود را وارد کنید.</p>
      <div className='w-[350px] h-[45px] mx-auto mt-[20px]'>

        <Formik initialValues={{email:''}} onSubmit={handleFirst}>
          <Form>
            <Field name='email' placeholder='ایمیل  خود را وارد کنید' className='h-[40px] w-[100%] rounded-[10px] indent-2'/>
          <div className='flex justify-center '> 
              <button type='submit' className='text-[#fff] rounded-full bg-gradient-to-r from-[#732AFF] to-[#4545FF] mt-[35px] h-[42px] w-[270px]'>
                  دریافت کد یک بار مصرف
              </button>
          </div>

          </Form>
        </Formik>
      </div>

      <div className='flex h-[40px] mt-[180px] mx-auto justify-center' >
        <div className='w-[40px] h-[40px]  border-2 border-gray-700 text-gray-700 rounded-xl leading-8 text-center '>3</div>
        <div className='w-[25%] h-[0] mt-[16px] border-4 border-blue-400'></div>
        <div  className='w-[40px] h-[40px]  border-2 border-gray-700 text-gray-700 rounded-xl leading-8 text-center '>2</div>
        <div  className=' w-[25%] h-[0] mt-[16px] border-4  border-blue-400'></div>
        <div  className='w-[40px] h-[40px] text-gray-700 text-center border-2 border-gray-700  rounded-xl leading-8  '>1
        </div>
      </div>
      <div className='flex mx-auto justify-center gap-[20%]'>
        <div className='text-white font-normal text-sm leading-[50px]'>  تغییر رمز عبور  </div>
        <div className='text-white font-normal text-sm leading-[50px]'>دریافت کد</div>
        <div className='text-white font-normal text-sm leading-[50px] indent-6'>  ایمیل  </div>

      </div>
    </div>

    <div className='hidden lg:block xl:hidden'>
      <h1 className='text-center text-white font-normal text-3xl leading-10'>تغییر رمز عبور </h1>
      <p className='leading-5 text-white text-center mt-[40px]'>جهت دریافت کد یک بار مصرف ایمیل  خود را وارد کنید.</p>
      <div className='w-[350px] h-[45px] mx-auto mt-[20px]'>

        <Formik initialValues={{email:''}} onSubmit={handleFirst}>
          <Form>
            <Field name='email' placeholder='ایمیل  خود را وارد کنید' className='h-[40px] w-[100%] rounded-[10px] indent-2'/>
          <div className='flex justify-center '> 
              <button type='submit' className='text-[#fff] rounded-full bg-gradient-to-r from-[#732AFF] to-[#4545FF] mt-[35px] h-[42px] w-[270px]'>
                  دریافت کد یک بار مصرف
              </button>
          </div>

          </Form>
        </Formik>
      </div>

      <div className='flex h-[40px] mt-[180px] mx-auto justify-center' >
        <div className='w-[40px] h-[40px]  border-2 border-gray-700 text-gray-700 rounded-xl leading-8 text-center '>3</div>
        <div className='w-[25%] h-[0] mt-[16px] border-4 border-blue-400'></div>
        <div  className='w-[40px] h-[40px]  border-2 border-gray-700 text-gray-700 rounded-xl leading-8 text-center '>2</div>
        <div  className=' w-[25%] h-[0] mt-[16px] border-4  border-blue-400'></div>
        <div  className='w-[40px] h-[40px] text-gray-700 text-center border-2 border-gray-700  rounded-xl leading-8  '>1
        </div>
      </div>
      <div className='flex mx-auto justify-center gap-[20%]'>
        <div className='text-white font-normal text-sm leading-[50px]'>  تغییر رمز عبور  </div>
        <div className='text-white font-normal text-sm leading-[50px]'>دریافت کد</div>
        <div className='text-white font-normal text-sm leading-[50px] indent-6'>  ایمیل  </div>

      </div>
    </div>

    <div className='hidden xl:block'>
      <h1 className='text-center text-white font-normal text-3xl leading-10'>تغییر رمز عبور </h1>
      <p className='leading-5 text-white text-center mt-[40px]'>جهت دریافت کد یک بار مصرف ایمیل  خود را وارد کنید.</p>
      <div className='w-[350px] h-[45px] mx-auto mt-[20px]'>

        <Formik initialValues={{email:''}} onSubmit={handleFirst}>
          <Form>
            <Field name='email' placeholder='ایمیل  خود را وارد کنید' className='h-[40px] w-[100%] rounded-[10px] indent-2'/>
          <div className='flex justify-center '> 
              <button type='submit' className='text-[#fff] rounded-full bg-gradient-to-r from-[#732AFF] to-[#4545FF] mt-[35px] h-[42px] w-[270px]'>
                  دریافت کد یک بار مصرف
              </button>
          </div>

          </Form>
        </Formik>
      </div>

      <div className='flex h-[40px] mt-[180px] mx-auto justify-center' >
        <div className='w-[40px] h-[40px]  border-2 border-gray-700 text-gray-700 rounded-xl leading-8 text-center '>3</div>
        <div className='w-[25%] h-[0] mt-[16px] border-4 border-blue-400'></div>
        <div  className='w-[40px] h-[40px]  border-2 border-gray-700 text-gray-700 rounded-xl leading-8 text-center '>2</div>
        <div  className=' w-[25%] h-[0] mt-[16px] border-4  border-blue-400'></div>
        <div  className='w-[40px] h-[40px] text-gray-700 text-center border-2 border-gray-700  rounded-xl leading-8  '>1
        </div>
      </div>
      <div className='flex mx-auto justify-center gap-[20%]'>
        <div className='text-white font-normal text-sm leading-[50px]'>  تغییر رمز عبور  </div>
        <div className='text-white font-normal text-sm leading-[50px]'>دریافت کد</div>
        <div className='text-white font-normal text-sm leading-[50px] indent-6'>  ایمیل  </div>

      </div>
    </div>

  </>
  )
}

export default FirstStep