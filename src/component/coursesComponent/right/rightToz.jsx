import wed from '../../../../public/web-security.png';
import like81 from '../../../../public/icons81-like.png';
import { Link, NavLink } from "react-router-dom";

const RightToz = () => {

    // const handle = () => {
    //     console.log(1);
    // }

    return (
    <div>
        <div className="px-10 pb-10 mt-[50px] w-[100%] rounded-xl shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]">
            <div className='flex'>
                <img className='w-[3%] h-[2%] mt-10' src={like81} alt="" />
                <img className='mx-auto w-[600px] h-[600px]' src={wed} alt="" />
            </div>
            <h2 className='font-bold text-xl mb-10'> دوره پیشرفته هک و امنیت </h2>
            <p className='mb-5'> پیش نیاز ها هستند و اگد این پیشنیاز هارو رعایت نکنید ممکنه در مسیر آموزشی تون شکست بخورید !<br/>
                بپرسید شما رو به سمت برنامه نویسی هدایت میکنه و تهیید میکنه که این ها <br/>
                بسیاری از افرادی که هک علاقه مند هستند و غیره
            </p>
            <p className='mb-5'> پیش نیاز ها هستند و اگد این پیشنیاز هارو رعایت نکنید ممکنه در مسیر آموزشی تون شکست بخورید !<br/>
                بپرسید شما رو به سمت برنامه نویسی هدایت میکنه و تهیید میکنه که این ها <br/>
                بسیاری از افرادی که هک علاقه مند هستند و غیره
            </p>
            <p className='mb-5'> پیش نیاز ها هستند و اگد این پیشنیاز هارو رعایت نکنید ممکنه در مسیر آموزشی تون شکست بخورید !<br/>
                بپرسید شما رو به سمت برنامه نویسی هدایت میکنه و تهیید میکنه که این ها <br/>
                بسیاری از افرادی که هک علاقه مند هستند و غیره
            </p>
            <h3 className='mb-5'> 1- برنامه نویسی با دیدگاه یک هکر </h3>
            <h3 className='mb-5'> 2- شبکه با دیدکاه یک هکر </h3>
            <h3 className='mb-12'> 3- لینوکس با دیدگاه یک هکر </h3>
            <h2 className='mb-5'> لینک نرم افزار مورد نیاز </h2>
            <NavLink className="block"> VS code </NavLink>
            <NavLink className="block"> SQL server </NavLink>
        </div>
    </div>
    );
}
 
export default RightToz;