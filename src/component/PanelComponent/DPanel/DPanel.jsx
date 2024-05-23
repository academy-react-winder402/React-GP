import { useState } from 'react';
import zangoole from '../../../../public/PanelDaneshJoo/icons8-bell-50.png'
import sabad from '../../../../public/PanelDaneshJoo/icons8-cart-64.png'
import aks from '../../../../public/PanelDaneshJoo/react.png'
import Dashboard from '../Dashboard/Dashboard';
import CourseReserve from '../CourseReserve/CourseReserve';
import profileAks from '../../../../public/PanelDaneshJoo/Mask Group 60.png'
import img1 from '../../../../public/PanelDaneshJoo/icons8-dashboard-layout-48.png'
import img2 from '../../../../public/PanelDaneshJoo/.png'
import img3 from '../../../../public/PanelDaneshJoo/.png'
import img4 from '../../../../public/PanelDaneshJoo/.png'
import img5 from '../../../../public/PanelDaneshJoo/.png'
import img6 from '../../../../public/PanelDaneshJoo/.png'
import img7 from '../../../../public/PanelDaneshJoo/.png'


const DPanel = () => {

    const [Count, setCount] = useState(1);

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
        <div  style={{ height: windowHeight}}>
            <div className='hidden xl:block h-full w-full pt-[1.5%] bg-blue-200'>
                <div className="h-[97%] w-[97%] flex justify-between rounded-xl mx-auto">
                    <div className="w-[25%] h-full bg-blue-600 rounded-xl">
                        <div>
                            <img className='w-[150px] h-[150px] mx-auto mt-[50px]' src={profileAks} />
                            <h2 className='font-semibold text-xl flex justify-center mt-[10px] text-white'>  بیتا قنبری  </h2>
                        </div>
                        <div className=' border-t-[1px] border-t-white mt-[20px] w-[90%] mx-auto'>
                            <div>
                                <img src="" alt="" />
                                <h2></h2>
                            </div>
                        </div>


                    </div>
                    {Count === 1 && <Dashboard/>}
                    
                </div>
            </div>

       </div> 
    );
}
 
export default DPanel;