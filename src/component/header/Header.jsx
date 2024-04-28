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
                <div className='flex pt-3 border-4 h-[70px]'>

                    <div className="absolute border-2 right-[50px]  ">
                        <img onClick={handleClick} className="w-[30px] h-[30px]" src="more.png"/>
                        <div className={menu}>
                            <button className="  w-[170px] border-2 h-10 bg-blue-700 text-white rounded-full pb-[5px]"> ورود / ثبت نام </button>
                            <NavLink to='/' className='w-[100px] block'> صفحه اصلی </NavLink>
                            <NavLink to='/courses' className='block'> دوره </NavLink>
                            <NavLink className='block'> مقالات </NavLink>
                            <NavLink className='block'> اساتید </NavLink>
                            <NavLink className='w-[100px] block'> ارتباط با ما </NavLink>
                        </div>
                    </div>

                    <h1 className="mr-[40%]"> BAHR ACADEMY </h1>



                </div> 
            </div>




            <div className='hidden sm:block md:hidden'>
                <div className='flex pt-3 border-4 h-[70px]'>

                    <div className="absolute border-2 right-[50px]  ">
                        <img onClick={handleClick} className="w-[30px] h-[30px]" src="more.png"/>
                        <div className={menu}>
                            <button className="  w-[170px] border-2 h-10 bg-blue-700 text-white rounded-full pb-[5px]"> ورود / ثبت نام </button>
                            <NavLink to='/' className='w-[100px] block'> صفحه اصلی </NavLink>
                            <NavLink to='/courses' className='block'> دوره </NavLink>
                            <NavLink className='block'> مقالات </NavLink>
                            <NavLink className='block'> اساتید </NavLink>
                            <NavLink className='w-[100px] block'> ارتباط با ما </NavLink>
                        </div>
                    </div>

                    <h1 className="mr-[40%]"> BAHR ACADEMY </h1>



                </div>  
            </div>




            <div className='mx-auto hidden md:block lg:hidden'>
                <div className='flex pt-3 border-4 h-[70px]'>

                    <div className="absolute border-2 right-[50px]  ">
                        <img onClick={handleClick} className="w-[30px] h-[30px]" src="more.png"/>
                        <div className={menu}>
                            <NavLink to='/' className='w-[100px] block'> صفحه اصلی </NavLink>
                            <NavLink to='/courses' className='block'> دوره </NavLink>
                            <NavLink className='block'> مقالات </NavLink>
                            <NavLink className='block'> اساتید </NavLink>
                            <NavLink className='w-[100px] block'> ارتباط با ما </NavLink>
                        </div>
                    </div>

                    <h1 className="mr-[40%]"> BAHR ACADEMY </h1>


                    <button className="absolute left-[50px] w-[170px] border-2 h-10 bg-blue-700 text-white rounded-full pb-[5px]"> ورود / ثبت نام </button>
                    
                </div>  
            </div>




        <div className='hidden lg:block xl:hidden'>
                <div className='flex pt-3 border-4 h-[70px]'>
                    <h1 className="mr-[4%]"> BAHR ACADEMY </h1>

                    <div className="flex gap-10 border-2 mr-[100px] ">
                        <NavLink to='/' className='w-[100px]'> صفحه اصلی </NavLink>
                        <NavLink to='/courses'> دوره </NavLink>
                        <NavLink> مقالات </NavLink>
                        <NavLink> اساتید </NavLink>
                        <NavLink className='w-[100px]'> ارتباط با ما </NavLink>
                    </div>

                    <button className="absolute left-[50px] w-[170px] border-2 h-10 bg-blue-700 text-white rounded-full pb-[5px]"> ورود / ثبت نام </button>
                    
                </div>  
        </div>





            <div className='hidden xl:block'>
                <div className='flex pt-3 border-4 h-[70px]'>
                    <h1 className="mr-[7%]"> BAHR ACADEMY </h1>

                    <div className="flex gap-10 border-2 mr-[100px] ">
                        <NavLink to='/' className='w-[100px]'> صفحه اصلی </NavLink>
                        <NavLink to='/courses'> دوره </NavLink>
                        <NavLink> مقالات </NavLink>
                        <NavLink> اساتید </NavLink>
                        <NavLink className='w-[100px]'> ارتباط با ما </NavLink>
                    </div>

                    <button className="absolute left-[100px] w-[200px] border-2 h-10 bg-blue-700 text-white rounded-full pb-[5px]"> ورود / ثبت نام </button>
                    
                </div>               
            </div>

         </div>
     );
}
 
export default Header;