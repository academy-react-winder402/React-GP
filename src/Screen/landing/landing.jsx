import Card from "../../component/landingComponent/card/card";
import MiniSlider from "../../component/landingComponent/miniSlider/miniSlider";
import Product from "../../component/landingComponent/products/product";
import Services from "../../component/landingComponent/slider/servis";

const Landing = () => {
    return ( 
        <>
            <Product />
            <Services />
            <MiniSlider />
            <Card />
        </>
     );
}
 
export default Landing;