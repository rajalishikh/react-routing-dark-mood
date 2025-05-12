import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            
            <div className="hero bg-base-200 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] ">
              {/* content section  */}
             <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-4xl font-bold">Welcome to <span>ByteBlaze</span></h1>
      <p className="py-6">
        It is a website where we can see the most popular technical details 
      </p>
      
      {/* button of website  */}
      <div className="flex gap-2 justify-center">
        {/* link 1  */}
        <Link to={'/Blogs'} class="relative inline-block px-4 py-2 font-medium group">
    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-pink-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
    <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
    <span class="relative text-black group-hover:text-white">Read Blog's</span>
   </Link>
   {/* link 2  */}
   <Link to={'/BookMarks'} class="relative inline-block px-4 py-2 font-medium group">
    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-pink-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
    <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
    <span class="relative text-black group-hover:text-white">Book Marks</span>
   </Link>

      </div>
    </div>
             </div>
</div>
        </div>
    );
};

export default Home;