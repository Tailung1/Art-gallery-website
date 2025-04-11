// import { useTheme } from "../useProvider"

export default function Home() {
  // const { toggleTheme } = useTheme();
  return (
    <div>
      {/* <button onClick={toggleTheme}>Change Theme</button>
        <h1 className="text-red-700 dark:text-blue-700">Title</h1> */}
      <div className='w-[990px] relative  h-[799px] flex'>
        <div className='bg-black w-[450px]'>asaxs</div>
        <img src='/desktop/image-hero@2x.jpg' alt='' />
        <p
          className='text-[70px] absolute left-[165px] top-[189px] font-[900] leading-[88px] '
          style={{
            background:
              "linear-gradient(to right, white 0%, white 45%, black 55%,)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <span className='block'>MODERN</span> ART GAL
          <span className='text-black'>LERY</span>
        </p>
      </div>
    </div>
  );
}
