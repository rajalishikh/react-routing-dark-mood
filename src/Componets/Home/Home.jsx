import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center relative ">
          {/* main content  */}
            
            <div className="hero  flex flex-col items-center justify-center  ">
              {/* content section  */}
             <div className="hero-content text-center">
    <div className="max-w-md absolute">
      <div>
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
            {/* image content  */}
            <img className="w-full  absolute bottom-0" src={"../../../src/assets/wave (1).svg"} alt="" srcset="" />
            
        </div>
    );
};

export default Home;