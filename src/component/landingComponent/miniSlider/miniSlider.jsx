import { useState } from 'react';
import intersect from '../../../../public/Intersect.png';
import intersect1 from '../../../../public/Intersect1.png';
import intersect2 from '../../../../public/Intersect2.png';

const MiniSlider = () => {

    const [slid , setSlid] = useState([
        { src:intersect, fName:'متن تست', lName:'ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین' },
        { src:intersect1, fName:'متن تست', lName:'ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین' },
        { src:intersect2, fName:'متن تست', lName:'ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین' },
    ])

    return (
        <div>

            <div className='hidden xl:block'>
                <div className="text-3xl font-bold text-center mt-[50px]"> برترین مقالات </div>
                <div className="h-[330px] mt-[50px] flex justify-center gap-[30px] mb-[200px]">
                    {slid.map((item) => {
                        return(
                            <div className="shadow-[0px_0px_7px_2px_rgba(0,0,0,0.2)] py-[20px] rounded-3xl w-[310px] bg-slate-50">
                                <img className="w-[270px] h-[170px]  mx-auto" src={item.src}/>
                                <h2 className="text-center"> {item.fName} </h2>
                                <p className="text-center"> {item.lName} </p>
                            </div>
                        )
                    })}
                </div>
            </div>





        </div>
    );
}
 
export default MiniSlider;