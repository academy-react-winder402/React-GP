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

    <div className='block sm:hidden'>
      <h1 className='text-center text-white font-normal text-3xl leading-10'>    رمز جدید </h1>
      <p className='leading-5 text-white text-center mt-[40px]'>لطفا اطلاعات خواسته شده را کامل کنید</p>
      <div className='w-[350px] h-[45px] mx-auto mt-[20px]'>

          <Formik initialValues={{password:''}} onSubmit={handleThird} >
            <Form>
              <Field name='password' type='password' placeholder='لطفا رمز جدید خود را وارد کنید'  className='h-[40px] w-[100%] rounded-[10px]'/>
              <Field name='password' type='password' placeholder='لطفا رمز جدید خود را وارد کنید'  className='h-[40px] w-[100%] rounded-[10px] mt-[30px]'/>
            <div className='flex justify-center '> 
                <button type='submit' className='text-[#fff] rounded-full border-2 bg-gradient-to-r from-[#732AFF] to-[#4545FF] mt-[35px] h-[42px] w-[150px]'>
                  تغییر رمز  
                </button>
             </div>

            </Form>
          </Formik>
        </div>
        <div className='steps flex mt-[110px] relative'>
          {/* <div><button  className='border-2  w-[88px] h-[32px] bg-[#E3DCFF] text-[#2416E9]'>مرحله بعدی </button></div> */}
          <div className='absolute w-[100px] left-4'><button onClick={()=>setStepCounter(2)} className='border-2 w-[88px] h-[32px] bg-[#E3DCFF] rounded-lg'>مرحله ی قبل</button></div>
        </div>
      <div className='flex h-[40px] mt-[70px] mx-auto justify-center' >
        <div className='w-[40px] h-[40px]  border-2 border-gray-700 text-gray-700 rounded-xl  leading-8 text-center'>3</div>
        <div className='w-[25%] h-[0] mt-[16px] border-4 border-blue-400'></div>
        <div  className='w-[40px] h-[40px]  border-2 border-gray-700 rounded-xl text-gray-700 bg-[#732AFF] leading-8 text-center'>
          <img className='w-[65%] h-[65%] mt-[7px] mx-auto' src='../../../../public/check.png'/>
        </div>
        <div  className=' w-[25%] h-[0] mt-[16px] border-4 border-blue-400'></div>
        <div  className='w-[40px] h-[40px]  border-2 border-gray-700 rounded-xl text-gray-700 bg-[#732AFF]  leading-8 text-center'>
          <img className='w-[65%] h-[65%] mt-[7px] mx-auto' src='../../../../public/check.png'/>
        </div>
      </div>
        <div className='flex mx-auto justify-center gap-[20%]'>
        <div className='text-white font-normal text-sm leading-[50px]'>  تغییر رمز عبور  </div>
        <div className='text-white font-normal text-sm leading-[50px]'>دریافت کد  </div>
        <div className='text-white font-normal text-sm leading-[50px] indent-6'>  ایمیل</div>

      </div>
    </div>

    <div className='hidden sm:block md:hidden'>
      <h1 className='text-center text-white font-normal text-3xl leading-10'>    رمز جدید </h1>
      <p className='leading-5 text-white text-center mt-[40px]'>لطفا اطلاعات خواسته شده را کامل کنید</p>
      <div className='w-[350px] h-[45px] mx-auto mt-[20px]'>

          <Formik initialValues={{password:''}} onSubmit={handleThird} >
            <Form>
              <Field name='password' type='password' placeholder='لطفا رمز جدید خود را وارد کنید'  className='h-[40px] w-[100%] rounded-[10px]'/>
              <Field name='password' type='password' placeholder='لطفا رمز جدید خود را وارد کنید'  className='h-[40px] w-[100%] rounded-[10px] mt-[30px]'/>
            <div className='flex justify-center '> 
                <button type='submit' className='text-[#fff] rounded-full border-2 bg-gradient-to-r from-[#732AFF] to-[#4545FF] mt-[35px] h-[42px] w-[150px]'>
                  تغییر رمز  
                </button>
             </div>

            </Form>
          </Formik>
        </div>
        <div className='steps flex mt-[110px] relative'>
          {/* <div><button  className='border-2  w-[88px] h-[32px] bg-[#E3DCFF] text-[#2416E9]'>مرحله بعدی </button></div> */}
          <div className='absolute w-[100px] left-4'><button onClick={()=>setStepCounter(2)} className='border-2 w-[88px] h-[32px] bg-[#E3DCFF] rounded-lg'>مرحله ی قبل</button></div>
        </div>
      <div className='flex h-[40px] mt-[70px] mx-auto justify-center' >
        <div className='w-[40px] h-[40px]  border-2 border-gray-700 text-gray-700 rounded-xl  leading-8 text-center'>3</div>
        <div className='w-[25%] h-[0] mt-[16px] border-4 border-blue-400'></div>
        <div  className='w-[40px] h-[40px]  border-2 border-gray-700 rounded-xl text-gray-700 bg-[#732AFF] leading-8 text-center'>
          <img className='w-[65%] h-[65%] mt-[7px] mx-auto' src='../../../../public/check.png'/>
        </div>
        <div  className=' w-[25%] h-[0] mt-[16px] border-4 border-blue-400'></div>
        <div  className='w-[40px] h-[40px]  border-2 border-gray-700 rounded-xl text-gray-700 bg-[#732AFF]  leading-8 text-center'>
          <img className='w-[65%] h-[65%] mt-[7px] mx-auto' src='../../../../public/check.png'/>
        </div>
      </div>
        <div className='flex mx-auto justify-center gap-[20%]'>
        <div className='text-white font-normal text-sm leading-[50px]'>  تغییر رمز عبور  </div>
        <div className='text-white font-normal text-sm leading-[50px]'>دریافت کد  </div>
        <div className='text-white font-normal text-sm leading-[50px] indent-6'>  ایمیل</div>

      </div>
    </div>

    <div className='hidden md:block lg:hidden'>
      <h1 className='text-center text-white font-normal text-3xl leading-10'>    رمز جدید </h1>
      <p className='leading-5 text-white text-center mt-[40px]'>لطفا اطلاعات خواسته شده را کامل کنید</p>
      <div className='w-[350px] h-[45px] mx-auto mt-[20px]'>

          <Formik initialValues={{password:''}} onSubmit={handleThird} >
            <Form>
              <Field name='password' type='password' placeholder='لطفا رمز جدید خود را وارد کنید'  className='h-[40px] w-[100%] rounded-[10px]'/>
              <Field name='password' type='password' placeholder='لطفا رمز جدید خود را وارد کنید'  className='h-[40px] w-[100%] rounded-[10px] mt-[30px]'/>
            <div className='flex justify-center '> 
                <button type='submit' className='text-[#fff] rounded-full border-2 bg-gradient-to-r from-[#732AFF] to-[#4545FF] mt-[35px] h-[42px] w-[150px]'>
                  تغییر رمز  
                </button>
             </div>

            </Form>
          </Formik>
        </div>
        <div className='steps flex mt-[110px] relative'>
          {/* <div><button  className='border-2  w-[88px] h-[32px] bg-[#E3DCFF] text-[#2416E9]'>مرحله بعدی </button></div> */}
          <div className='absolute w-[100px] left-4'><button onClick={()=>setStepCounter(2)} className='border-2 w-[88px] h-[32px] bg-[#E3DCFF] rounded-lg'>مرحله ی قبل</button></div>
        </div>
      <div className='flex h-[40px] mt-[70px] mx-auto justify-center' >
        <div className='w-[40px] h-[40px]  border-2 border-gray-700 text-gray-700 rounded-xl  leading-8 text-center'>3</div>
        <div className='w-[25%] h-[0] mt-[16px] border-4 border-blue-400'></div>
        <div  className='w-[40px] h-[40px]  border-2 border-gray-700 rounded-xl text-gray-700 bg-[#732AFF] leading-8 text-center'>
          <img className='w-[65%] h-[65%] mt-[7px] mx-auto' src='../../../../public/check.png'/>
        </div>
        <div  className=' w-[25%] h-[0] mt-[16px] border-4 border-blue-400'></div>
        <div  className='w-[40px] h-[40px]  border-2 border-gray-700 rounded-xl text-gray-700 bg-[#732AFF]  leading-8 text-center'>
          <img className='w-[65%] h-[65%] mt-[7px] mx-auto' src='../../../../public/check.png'/>
        </div>
      </div>
        <div className='flex mx-auto justify-center gap-[20%]'>
        <div className='text-white font-normal text-sm leading-[50px]'>  تغییر رمز عبور  </div>
        <div className='text-white font-normal text-sm leading-[50px]'>دریافت کد  </div>
        <div className='text-white font-normal text-sm leading-[50px] indent-6'>  ایمیل</div>

      </div>
    </div>

    <div className='hidden lg:block xl:hidden'>
      <h1 className='text-center text-white font-normal text-3xl leading-10'>    رمز جدید </h1>
      <p className='leading-5 text-white text-center mt-[40px]'>لطفا اطلاعات خواسته شده را کامل کنید</p>
      <div className='w-[350px] h-[45px] mx-auto mt-[20px]'>

          <Formik initialValues={{password:''}} onSubmit={handleThird} >
            <Form>
              <Field name='password' type='password' placeholder='لطفا رمز جدید خود را وارد کنید'  className='h-[40px] w-[100%] rounded-[10px]'/>
              <Field name='password' type='password' placeholder='لطفا رمز جدید خود را وارد کنید'  className='h-[40px] w-[100%] rounded-[10px] mt-[30px]'/>
            <div className='flex justify-center '> 
                <button type='submit' className='text-[#fff] rounded-full border-2 bg-gradient-to-r from-[#732AFF] to-[#4545FF] mt-[35px] h-[42px] w-[150px]'>
                  تغییر رمز  
                </button>
             </div>

            </Form>
          </Formik>
        </div>
        <div className='steps flex mt-[110px] relative'>
          {/* <div><button  className='border-2  w-[88px] h-[32px] bg-[#E3DCFF] text-[#2416E9]'>مرحله بعدی </button></div> */}
          <div className='absolute w-[100px] left-4'><button onClick={()=>setStepCounter(2)} className='border-2 w-[88px] h-[32px] bg-[#E3DCFF] rounded-lg'>مرحله ی قبل</button></div>
        </div>
      <div className='flex h-[40px] mt-[70px] mx-auto justify-center' >
        <div className='w-[40px] h-[40px]  border-2 border-gray-700 text-gray-700 rounded-xl  leading-8 text-center'>3</div>
        <div className='w-[25%] h-[0] mt-[16px] border-4 border-blue-400'></div>
        <div  className='w-[40px] h-[40px]  border-2 border-gray-700 rounded-xl text-gray-700 bg-[#732AFF] leading-8 text-center'>
          <img className='w-[65%] h-[65%] mt-[7px] mx-auto' src='../../../../public/check.png'/>
        </div>
        <div  className=' w-[25%] h-[0] mt-[16px] border-4 border-blue-400'></div>
        <div  className='w-[40px] h-[40px]  border-2 border-gray-700 rounded-xl text-gray-700 bg-[#732AFF]  leading-8 text-center'>
          <img className='w-[65%] h-[65%] mt-[7px] mx-auto' src='../../../../public/check.png'/>
        </div>
      </div>
        <div className='flex mx-auto justify-center gap-[20%]'>
        <div className='text-white font-normal text-sm leading-[50px]'>  تغییر رمز عبور  </div>
        <div className='text-white font-normal text-sm leading-[50px]'>دریافت کد  </div>
        <div className='text-white font-normal text-sm leading-[50px] indent-6'>  ایمیل</div>

      </div>
    </div>

    <div className='hidden xl:block'>
      <h1 className='text-center text-white font-normal text-3xl leading-10'>    رمز جدید </h1>
      <p className='leading-5 text-white text-center mt-[40px]'>لطفا اطلاعات خواسته شده را کامل کنید</p>
      <div className='w-[350px] h-[45px] mx-auto mt-[20px]'>

          <Formik initialValues={{password:''}} onSubmit={handleThird} >
            <Form>
              <Field name='password' type='password' placeholder='لطفا رمز جدید خود را وارد کنید'  className='h-[40px] w-[100%] rounded-[10px]'/>
              <Field name='password' type='password' placeholder='لطفا رمز جدید خود را وارد کنید'  className='h-[40px] w-[100%] rounded-[10px] mt-[30px]'/>
            <div className='flex justify-center '> 
                <button type='submit' className='text-[#fff] rounded-full border-2 bg-gradient-to-r from-[#732AFF] to-[#4545FF] mt-[35px] h-[42px] w-[150px]'>
                  تغییر رمز  
                </button>
             </div>

            </Form>
          </Formik>
        </div>
        <div className='steps flex mt-[110px] relative'>
          {/* <div><button  className='border-2  w-[88px] h-[32px] bg-[#E3DCFF] text-[#2416E9]'>مرحله بعدی </button></div> */}
          <div className='absolute w-[100px] left-4'><button onClick={()=>setStepCounter(2)} className='border-2 w-[88px] h-[32px] bg-[#E3DCFF] rounded-lg'>مرحله ی قبل</button></div>
        </div>
      <div className='flex h-[40px] mt-[70px] mx-auto justify-center' >
        <div className='w-[40px] h-[40px]  border-2 border-gray-700 text-gray-700 rounded-xl  leading-8 text-center'>3</div>
        <div className='w-[25%] h-[0] mt-[16px] border-4 border-blue-400'></div>
        <div  className='w-[40px] h-[40px]  border-2 border-gray-700 rounded-xl text-gray-700 bg-[#732AFF] leading-8 text-center'>
          <img className='w-[65%] h-[65%] mt-[7px] mx-auto' src='../../../../public/check.png'/>
        </div>
        <div  className=' w-[25%] h-[0] mt-[16px] border-4 border-blue-400'></div>
        <div  className='w-[40px] h-[40px]  border-2 border-gray-700 rounded-xl text-gray-700 bg-[#732AFF]  leading-8 text-center'>
          <img className='w-[65%] h-[65%] mt-[7px] mx-auto' src='../../../../public/check.png'/>
        </div>
      </div>
        <div className='flex mx-auto justify-center gap-[20%]'>
        <div className='text-white font-normal text-sm leading-[50px]'>  تغییر رمز عبور  </div>
        <div className='text-white font-normal text-sm leading-[50px]'>دریافت کد  </div>
        <div className='text-white font-normal text-sm leading-[50px] indent-6'>  ایمیل</div>

      </div>
    </div>
    </>
      )
}

export default ThirdStep