import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import profileAks from "../../../../public/PanelDaneshJoo/Mask Group 60.png";
import zangoole from '../../../../public/PanelDaneshJoo/icons8-bell-50.png';
import sabad from '../../../../public/PanelDaneshJoo/icons8-cart-64.png';
import tasvir from '../../../../public/PanelDaneshJoo/icons8-down-100.png';

// Validation schema
const validationSchema = Yup.object({
    firstName: Yup.string().required('نام لازم است'),
    lastName: Yup.string().required('نام خانوادگی لازم است'),
    nationalCode: Yup.string().required('کدملی لازم است'),
    email: Yup.string().email().required('ایمیل لازم است'),
    birthDate: Yup.string().required('تاریخ تولد لازم است'),
    mobileNumber: Yup.string().required('شماره موبایل لازم است'),
});

const Dashboard2 = () => {
    return (
        <div className="w-full h-full bg-white rounded-xl py-[10px]">
            <div className='flex justify-between w-[95%] mx-auto pb-[20px] border-b-[1px] border-b-black'>
                <h2 className="text-xl font-bold">حساب کاربری</h2>
                <div className='flex gap-3'>
                    <img className='w-8 h-7' src={zangoole} alt="bell" />
                    <img className='w-8 h-7' src={sabad} alt="cart" />
                </div>
            </div>
            <img src={profileAks} className="h-30 mx-auto mt-10 rounded-full" alt="Profile" />
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    nationalCode: '',
                    email: '',
                    birthDate: '',
                    mobileNumber: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    // console.log(values);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="flex gap-6 pr-8 mt-8">
                            <div>
                                <h3>نام</h3>
                                <Field 
                                    type="text" 
                                    name="firstName" 
                                    className="border border-black w-80 py-2 px-4 rounded" 
                                />
                                <ErrorMessage name="firstName" component="div" className="text-red-600" />
                            </div>
                            <div>
                                <h3>نام خانوادگی</h3>
                                <Field 
                                    type="text" 
                                    name="lastName" 
                                    className="border border-black w-80 py-2 px-4 rounded" 
                                />
                                <ErrorMessage name="lastName" component="div" className="text-red-600" />
                            </div>
                            <div>
                                <h3>کدملی</h3>
                                <Field 
                                    type="text" 
                                    name="nationalCode" 
                                    className="border border-black w-80 py-2 px-4 rounded" 
                                />
                                <ErrorMessage name="nationalCode" component="div" className="text-red-600" />
                            </div>
                        </div>
                        <div className="flex gap-6 pr-8 mt-8">
                            <div>
                                <h3>ایمیل</h3>
                                <Field 
                                    type="email" 
                                    name="email" 
                                    className="border border-black w-80 py-2 px-4 rounded" 
                                />
                                <ErrorMessage name="email" component="div" className="text-red-600" />
                            </div>
                            <div>
                                <h3>تاریخ تولد</h3>
                                <Field 
                                    type="text" 
                                    name="birthDate" 
                                    className="border border-black w-80 py-2 px-4 rounded" 
                                />
                                <ErrorMessage name="birthDate" component="div" className="text-red-600" />
                            </div>
                            <div>
                                <h3>شماره موبایل</h3>
                                <Field 
                                    type="text" 
                                    name="mobileNumber" 
                                    className="border border-black w-80 py-2 px-4 rounded" 
                                />
                                <ErrorMessage name="mobileNumber" component="div" className="text-red-600" />
                            </div>
                        </div>
                        <div className="relative flex justify-between mt-8 pr-8">
                            <button 
                                type="submit" 
                                disabled={isSubmitting} 
                                className="bg-blue-800 text-white rounded-sm text-sm border-4 border-blue-800 w-32 py-2"
                            >
                                ثبت اطلاعات
                            </button>
                            <button type="button" className="flex items-center text-sm">
                                بازگشت
                                <img src={tasvir} alt="down arrow" className="ml-2" />
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Dashboard2;

