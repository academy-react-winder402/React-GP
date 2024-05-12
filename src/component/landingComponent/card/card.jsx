import { useState } from "react";
import elipse1 from '../../../../public/Ellipse13.png';
import elipse2 from '../../../../public/Ellipse14.png';
import elipse3 from '../../../../public/Ellipse 15.png';

const Card = () => {

    const [slid , setSlid] = useState([
        { src:elipse3, fName:'متن تست', lName:'ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین' },
        { src:elipse2, fName:'متن تست', lName:'ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین' },
        { src:elipse1, fName:'متن تست', lName:'ایده ای که با نام لورم ایپسوم شناخته می شور اشپسوم یا طرح نما و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اگر شما یک طراح هستین' },
    ])

    return (
        <div>
            <div className='hidden xl:block'>
                <div className="text-3xl font-bold text-center mt-[50px] mb-[150px]"> اساتید دوره </div>
                <div className="mx-auto w-[1020px] justify-center mt-[50px] flex gap-[30px] mb-[150px]">
                    {slid.map((item) => {
                        return(
                            <div className="shadow-[0px_0px_7px_2px_rgba(0,0,0,0.2)] py-[20px] rounded-3xl w-[310px]">
                                <img className="mb-[40px] mt-[-80px] w-[130px] h-[130px] mx-auto" src={item.src}/>
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
 
export default Card;