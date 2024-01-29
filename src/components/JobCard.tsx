import { FaHandHoldingUsd } from "react-icons/fa";
import Jobstype from "../types/jobstype";
import { FaLocationDot } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import csvjson from "../data/csvjson.json";
import Tooltip from "@mui/material/Tooltip";

const JobCard = (props: Jobstype) => {
  console.log(csvjson);

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[30rem] min-h-[3rem]">
        <a href="#">
          <img
            className="rounded-t-lg h-[25rem] flex items-center justify-center object-cover object-center bg-red-200 w-full"
            src="images/img/bust-mask-1.png"
            alt="img"
          />
        </a>
        <div className="p-5">
          <a href="#" className="flex items-start justify-between">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               {props.job_title}
            </h5>
            <Tooltip title="Medium Size Company">
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                M
              </button>
            </Tooltip>
          </a>
          <p className="mb-1 flex items-center gap-2 font-semibold text-gray-700 dark:text-gray-400">
            <MdCategory /> {props.job_category}
          </p>

          <p className="flex mb-3 items-center gap-2  text-gray-700 dark:text-gray-400 font-normal">
            <span className="text-red-400">*</span>
            <h5 className="text-sm">Employee must be residence of <strong>{props.employee_residence}</strong></h5>
          </p>


          <div className="flex items-start justify-start gap-2 flex-wrap">
          <span
            className="inline-flex items-center px-3 py-1 text-sm font-medium text-center gap-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaLocationDot />
            {props.company_location}
          </span>
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-center gap-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <MdPerson />
            {props.work_setting}
          </span>
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-center gap-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <MdPerson />
            {props.employment_type}
          </span>
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-center gap-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
            <FaHandHoldingUsd />
            $ {props.salary_in_usd}
          </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default JobCard;
