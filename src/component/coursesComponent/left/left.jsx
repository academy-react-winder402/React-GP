const Left = () => {
    return (
        <div>
            <div className="py-[5%] mt-[50px] h-[200px] rounded-xl shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]">
                <h2 className="font-bold text-xl text-center mb-9"> فرصت بافی مانده تخفیف </h2>
                <div className="flex gap-[2%] justify-center">
                    <div className="w-10 h-10 border-2 border-blue-700 rounded-lg text-center pt-[5px]"> 2 </div>
                    <div className="w-10 h-10 border-2 border-blue-700 rounded-lg text-center pt-[5px]"> 2 </div>
                    <div className="mt-2 font-bold">:</div>
                    <div className="w-10 h-10 border-2 border-blue-700 rounded-lg text-center pt-[5px]"> 2 </div>
                    <div className="w-10 h-10 border-2 border-blue-700 rounded-lg text-center pt-[5px]"> 2 </div>
                    <div className="mt-2 font-bold">:</div>
                    <div className="w-10 h-10 border-2 border-blue-700 rounded-lg text-center pt-[5px]"> 2 </div>
                    <div className="w-10 h-10 border-2 border-blue-700 rounded-lg text-center pt-[5px]"> 1 </div>
                </div>
                <div className="flex gap-[20%] justify-center mt-3">
                    <div>  ثانیه  </div>
                    <div>  دقیقه  </div>
                    <div>  ساعت  </div>
                </div>
            </div>
        </div>
    );
}
 
export default Left;