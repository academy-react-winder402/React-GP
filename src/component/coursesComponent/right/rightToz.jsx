import wed from '../../../../public/web-security.png';
import like81 from '../../../../public/icons81-like.png';
import { Link, NavLink } from "react-router-dom";

const RightToz = ({imageAddress , googleTitle , googleSchema , describe , miniDescribe , techs , uniqeUrlString}) => {

    // const handle = () => {
    //     console.log(1);
    // }

    return (
    <div>
        <div className='block sm:hidden'>
            <div className="px-10 pb-10 mt-[50px] w-[95%] mx-auto rounded-xl shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]">
                <div className='flex'>
                    <img className='w-[32px] h-[32px] mt-10' src={like81} alt="" />
                    <img className='mx-auto w-[600px] h-[400px]' src={imageAddress} alt="" />
                </div>
                <h2 className='font-bold text-xl mb-10'>{googleTitle}</h2>
                <p className='mb-5 w-[90%] flex-wrap'>{googleSchema}</p>
                <p className='mb-5'>{describe}</p>
                <p className='mb-5'>{miniDescribe}</p>
                <h3 className='mb-5'> 1-{techs} </h3>
                <h3 className='mb-5'></h3>
                <h3 className='mb-12'></h3>
                <h2 className='mb-5'> لینک نرم افزار مورد نیاز </h2>
                <NavLink className="block"> VS code </NavLink>
                <NavLink className="block">{uniqeUrlString}</NavLink>
            </div>
        </div>

        <div className='hidden sm:block md:hidden'>
            <div className="px-10 pb-10 mt-[50px] w-[95%] mx-auto rounded-xl shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]">
                <div className='flex'>
                    <img className='w-[32px] h-[32px] mt-10' src={like81} alt="" />
                    <img className='mx-auto w-[600px] h-[600px]' src={imageAddress} alt="" />
                </div>
                <h2 className='font-bold text-xl mb-10'>{googleTitle}</h2>
                <p className='mb-5 w-[90%] flex-wrap'>{googleSchema}</p>
                <p className='mb-5'>{describe}</p>
                <p className='mb-5'>{miniDescribe}</p>
                <h3 className='mb-5'> 1-{techs} </h3>
                <h3 className='mb-5'></h3>
                <h3 className='mb-12'></h3>
                <h2 className='mb-5'> لینک نرم افزار مورد نیاز </h2>
                <NavLink className="block"> VS code </NavLink>
                <NavLink className="block">{uniqeUrlString}</NavLink>
            </div>
        </div>

        <div className='hidden md:block lg:hidden'>
            <div className="px-10 pb-10 mt-[50px] w-[100%] rounded-xl shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]">
                <div className='flex'>
                    <img className='w-[32px] h-[32px] mt-10' src={like81} alt="" />
                    <img className='mx-auto w-[600px] h-[600px]' src={imageAddress} alt="" />
                </div>
                <h2 className='font-bold text-xl mb-10'>{googleTitle}</h2>
                <p className='mb-5 w-[90%] flex-wrap'>{googleSchema}</p>
                <p className='mb-5'>{describe}</p>
                <p className='mb-5'>{miniDescribe}</p>
                <h3 className='mb-5'> 1-{techs} </h3>
                <h3 className='mb-5'></h3>
                <h3 className='mb-12'></h3>
                <h2 className='mb-5'> لینک نرم افزار مورد نیاز </h2>
                <NavLink className="block"> VS code </NavLink>
                <NavLink className="block">{uniqeUrlString}</NavLink>
            </div>
        </div>

        <div className='hidden lg:block xl:hidden'>
            <div className="px-10 pb-10 mt-[50px] w-[100%] rounded-xl shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]">
                <div className='flex'>
                    <img className='w-[3%] h-[2%] mt-10' src={like81} alt="" />
                    <img className='mx-auto w-[600px] h-[600px]' src={imageAddress} alt="" />
                </div>
                <h2 className='font-bold text-xl mb-10'>{googleTitle}</h2>
                <p className='mb-5 w-[90%] flex-wrap'> {googleSchema} </p>
                <p className='mb-5'> {describe} </p>
                <p className='mb-5'> {miniDescribe} </p>
                <h3 className='mb-5'> 1- برنامه نویسی با دیدگاه یک هکر </h3>
                <h3 className='mb-5'> 2-{techs} </h3>
                <h3 className='mb-12'></h3>
                <h2 className='mb-5'></h2>
                <NavLink className="block"> VS code </NavLink>
                <NavLink className="block"> {uniqeUrlString} </NavLink>
            </div>
        </div>

        <div className='hidden xl:block'>
            <div className="px-10 pb-10 mt-[50px] w-[100%] rounded-xl shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]">
                <div className='flex'>
                    <img className='w-[3%] h-[2%] mt-10' src={like81} alt="" />
                    <img className='mx-auto w-[800px] h-[500px] my-[30px]' src={imageAddress} alt="" />
                </div>
                <h2 className='font-bold text-xl mb-10'> {googleTitle} </h2>
                <p className='mb-5 w-[80%]'> {googleSchema} </p>
                <p className='mb-5 w-[80%]'> {describe} </p>
                <p className='mb-5 w-[80%]'> {miniDescribe} </p>
                <h3 className='mb-5'> 1- {techs} </h3>
                <h3 className='mb-5'>  </h3>
                <h3 className='mb-6'>  </h3>
                <h2 className='mb-5'> لینک نرم افزار مورد نیاز </h2>
                <NavLink className="block"> VS code </NavLink>
                <NavLink className="block"> {uniqeUrlString} </NavLink>
            </div>
        </div>
        
    </div>
    );
}
 
export default RightToz;