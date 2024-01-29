/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Jobstype from "../types/jobstype";
import csvjson from "../data/csvjson.json";
import clsx from "clsx";
import JobCard from "../components/JobCard";
import { fetchData } from "../utils/fetchData";
import { useQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useRef, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { LoadingPosts } from "../components/LoadJobs";
import useLazyLoad from "../components/LazyLoad";
import { Link } from "react-router-dom";

const NUM_PER_PAGE: number = 6;
const TOTAL_PAGES: number = csvjson.jobs.length;

const Dashboard = () => {
  // const {isLoading , isError  , data} = useQuery<Jobstype[]>({
  //   queryKey:['jobsData'],
  //   queryFn:() =>{
  //     return fetchData();
  //   }
  // })
  // console.log(fetchData());
  // console.log(csvjson);
  // console.log("data",data);

  // if(isLoading){
  //   return(
  //     <h1>Loading...</h1>
  //   )
  // }

  // if(isError){
  //   return(
  //     <>error</>
  //   )
  // }

  const images = csvjson["jobs"];
  const triggerRef = useRef(null);

  const onGrabData = (currentPage: number) => {
    // This would be where you'll call your API
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = images.slice(
          ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
          NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
        );
        console.log(data);
        resolve(data);
      }, 3000);
    });
  };
  const { data, loading } = useLazyLoad({ triggerRef, onGrabData });

  // const [jobs , setJobs ] = useState<Jobstype[]>(csvjson);

  // console.log(jobs);

  return (
    <>
      <div className="container mx-auto w-full ">
        <Link to={'/'}>Back</Link>
        <div className="container mx-auto  w-full ps-3 my-4 ">
          <form>
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="container mx-auto w-full flex flex-wrap justify-center gap-[10rem]">
          {data.map((dt: Jobstype, i: number) => {
            return (
              <>
                <JobCard key={i} {...dt} />
              </>
            );
          })}
        </div>
        <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
          <LoadingPosts />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
