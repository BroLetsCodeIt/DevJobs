/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import Navbar from "../components/Navbar";
type Props = {};

const Landing = (_props: Props) => {
  return (
    <>
    <Navbar/>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center  h-full">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-8xl text-2xl mb-4 font-medium text-gray-900">
              Unlock Tomorrow's <br className="hidden lg:inline-block" />
              Opportunities Today's
            </h1>
            <p className="mb-8 leading-relaxed text-2xl pl-4">
              Your Data-Driven Path to 2024's Premier Data Science Jobs ! 🚀
            </p>
            <div className="flex justify-center">
              <Link to={'/dashboard'}> 
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                ⚡ Get Jobs Insight
              </button>
              </Link>
              <Link to={'https://github.com/BroLetsCodeIt'} target="_blank">
              <button  className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg items-center gap-3">
                <BsGithub />
                Open Source
              </button>
              </Link>
            </div>
          </div>
          <div className="effect md:w-1/2 bg-green-400 ">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/images/side1.svg"
            />
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
