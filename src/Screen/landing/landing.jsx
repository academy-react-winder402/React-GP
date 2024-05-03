import MiniSlider from "../../component/landingComponent/miniSlider/miniSlider";
import Product from "../../component/landingComponent/products/product";
import Services from "../../component/landingComponent/slider/Slider";

const Landing = () => {
    return ( 
        <>
            <Product />
            <Services />
            <MiniSlider/>
        </>
     );
}
 
export default Landing;