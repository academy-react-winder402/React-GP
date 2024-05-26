import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import zangoole from '../../../../public/PanelDaneshJoo/icons8-bell-50.png';
import sabad from '../../../../public/PanelDaneshJoo/icons8-cart-64.png';
import tasvir from '../../../../public/PanelDaneshJoo/icons8-down-100.png';

// Validation schema
const validationSchema = Yup.object({
    currentPassword: Yup.string().required('رمز عبور فعلی لازم است'),
    newPassword: Yup.string().required('رمز عبور جدید لازم است'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'رمز عبور جدید باید مطابقت داشته باشد')
        .required('تکرار رمز عبور جدید لازم است')
});

const Dashboard3 = () => {
    return (
        <div className="w-[73%] bg-white rounded-xl py-[10px] mx-auto relative">
            <div className='flex justify-between w-[95%] mx-auto pb-[20px] border-b-[1px] border-b-black'>
                <h2 className="text-xl font-bold">تغییر رمز عبور</h2>
                <div className='flex gap-3'>
                    <img className='w-8 h-7' src={zangoole} alt="bell" />
                    <img className='w-8 h-7' src={sabad} alt="cart" />
                </div>
            </div>
            <Formik
                initialValues={{
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    // Handle form submission
                    console.log(values);
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="w-[50%] mx-auto">
                        <div className="mt-8 p-8">
                            <div className="mb-4">
                                <h3 className='mb-5'>رمز عبور فعلی</h3>
                                <Field
                                    type="password"
                                    name="currentPassword"
                                    className="border border-black w-full py-2 px-4 rounded h-16"
                                />
                                <ErrorMessage name="currentPassword" component="div" className="text-red-600" />
                            </div>
                            <div className="mb-4">
                                <h3 className='mb-5'>رمز عبور جدید</h3>
                                <Field
                                    type="password"
                                    name="newPassword"
                                    className="border border-black w-full py-2 px-4 rounded h-16"
                                />
                                <ErrorMessage name="newPassword" component="div" className="text-red-600" />
                            </div>
                            <div className="mb-4">
                                <h3 className='mb-5'>تکرار رمز عبور جدید</h3>
                                <Field
                                    type="password"
                                    name="confirmPassword"
                                    className="border border-black w-full py-2 px-4 rounded h-16"
                                />
                                <ErrorMessage name="confirmPassword" component="div" className="text-red-600" />
                            </div>
                            <div className="flex justify-center mt-8">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-blue-800 text-white rounded-sm text-sm border-4 border-blue-800 w-32 py-2 m-auto"
                                >
                                    ثبت اطلاعات
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
            <button className="flex items-center text-sm absolute bottom-5 left-4">
                بازگشت
                <img src={tasvir} alt="down arrow" className="ml-2" />
            </button>
        </div>
    );
};

export default Dashboard3;





