import pic from "../../../assets/01.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faCirclePlay,faStar,faArrowLeft} from '@fortawesome/free-solid-svg-icons'
const Product = () => {
    return ( 
      <div>
      <div className="flex justify-center relative">
        
        < div className="w-72 h-96 bg-gray-100  mr-56"
       > 
       <img src={pic} alt="image" className="h-32 mt-5 mb-4  rounded-lg mr-10"/>
       <div className="flex justify-around mt-2">
       <p className="bg-blue-600 rounded-3xl text-red-50 text-sm w-36 text-center ">ui/ux Design</p>
       <p className="text-blue-400">250,000</p></div>
        <p className="w-60 mr-8 mt-3">پروژه صورت پروژه محور توضیحات سایت اموزش پیشرفته و غیره</p>
        <div className="flex mt-4">
        <FontAwesomeIcon icon={faCirclePlay} className="mr-8 mt-1 text-gray-400" />
        <p className="mr-1 text-sm">24 درس</p>
        </div>
        <div className="w-30 h-0.5 bg-gray-300 mt-3 mb-3"></div> 
        <div className="flex justify-around">
          <div>
          <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
          <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
          </div>
          <FontAwesomeIcon icon={faArrowLeft} className="bg-blue-600 rounded-3xl text-xs mt-0.5 text-white
           border-blue-600 border-8 cursor-pointer" />
        </div>
        </div>
        </div>
        <div className="absoloute bottom-0 h-8 w-32 bg-blue-600 m-auto mt-20 text-center
        text-white rounded-2xl cursor-pointer">مشاهده بیشتر</div></div>
    );
}

export default Product;