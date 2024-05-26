import { useState } from 'react';
import zangoole from '../../../../public/PanelDaneshJoo/icons8-bell-50.png'
import sabad from '../../../../public/PanelDaneshJoo/icons8-cart-64.png'
import polygon from '../../../../public/PanelDaneshJoo/Polygon 1.png'
import zarebin from '../../../../public/zarebin.png'
import aks from '../../../../public/PanelDaneshJoo/react.png'
import details from '../../../../public/PanelDaneshJoo/eye-svgrepo-com.png'
import dilit from '../../../../public/PanelDaneshJoo/icons8-trash-128.png'
import back from '../../../../public/PanelDaneshJoo/icons8-down-100.png'
import left from '../../../../public/angle-left-b 3.png'
import right from '../../../../public/angle-right-b 3.png'


const MyCourses = () => {

    const [lists, setLists] = useState([
        { src:aks, nameDore:"ری اکت", ostadName:"نام مدرس دوره", tarikh:"1402/07/09", pir:"250000" },
        { src:aks, nameDore:"ری اکت", ostadName:"نام مدرس دوره", tarikh:"1402/07/09", pir:"250000" },
        { src:aks, nameDore:"ری اکت", ostadName:"نام مدرس دوره", tarikh:"1402/07/09", pir:"250000" },
        { src:aks, nameDore:"ری اکت", ostadName:"نام مدرس دوره", tarikh:"1402/07/09", pir:"250000" }
      ]);

  return (
    <>
      <div className="w-[73%] h-full bg-white rounded-xl py-[10px]">
        <div className="flex justify-between w-[95%] mx-auto pb-[20px] border-b-[1px] border-b-black">
          <h2 className="text-xl font-bold"> داشبورد </h2>
          <div className="flex gap-3">
            <img className="w-8  h-7" src={zangoole} alt="" />
            <img className="w-8  h-7" src={sabad} alt="" />
          </div>
        </div>
        <div className='flex py-[5px] w-[95%] mx-auto justify-between mb-[10px]'>
            <div className='flex w-[90%] border-2 border-gray-300 rounded-lg'>
                <img className='w-[3%] h-7 mt-[7px] mx-2 rounded-lg' src={zarebin} alt="" />
                <input className='w-[97%] h-10 rounded-lg' type="search" placeholder='جستجوی دوره ...' />
            </div>
            <div className='flex justify-center gap-[10px] w-[9%] h-10 border-2 border-gray-300 rounded-lg'>
                <div className='my-[5px]'> 4 </div>
                <img className='w-9 h-3 my-[15px]' src={polygon} />
            </div>
        </div>
        <div className='w-[95%] pt-[30px] h-[450px] rounded-xl shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] mx-auto'>
            <div className='flex justify-between leading-[50px] px-5 font-bold text-xl text-white w-[97%] h-[60px] bg-blue-700 rounded-lg mx-auto mb-5'>
                <h2>  تصویر  </h2>
                <h2>  نام دوره  </h2>
                <h2>  مدرس  </h2>
                <h2>  تاریخ شروع  </h2>
                <h2>  قیمت  </h2>
                <h2>  مدیریت  </h2>
            </div>
            <div className='w-[97%] rounded-lg mx-auto'>
                {lists.map((item) => {
                    return(
                        <div className='flex justify-between w-full h-[60px] shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] rounded-lg px-2 mb-5'>
                            <img className='w-[80px] h-[50px] rounded-lg my-[5px]' src={item.src} />
                            <h2 className='leading-[60px] font-semibold text-bace'>{item.nameDore}</h2>
                            <h2 className='leading-[60px] font-semibold text-bace'>{item.ostadName}</h2>
                            <div className='leading-[60px] font-semibold text-bace'>{item.tarikh}</div>
                            <price className='leading-[60px] font-semibold text-bace'>{item.pir}  تومان  </price>
                            <div className='flex my-[15px] h-7 w-[65px] justify-between'>
                                <img className='w-7 h-4 my-2' src={details} />
                                <img className='w-7 h-full' src={dilit} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
            <div className='relative mt-[15px]'>
                <div className='py-[15px] flex justify-between text-xl shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] w-[350px] h-[60px] rounded-xl mx-auto cursor-pointer'>
                    <img className='w-8 h-8' src={right} />
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <img className='w-8 h-8' src={left} />
                </div>
                <button className='flex absolute left-[20px] bottom-[10px] w-[100px] gap-[10px]'> باز گشت
                    <img className='w-7 h-7' src={back} />
                </button>
            </div>
      </div>
    </>
  );
};

export default MyCourses;
