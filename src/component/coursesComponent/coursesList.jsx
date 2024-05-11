import Product from "../landingComponent/products/product";
import EndLeft from "./left/EndLeft/endLeft";
import FirstLeft from "./left/fistLeft/firstLeft";
import Left from "./left/left";
import FirstRight from "./right/firstRight/firstRight";
import Nazarat from "./right/nazarat/nazarat";
import RightToz from "./right/rightToz";

const CoursesList = () => {
    return ( 
        <div>
            <div className='hidden xl:block'></div>
                <Product />
                <h1 className="font-bold text-2xl mr-14"> دوره پیشرفته هک و امنیت </h1>
                <div className="mx-auto flex gap-14 justify-center">
                    <div className="w-[65%] min-h-[1000px]">
                        <RightToz/>
                        <FirstRight/>
                        <Nazarat/>
                    </div>
                    <div className="w-[25%] min-h-[3000px]">
                        <Left/>
                        <FirstLeft/>
                        <EndLeft/>
                    </div>
                </div>
        </div>
     );
}
 
export default CoursesList;