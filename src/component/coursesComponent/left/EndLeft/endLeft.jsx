import image1 from '../../../../../public/Ellipse 15.png';
import image2 from '../../../../../public/telegram-alt 1.png';
import image3 from '../../../../../public/instagram 1.png';
import image4 from '../../../../../public/copy 1.png';
import image5 from '../../../../../public/angle-down.png';
import { NavLink } from 'react-router-dom';

const EndLeft = () => {
    return (
        <div>
            <div className="h-[150px] mt-[50px] rounded-xl shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]">
                <h2 className='text-xl font-bold text-center mb-4'> درباره استاد </h2>
                <div className='flex justify-center'>
                    <img className='w-20 h-20 ml-[5%]' src={image1}/>
                    <p className='ml-[25%] mt-6'> مبینا حسین پور</p>
                    <img className='w-8 h-8 mt-6' src={image5}/>
                </div>
            </div>
            <div className="h-[50px] mt-[50px] rounded-xl shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)] flex gap-3 justify-end px-3">
                <NavLink>
                    <img className='w-8 h-8 mt-2' src={image4}/>
                </NavLink>
                <NavLink>
                    <img className='w-8 h-8 mt-2' src={image3}/>
                </NavLink>
                <NavLink>
                    <img className='w-8 h-8 mt-2' src={image2}/>
                </NavLink>
            </div>
        </div>
    );
}
 
export default EndLeft;