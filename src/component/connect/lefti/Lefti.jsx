const Righti = () => {
    return (
      <div className="w-1/2 text-center mx-auto">
        <form className="flex flex-col items-center mt-9 mb-9">
          <div className="flex space-x-6 mb-6">
            <div>
              <h3>نام و نام خانوادگی</h3>
              <input
                type="text"
                name=""
                value=""
                placeholder="به فارسی"
                className="border-2 rounded border-gray-200 w-44 ml-4"
              />
            </div>
            <div>
              <h3>ایمیل</h3>
              <input
                type="text"
                name=""
                value=""
                placeholder="مانند:person@gmail.com"
                className="border-2 rounded border-gray-200 w-46"
              />
            </div>
          </div>
          <div className="mb-6">
            <h3>شماره همراه</h3>
            <input
              type="text"
              name=""
              value=""
              placeholder="مانند:09347654345"
              className="border-2 rounded border-gray-200 w-96"
            />
          </div>
          <div className="mb-6">
            <h3>موضوع</h3>
            <input
              type="text"
              name=""
              value=""
              className="border-2 rounded border-gray-200 w-96"
            />
          </div>
          <div className="mb-6">
            <h3>متن پیام</h3>
            <input
              type="text"
              name=""
              value=""
              className="border-2 rounded border-gray-200 w-96"
            />
          </div>
          <button className="rounded bg-blue-600 text-white p-2 w-96">ارسال پیام</button>
        </form>
      </div>
    );
  };
  
  export default Righti;
  