import { useEffect, useState } from "react";
import profile from '../../../public/Vector profile.png'
import {  NavLink, useLocation } from "react-router-dom";


const Header = () => {
    const [menu , setMenu] = useState('hidden')
    const [bgColor , setBgColor] = useState('')
    const location = useLocation()
    console.log(location);
    const handleClick = () => {
        if(menu === 'hidden'){
            setMenu('block')
        }
        else{
            setMenu('hidden')
        }
    }

    useEffect(()=>{
        if(location.pathname==='/'){
            setBgColor('')
        }
        else{
            setBgColor('bg-blue-600')
        }
    },[location])

    return ( 
        <div className={bgColor}> 
            <div className="block sm:hidden">
                <div className='flex pt-4 h-[70px] bg-blue-600'>
                    <div onClick={handleClick} className="absolute right-[50px]">
                        <img className="bg-blue-500 w-[30px] h-[30px] p-[3px] rounded-md text-center pt-[5px]" src="more.png"/>
                        <div className={menu}>
                            <NavLink to='/register' className="w-[100px] h-[35px] border-b-2 bg-white hover:bg-gray-100"> ورود / ثبت نام </NavLink>
                            <NavLink to='/' className='w-[100px] block h-[35px] border-b-2 bg-white hover:bg-gray-100'> صفحه اصلی </NavLink>
                            <NavLink to='/producta' className='block h-[35px] border-b-2 bg-white hover:bg-gray-100'> دوره </NavLink>
                            <NavLink to='/productb' className='block h-[35px] border-b-2 bg-white hover:bg-gray-100'> مقالات </NavLink>
                            <NavLink className='block h-[35px] border-b-2 bg-white hover:bg-gray-100'> اساتید </NavLink>
                            <NavLink to='/Connecting' className='w-[100px] block h-[35px] border-b-2 bg-white hover:bg-gray-100'> ارتباط با ما </NavLink>
                        </div>
                    </div>
                    <h1 className="mr-[40%]"> BAHR ACADEMY </h1>
                </div> 
            </div>

            <div className='hidden sm:block md:hidden'>
                <div className='flex pt-4 h-[70px] bg-blue-600'>
                    <div onClick={handleClick} className="absolute right-[50px] bg-white">
                        <img className="bg-blue-500 w-[30px] h-[30px] p-[3px] rounded-md" src="more.png"/>
                        <div className={menu}>
                            <NavLink to='/register' className="w-[100px] h-[35px] border-b-2 bg-white hover:bg-gray-100 text-center pt-[5px]"> ورود / ثبت نام </NavLink>
                            <NavLink to='/' className='w-[100px] block h-[35px] border-b-2 bg-white hover:bg-gray-100'> صفحه اصلی </NavLink>
                            <NavLink to='/producta' className='block h-[35px] border-b-2 bg-white hover:bg-gray-100'> دوره </NavLink>
                            <NavLink to='/productb' className='block h-[35px] border-b-2 bg-white hover:bg-gray-100'> مقالات </NavLink>
                            <NavLink className='block h-[35px] border-b-2 bg-white hover:bg-gray-100'> اساتید </NavLink>
                            <NavLink to='/Connecting' className='w-[100px] block h-[35px] border-b-2 bg-white hover:bg-gray-100'> ارتباط با ما </NavLink>
                        </div>
                    </div>
                    <h1 className="mr-[40%]"> BAHR ACADEMY </h1>
                </div>  
            </div>

            <div className='hidden md:block lg:hidden'>
                <div className='flex pt-4 h-[70px] bg-blue-600'>
                    <div className="absolute right-[50px] bg-white">
                        <img onClick={handleClick} className="bg-blue-600 w-[30px] h-[30px] p-[3px]" src="more.png"/>
                        <div className={menu}>
                            <NavLink to='/' className='w-[90px] block border-b-2 bg-white hover:bg-gray-100 h-[35px]'> صفحه اصلی </NavLink>
                            <NavLink to='/producta' className='block border-b-2 bg-white hover:bg-gray-100 h-[35px]'> دوره </NavLink>
                            <NavLink to='/productb' className='block border-b-2 bg-white hover:bg-gray-100 h-[35px]'> مقالات </NavLink>
                            <NavLink className='block border-b-2 bg-white hover:bg-gray-100 h-[35px]'> اساتید </NavLink>
                            <NavLink to='/Connecting' className='w-[90px] block border-b-2 bg-white hover:bg-gray-100 h-[35px]'> ارتباط با ما </NavLink>
                        </div>
                    </div>
                    <h1 className="mr-[40%]"> BAHR ACADEMY </h1>
                    <NavLink to='/register' className="absolute left-[50px] w-[170px] border-2 h-10 bg-blue-700 text-white text-center pt-[5px] rounded-full pb-[5px]"> ورود / ثبت نام </NavLink>
                </div>  
            </div>

            <div className='hidden lg:block xl:hidden'>
                <div className='flex pt-3 h-[70px]'>
                    <h1 className="mr-[4%] absolute z-20 text-white font-semibold text-lg"> BAHR ACADEMY </h1>
                    <div className="flex gap-[20px] mr-[210px] absolute z-20">
                        <NavLink to='/' className='w-[90px] text-white'> صفحه اصلی </NavLink>
                        <NavLink className='text-white' to='/producta'> دوره </NavLink>
                        <NavLink className='text-white'> مقالات </NavLink>
                        <NavLink className='text-white'> اساتید </NavLink>
                        <NavLink className='w-[80px] text-white'> ارتباط با ما </NavLink>
                    </div>
                    <NavLink to='/register' className="absolute left-[50px] w-[160px] border-2 h-10 bg-blue-700 text-white text-center pt-[5px] rounded-full pb-[5px]"> ورود / ثبت نام </NavLink>
                </div>  
            </div>

            <div className='hidden xl:block'>
                <div className='flex pt-3 h-[70px]'>
                    <h1 className="mr-[7%] absolute z-20 text-white font-semibold text-lg"> BAHR ACADEMY </h1>
                    <div className="mr-[250px] absolute z-20">
                        <div className="flex gap-[30px] mr-[50px] ">
                            <NavLink to='/' className='w-[90px] text-white'> صفحه اصلی </NavLink>
                            <NavLink className="text-white" to='/producta'> دوره </NavLink>
                            <NavLink to='/productb' className="text-white"> مقالات </NavLink>
                            <NavLink className="text-white"> اساتید </NavLink>
                            <NavLink className='w-[80px] text-white' to='/Connecting'> ارتباط با ما </NavLink>
                        </div>
                    </div>
                    <div>
                    <NavLink to='/dpanel' className='absolute z-20 left-[100px] bg-blue-600 w-10 h-10 rounded-full pt-[4px] pr-[6px]'>
                        <img className="h-7 w-7" src={profile}/>
                    </NavLink>
                    <NavLink to='/register' className="absolute left-[150px] w-[150px] border-2 h-10 bg-blue-600 text-white text-center pt-[5px] rounded-full pb-[5px]">
                        ورود / ثبت نام 
                    </NavLink>
                    </div>
                </div> 
            </div>

        </div>
     );
}
 
export default Header;
