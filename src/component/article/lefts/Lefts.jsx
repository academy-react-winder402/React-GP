import pic1 from "../../../../public/user (1) 1.png"
import pic2 from "../../../../public/Vector.png"
import pic3 from "../../../../public/Vecto3r.png"
const Left = () => {
    return (

            <div className="py-[5%] mt-[50px] h-[100px] rounded-xl shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)] pr-4">
                  <div className="flex">  <img src={pic1}  className="pl-2"/>
                    <p> مبینا حسین پور  </p>
                    </div>
                    <div className="flex">  <img src={pic2} className="pl-2"/>
                    <p> 354 </p>
                    </div>
                    <div className="flex">  <img src={pic3} className="pl-2"/>
                    <p> 15 تیر 1400 </p>
                    </div>
        </div>
    );
}
 
export default Left;