import { Outlet } from "react-router-dom";
import Header from "../component/header/Header";
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