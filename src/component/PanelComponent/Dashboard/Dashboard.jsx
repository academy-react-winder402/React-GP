import { useState } from "react";
import zangoole from '../../../../public/PanelDaneshJoo/icons8-bell-50.png'
import sabad from '../../../../public/PanelDaneshJoo/icons8-cart-64.png'
import aks from '../../../../public/PanelDaneshJoo/react.png'

const Dashboard = () => {

    const [slide, setSlide] = useState([
        { src:aks, name:"آموزش رایگان html", ostadName:"دکتر بحرالعلوم", pir:"500000" },
        { src:aks, name:"آموزش رایگان html", ostadName:"دکتر بحرالعلوم", pir:"500000" },
      ]);

      const [slides, setSlides] = useState([
        { src:aks, name:"آموزش رایگان html", ostadName:"دکتر بحرالعلوم", pir:"500000" },
        { src:aks, name:"آموزش رایگان html", ostadName:"دکتر بحرالعلوم", pir:"500000" },
      ]);

    const windowHeight = window.innerHeight;



    return ( 
        <div className="w-[73%] h-full bg-white rounded-xl py-[10px]">
        <div className='flex justify-between w-[95%] mx-auto pb-[20px] border-b-[1px] border-b-black'>
            <h2 className="text-xl font-bold">  داشبورد  </h2>
            <div className='flex gap-3'>
                <img className='w-8  h-7' src={zangoole} alt="" />
                <img className='w-8  h-7' src={sabad} alt="" />
            </div>
        </div>
        <div className='relative flex flex-wrap gap-[10%] border-[1px] border-black rounded-xl w-[95%] h-[150px] mx-auto mt-[10px] pt-[20px] pr-[50px]'>
            <div className='flex gap-3'>
                <h2>  نام نام خاندارگی :  </h2>
                <h3>  بیتا قنبری  </h3>
            </div>
            <div className='flex gap-3'>
                <h2>  تاریخ تولد :  </h2>
                <h3>  1402/03/26  </h3>
            </div>
            <div className='flex gap-3'>
                <h2>  شماره همراه :  </h2>
                <h3>  09031129980  </h3>
            </div>
            <div className='flex gap-3'>
                <h2>  شماره ملی :  </h2>
                <h3>  1234567890  </h3>
            </div>
            <div className='flex gap-3'>
                <h2>  ایمیل :  </h2>
                <h3>  bitaghanbari@gmail.com  </h3>
            </div>
            <button className='absolute bottom-0 left-0 w-[100px] h-[50px] border-[1px] border-black rounded-tr-xl rounded-bl-xl'>  ویرایش  </button>
        </div>
        <div className='flex justify-between mx-[30px] mt-[70px]'>
            <div className='w-[48%] h-full'>
                <h2 className='font-bold text-xl mb-[40px]'>  آخرین دوره ثبت شده  </h2>
                {slide.map((item) => {
                return(
                    <div className='relative flex h-[100px] shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)] rounded-xl mb-[10px] py-[3%] px-[3%]'>
                        <img className='w-[90px] h-[70px] rounded-xl ml-[15px]' src={item.src}/>
                        <div>
                            <h3 className='font-bold text-base'>  {item.name}  </h3>
                            <h4 className='font-bold text-xs absolute bottom-5'>  {item.ostadName}  </h4>
                        </div>
                        <price className="absolute left-5 bottom-5"> {item.pir}  تومان  </price>
                    </div>
                    )
                })}

            </div>
            <div className='w-[48%]'>
                <h2 className='font-bold text-xl mb-[40px]'>  دوره های پیشنهادی  </h2>
                {slides.map((item) => {
                return(
                    <div className='relative flex h-[100px] shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)] rounded-xl mb-[10px] py-[3%] px-[3%]'>
                        <img className='w-[90px] h-[70px] rounded-xl ml-[15px]' src={item.src}/>
                        <div>
                            <h3 className='font-bold text-base'>  {item.name}  </h3>
                            <h4 className='font-bold text-xs absolute bottom-5'>  {item.ostadName}  </h4>
                        </div>
                        <price className="absolute left-5 bottom-5"> {item.pir}  تومان  </price>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
     );
}
 
export default Dashboard;