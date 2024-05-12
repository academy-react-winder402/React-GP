import {Fragment} from "react";
import picc from "../../../assets/lnd-removebg-preview.png"

const Pishnahad = () => {
    return ( 
        <div className="flex justify-center mt-20">
        <Fragment>
            <form>
            <input type="text" placeholder="نام و نام خانوادگی" className="block bg-gray-100 h-8 rounded-lg
            border-b-2 border-gray-400 mb-6">
            </input>
            <input type="text " placeholder="ایمیل" className="block  bg-gray-100 h-8 rounded-lg
            border-b-2 border-gray-400 mb-6"></input>
            <input type="text" placeholder="متن..." className="block  bg-gray-100 h-28 rounded-lg
            border-b-2 border-gray-400"></input>
            <button type="submit" className="block bg-blue-800 rounded-lg w-16 text-white mt-8 m-auto">ثبت</button>
        </form>
        </Fragment>
        <img src = {picc}alt = "img" />
        </div>
    )
}

export default Pishnahad;