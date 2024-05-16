import { Outlet } from "react-router-dom";
import Header from "../component/header/Header";
import Category from "../component/landingComponent/category/Category";
import Pishnahad from "../component/landingComponent/pishnahad/Pishnahad";
import Footer from "../component/footer/footer";

const Leyout = () => {
    return ( 
        <>
            <Header />     
            <Outlet />
            <Footer />
        </>
    );
}

export default Leyout;