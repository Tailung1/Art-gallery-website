import { Link } from "react-router-dom";
// import { useTheme } from "../useProvider";

export default function Location() {
  // const {theme,toggleTheme}=useTheme()
  return (
    <div className='flex flex-col justify-center items-center  h-full'>
      {/* <button onClick={toggleTheme}>Chnage Theme</button> */}
      <div className="bg-[url('/mobile/image-map.png')]  bg-no-repeat  bg-contain bg-center relative h-[550px] w-full md:bg-[url('/tablet/image-map.png')]">
        <div className='flex h-[72px] md:absolute  md:left-8'>
          <Link
            to={"/"}
            className='bg-[rgb(213,150,108)]  w-[56px] h-[72px] flex items-center justify-center '
          >
            <img src='/icon-arrow-left.svg' alt='arrow icon' />
          </Link>
          <div className=' bg-[#151515] py-6  px-8 '>
            {/* ${theme === "light" ? "text-white" : "text-red-600"} */}
            <p className='text-base  text-white  font-[800] tracking-[3.636px]'>
              BACK TO HOME
            </p>
          </div>
        </div>
        {/* <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47657.42798967404!2d44.77831982888169!3d41.70780209601902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044732b601ac833%3A0xff4b936dbf9dcb49!2sTbilisi%20Zoo!5e0!3m2!1sen!2sge!4v1744336044434!5m2!1sen!2sge'
          className='w-full h-full'
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe> */}
      </div>
      <div className='bg-[#151515] pt-12 pb-14 px-4 md:flex md:gap-[68px] md:px-[40px]'>
        <h1 className='text-[35px] mb-12 font-[900] leading-10 uppercase text-white'>
          OUR LOCATION
        </h1>
        <div className='flex flex-col gap-5 '>
          <h2 className='text-[25px] font-[900] leading-6 uppercase text-[#D5966C]'>
            99 King Street
          </h2>
          <div className='text-white text-base font-[400] leading-[28px]'>
            <p>Newport</p>
            <p>RI 02840</p>
            <p> United States of America</p>
          </div>
          <p className='text-white text-base font-[400] leading-[28px]'>
            Our newly opened gallery is located near the Edward King
            House on 99 King Street, the Modern Art Gallery is free to
            all visitors and open seven days a week from 8am to 9pm.
          </p>
        </div>
      </div>
    </div>
  );
}
