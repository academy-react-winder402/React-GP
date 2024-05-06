import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [menu , setMenu] = useState('hidden')

    const handleClick = () => {
        if(menu === 'hidden'){
            setMenu('block')
        }
        else{
            setMenu('hidden')
        }
    }

    return ( 
        <div> 
            <div className="block sm:hidden">
                <div className='flex pt-4 h-[70px]'>
                <div onClick={handleClick} className="absolute right-[50px]">
                        <img className="bg-blue-500 w-[30px] h-[30px] p-[3px] rounded-md text-center pt-[5px]" src="more.png"/>
                        <div className={menu}>
                            <NavLink className="w-[100px] h-[35px] border-b-2 bg-white hover:bg-gray-100"> ورود / ثبت نام </NavLink>
                            <NavLink to='/' className='w-[100px] block h-[35px] border-b-2 bg-white hover:bg-gray-100'> صفحه اصلی </NavLink>
                            <NavLink to='/courses' className='block h-[35px] border-b-2 bg-white hover:bg-gray-100'> دوره </NavLink>
                            <NavLink className='block h-[35px] border-b-2 bg-white hover:bg-gray-100'> مقالات </NavLink>
                            <NavLink className='block h-[35px] border-b-2 bg-white hover:bg-gray-100'> اساتید </NavLink>
                            <NavLink className='w-[100px] block h-[35px] border-b-2 bg-white hover:bg-gray-100'> ارتباط با ما </NavLink>
                        </div>
                    </div>
                    <h1 className="mr-[40%]"> BAHR ACADEMY </h1>
                </div> 
            </div>

            <div className='hidden sm:block md:hidden'>
                <div className='flex pt-4 h-[70px]'>
                    <div onClick={handleClick} className="absolute right-[50px] bg-white">
                        <img className="bg-blue-500 w-[30px] h-[30px] p-[3px] rounded-md" src="more.png"/>
                        <div className={menu}>
                            <NavLink className="w-[100px] h-[35px] border-b-2 bg-white hover:bg-gray-100 text-center pt-[5px]"> ورود / ثبت نام </NavLink>
                            <NavLink to='/' className='w-[100px] block h-[35px] border-b-2 bg-white hover:bg-gray-100'> صفحه اصلی </NavLink>
                            <NavLink to='/courses' className='block h-[35px] border-b-2 bg-white hover:bg-gray-100'> دوره </NavLink>
                            <NavLink className='block h-[35px] border-b-2 bg-white hover:bg-gray-100'> مقالات </NavLink>
                            <NavLink className='block h-[35px] border-b-2 bg-white hover:bg-gray-100'> اساتید </NavLink>
                            <NavLink className='w-[100px] block h-[35px] border-b-2 bg-white hover:bg-gray-100'> ارتباط با ما </NavLink>
                        </div>
                    </div>
                    <h1 className="mr-[40%]"> BAHR ACADEMY </h1>
                </div>  
            </div>

            <div className='hidden md:block lg:hidden'>
                <div className='flex pt-4 h-[70px]'>
                    <div className="absolute right-[50px] bg-white">
                        <img onClick={handleClick} className="bg-blue-500  w-[30px] h-[30px] p-[3px] rounded-md" src="more.png"/>
                        <div className={menu}>
                            <NavLink to='/' className='w-[90px] block border-b-2 bg-white hover:bg-gray-100 h-[35px]'> صفحه اصلی </NavLink>
                            <NavLink to='/courses' className='block border-b-2 bg-white hover:bg-gray-100 h-[35px]'> دوره </NavLink>
                            <NavLink className='block border-b-2 bg-white hover:bg-gray-100 h-[35px]'> مقالات </NavLink>
                            <NavLink className='block border-b-2 bg-white hover:bg-gray-100 h-[35px]'> اساتید </NavLink>
                            <NavLink className='w-[90px] block border-b-2 bg-white hover:bg-gray-100 h-[35px]'> ارتباط با ما </NavLink>
                        </div>
                    </div>
                    <h1 className="mr-[40%]"> BAHR ACADEMY </h1>
                    <NavLink className="absolute left-[50px] w-[170px] border-2 h-10 bg-blue-700 text-white text-center pt-[5px] rounded-full pb-[5px]"> ورود / ثبت نام </NavLink>
                </div>  
            </div>

            <div className='hidden lg:block xl:hidden'>
                <div className='flex pt-3 h-[70px]'>
                    <h1 className="mr-[4%]"> BAHR ACADEMY </h1>
                    <div className="flex gap-[30px] mr-[50px] ">
                        <NavLink to='/' className='w-[90px]'> صفحه اصلی </NavLink>
                        <NavLink to='/courses'> دوره </NavLink>
                        <NavLink> مقالات </NavLink>
                        <NavLink> اساتید </NavLink>
                        <NavLink className='w-[80px]'> ارتباط با ما </NavLink>
                    </div>
                    <NavLink className="absolute left-[50px] w-[160px] border-2 h-10 bg-blue-700 text-white text-center pt-[5px] rounded-full pb-[5px]"> ورود / ثبت نام </NavLink>
                </div>  
            </div>

            <div className=' hidden xl:block'>
                <div className='flex pt-3 h-[70px]'>
                    <h1 className="mr-[7%] absolute z-20 text-white font-semibold text-lg"> BAHR ACADEMY </h1>
                    <div className="mr-[250px] absolute z-20">
                        <div className="flex gap-[30px] mr-[50px] ">
                            <NavLink to='/' className='w-[90px] text-white'> صفحه اصلی </NavLink>
                            <NavLink className="text-white" to='/courses'> دوره </NavLink>
                            <NavLink className="text-white"> مقالات </NavLink>
                            <NavLink className="text-white"> اساتید </NavLink>
                            <NavLink className='w-[80px] text-white'> ارتباط با ما </NavLink>
                        </div>
                    </div>
                    <NavLink to='/login' className="absolute left-[100px] w-[150px] border-2 h-10 bg-blue-700 text-white text-center pt-[5px] rounded-full pb-[5px]"> 
                    ورود / ثبت نام 
                    </NavLink>
                </div>    
            </div>

         </div>
     );
}
 
export default Header;