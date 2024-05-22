 import './footer.css';
const Footer = () => {
    return (
        <div className='flex'>
        
       <div className='bg-blue-600 w-1/4 text-center text-white curved-top-left rounded-2xl h-52 p-9'>
       <h1 className='text-2xl'>BAHR ACADEMY</h1>
                <h5 className='text-lg'>your video in this page</h5>
                <h3 className='text-xl font-semibold'>ارتباط با ما</h3>
                <h6 className='text-base'>ادرس:ساری بلوار ازادی</h6>
                <h6 className='text-base'>تماس با ما:23930944</h6>
                <h6 className='text-base'>درباره ما:74547468</h6>
       </div>
       <embed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.2457683392463!2d51.375501199999995!3d35.7447636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0710d5918403%3A0x74f5290b67841378!2sMilad%20Tower!5e0!3m2!1sen!2s!4v1716327073587!5m2!1sen!2s" 
     className="w-3/4 curved-bottom-right rounded-3xl"
     ></embed>
        </div>
    );
}
 
export default Footer;