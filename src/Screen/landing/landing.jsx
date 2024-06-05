import Card from "../../component/landingComponent/card/card";
import Category from "../../component/landingComponent/category/Category";
import MiniSlider from "../../component/landingComponent/miniSlider/miniSlider";
import Pishnahad from "../../component/landingComponent/pishnahad/Pishnahad";
import Prodakt from "../../component/landingComponent/prodakt/prodakt";
import Product from "../../component/landingComponent/products/product";
import Services from "../../component/landingComponent/slider/servis";

const Landing = () => {
  return (
    <>
      <Product />
      <Services />
      <Category />
      <Prodakt />
      <MiniSlider />
      <Card />
      <Pishnahad />
    </>
  );
};

export default Landing;
