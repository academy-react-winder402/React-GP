import { useEffect, useState } from 'react';
import wed from '../../../../public/concept-of-seo-ranking-2040894 1.png';
import like81 from '../../../../public/icons81-like.png';
import { Link, NavLink, useParams } from "react-router-dom";
import axios from 'axios';

const Rights = ({currentImageAddress , googleTitle , googleDescribe , miniDescribe , describe , keyword }) => {

    return (
    <div>
        <div className="px-10 pb-10 mt-[50px] w-[100%] rounded-xl shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]">
            <div className='flex'>
                <img className='w-[3%] h-[2%] mt-10' src={like81} alt="" />
                <img className='mx-auto w-[600px] h-[500px] my-10' src={currentImageAddress} alt="" />
            </div>
            <h2 className='font-bold text-xl mb-10'>{googleTitle}</h2>
            <p className='mb-5'>{googleDescribe}</p>
            <p className='mb-5'>{miniDescribe}</p>
            <p className='mb-5'>{describe}</p>
            <h3 className='mb-5'>{keyword}</h3>
        </div>
    </div>
    );
}
 
export default Rights;
