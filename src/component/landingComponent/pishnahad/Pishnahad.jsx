import {Fragment} from "react";
import working from "../../../../public/working-with-laptop-2080962 1.png"
import { Field, Form, Formik } from "formik";

const Pishnahad = () => {
    return ( 
        <div>
            <div className="block sm:hidden">
                <h2 className="font-bold text-2xl text-center mb-[75px]">  پیشنهادات و انتقادات  </h2>
                <div className="flex justify-center w-[80%] h-[500px] mx-auto">
                    <Formik>
                        <Form>
                            <Field className="block w-[300px] h-[35px] rounded-2xl bg-gray-50 px-[10px] mt-[50px]" type='text' name='fName' placeholder='نام و نام خانوادگی'/>
                            <div className="border-b-[1px] mb-[20px] border-b-blue-600 w-[270px] mx-auto"></div>
                            <Field className="block w-[300px] h-[35px] rounded-2xl bg-gray-50 px-[10px]" type='text' name='email' placeholder='ایمیل'/>
                            <div className="border-b-[1px] mb-[20px] border-b-blue-600 w-[270px] mx-auto"></div>
                            <Field className="block w-[300px] h-[100px] rounded-2xl bg-gray-50 px-[10px]" type='text' name='matn' placeholder='متن...'/>
                            <div className="border-b-[1px] mb-[20px] border-b-blue-600 w-[270px] mx-auto"></div>
                            <button className="w-[150px] h-[40px] rounded-full bg-blue-600 text-white mr-[80px]"> ثبت </button>
                        </Form>
                    </Formik>
                </div>
            </div>

            <div className='hidden sm:block md:hidden'>
                <h2 className="font-bold text-2xl text-center mb-[75px]">  پیشنهادات و انتقادات  </h2>
                <div className="flex justify-center w-[600px] h-[500px] mx-auto">
                    <Formik>
                        <Form>
                            <Field className="block w-[300px] h-[35px] rounded-2xl bg-gray-50 px-[10px] mt-[50px]" type='text' name='fName' placeholder='نام و نام خانوادگی'/>
                            <div className="border-b-[1px] mb-[20px] border-b-blue-600 w-[270px] mx-auto"></div>
                            <Field className="block w-[300px] h-[35px] rounded-2xl bg-gray-50 px-[10px]" type='text' name='email' placeholder='ایمیل'/>
                            <div className="border-b-[1px] mb-[20px] border-b-blue-600 w-[270px] mx-auto"></div>
                            <Field className="block w-[300px] h-[100px] rounded-2xl bg-gray-50 px-[10px]" type='text' name='matn' placeholder='متن...'/>
                            <div className="border-b-[1px] mb-[20px] border-b-blue-600 w-[270px] mx-auto"></div>
                            <button className="w-[150px] h-[40px] rounded-full bg-blue-600 text-white mr-[80px]"> ثبت </button>
                        </Form>
                    </Formik>
                </div>
            </div>

            <div className='hidden md:block lg:hidden'>
                <h2 className="font-bold text-2xl text-center mb-[75px]">  پیشنهادات و انتقادات  </h2>
                <div className="flex justify-between w-[700px] h-[500px] mx-auto">
                    <Formik>
                        <Form>
                            <Field className="block w-[300px] h-[35px] rounded-2xl bg-gray-50 px-[10px] mt-[50px]" type='text' name='fName' placeholder='نام و نام خانوادگی'/>
                            <div className="border-b-[1px] mb-[20px] border-b-blue-600 w-[270px] mx-auto"></div>
                            <Field className="block w-[300px] h-[35px] rounded-2xl bg-gray-50 px-[10px]" type='text' name='email' placeholder='ایمیل'/>
                            <div className="border-b-[1px] mb-[20px] border-b-blue-600 w-[270px] mx-auto"></div>
                            <Field className="block w-[300px] h-[100px] rounded-2xl bg-gray-50 px-[10px]" type='text' name='matn' placeholder='متن...'/>
                            <div className="border-b-[1px] mb-[20px] border-b-blue-600 w-[270px] mx-auto"></div>
                            <button className="w-[150px] h-[40px] rounded-full bg-blue-600 text-white mr-[80px]"> ثبت </button>
                        </Form>
                    </Formik>
                    <img className="w-[350px] h-[350px]" src={working}/>
                </div>
            </div>

            <div className='hidden lg:block xl:hidden'>
                <h2 className="font-bold text-3xl text-center mb-[75px]">  پیشنهادات و انتقادات  </h2>
                <div className="flex justify-between w-[700px] h-[500px] mx-auto">
                    <Formik>
                        <Form>
                            <Field className="block w-[300px] h-[35px] rounded-2xl bg-gray-50 px-[10px] mt-[50px]" type='text' name='fName' placeholder='نام و نام خانوادگی'/>
                            <div className="border-b-[1px] mb-[20px] border-b-blue-600 w-[270px] mx-auto"></div>
                            <Field className="block w-[300px] h-[35px] rounded-2xl bg-gray-50 px-[10px]" type='text' name='email' placeholder='ایمیل'/>
                            <div className="border-b-[1px] mb-[20px] border-b-blue-600 w-[270px] mx-auto"></div>
                            <Field className="block w-[300px] h-[100px] rounded-2xl bg-gray-50 px-[10px]" type='text' name='matn' placeholder='متن...'/>
                            <div className="border-b-[1px] mb-[20px] border-b-blue-600 w-[270px] mx-auto"></div>
                            <button className="w-[150px] h-[40px] rounded-full bg-blue-600 text-white mr-[80px]"> ثبت </button>
                        </Form>
                    </Formik>
                    <img className="w-[350px] h-[350px]" src={working}/>
                </div>
            </div>

            <div className='hidden xl:block mb-48'>
                <h2 className="font-bold text-3xl text-center mb-[75px]">  پیشنهادات و انتقادات  </h2>
                <div className="flex justify-between w-[950px] h-[500px] mx-auto">
                    <Formik>
                        <Form>
                            <Field className="block w-[400px] h-[35px] rounded-2xl bg-gray-50 px-[10px] mt-[50px]" type='text' name='fName' placeholder='نام و نام خانوادگی'/>
                            <div className="border-b-[1px] mb-[30px] border-b-blue-600 w-[370px] mx-auto"></div>
                            <Field className="block w-[400px] h-[35px] rounded-2xl bg-gray-50 px-[10px]" type='text' name='email' placeholder='ایمیل'/>
                            <div className="border-b-[1px] mb-[30px] border-b-blue-600 w-[370px] mx-auto"></div>
                            <Field className="block w-[400px] h-[140px] rounded-2xl bg-gray-50 px-[10px]" type='text' name='matn' placeholder='متن...'/>
                            <div className="border-b-[1px] mb-[30px] border-b-blue-600 w-[370px] mx-auto"></div>
                            <button className="w-[150px] h-[40px] rounded-full bg-blue-600 text-white mr-[120px]"> ثبت </button>
                        </Form>
                    </Formik>
                    <img className="w-[500px] h-[500px]" src={working}/>
                </div>
            </div>
        </div>
    )
}

export default Pishnahad;