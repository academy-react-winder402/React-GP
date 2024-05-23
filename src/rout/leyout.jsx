import { Outlet } from "react-router-dom";
import Header from "../component/header/Header";

const Leyout = () => {
    return ( <>
        
        <Header />
        
        <Outlet />
        </>
    );
}

export default Leyout;