import React from "react";

const PostPage = () => {
    return (
        <section className='py-2 px-2 bg-[#D4D4D4] dark:bg-[#171717] shadow-md dark:shadow-[#202020] rounded-lg grid grid-cols-1 md:grid-cols-2 md:gap-x-5 md:gap-y-5 duration-150 ease-in'>
            <div>
                <img
                src="https://techcrunch.com/wp-content/uploads/2023/07/2024-chevrolet-blazer-ev-026.jpg?w=730&crop=1"
                alt="postPicture"
                className="w-[100%] h-[220px] rounded-md object-cover"
                />
            </div>
            <div className="flex flex-col gap-y-2 items-start">
                <h1 className="w-full text-left text-xl mt-2 text-txt_color font-semibold">GM begins shipping a pricier-than-expected Chevy Blazer EV</h1>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-300">Sim Unan <span className="font-normal text-xs text-slate-600 dark:text-slate-400">08-01-2023 11:58am</span></p>
                <p className="w-full text-left text-sm break-words text-txt_desc_color "> The Chevrolet Blazer EV, a battery electric SUV that is part of GM’s bid to surpass Tesla in U.S. EV sales by 2025, is headed to dealerships.
                    The automaker said Monday that the first 2024 Chevro...
                </p>
            </div>
        </section>
    );
};

export default PostPage;
