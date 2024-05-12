import group117 from '../../../../../public/Group117.png'
import polygon2 from '../../../../../public/Polygon2.png'
import import1 from '../../../../../public/import1.png'
import lock2 from '../../../../../public/lock 2.png'


const FirstRight = () => {
    return (
        <div>
            <div className="px-10 py-10 mt-[50px] h-[800px] w-[100%] rounded-xl shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)]">
                <h2 className="font-bold text-xl mb-10" > ویدیو ها </h2>
                <div className='relative w-[650px] h-[330px] mx-auto'>
                    <img className='w-full h-full' src={group117}/>
                    <button className='rounded-full w-[61px] h-[60px] absolute z-40 top-[135px] right-[45%] bg-blue-600'>
                        <img className='my-auto mr-3 w-8 h-8' src={polygon2}/>
                    </button>
                </div>

                <div className='border-b-2 border-blue-600 w-[90%] h-14 mx-auto mt-16 flex'>
                    <div className='w-[80%] flex gap-5'>
                        <div className='w-10 h-10 border-2 border-gray-400 text-xl px-3 py-1 rounded-md'> 1 </div>
                        <h2 className='text-xl w-[70%] mt-3'> ویدیو اول : آشنایی با ری اکت </h2>
                    </div>
                    <div className='w-[20%] flex justify-end gap-5'>
                        <div className='pt-5 text-xs'> 00:13:00 </div>
                        <img className='w-8 h-8 mt-3' src={import1}/>
                    </div>
                </div>

                <div className='border-b-2 border-blue-600 w-[90%] h-14 mx-auto mt-8 flex'>
                    <div className='w-[80%] flex gap-5'>
                        <div className='w-10 h-10 border-2 border-gray-400 text-xl px-3 py-1 rounded-md'> 1 </div>
                        <h2 className='text-xl mt-3'> ویدیو دوم : دانلود و نصب نرم افزار ها </h2>
                        <img className='w-8 h-8 mt-3' src={lock2}/>
                    </div>
                    <div className='w-[20%] flex justify-end gap-5'>
                        <div className='pt-5 text-xs'> 00:08:00 </div>
                        <img className='w-8 h-8 mt-3' src={import1}/>
                    </div>
                </div>

                <div className='border-b-2 border-blue-600 w-[90%] h-14 mx-auto mt-8 flex'>
                    <div className='w-[80%] flex gap-5'>
                        <div className='w-10 h-10 border-2 border-gray-400 text-xl px-3 py-1 rounded-md'> 1 </div>
                        <h2 className='text-xl mt-3'> ویدیو سوم : ایجاد پروژه </h2>
                        <img className='w-8 h-8 mt-3' src={lock2}/>
                    </div>
                    <div className='w-[20%] flex justify-end gap-5'>
                        <div className='pt-5 text-xs'> 00:12:00 </div>
                        <img className='w-8 h-8 mt-3' src={import1}/>
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default FirstRight;