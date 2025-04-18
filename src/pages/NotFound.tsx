import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center'>
      <h1 className='text-6xl font-bold text-red-600 mb-4'>404</h1>
      <p className='text-xl md:text-2xl text-gray-800 mb-6'>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to='/'
        className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
