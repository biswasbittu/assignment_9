import React from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Jobs = ({ jobs,handleJobDetails }) => {
  // console.log(jobs.jobType);

  const {id, companyLogoUrl, companyName, jobTitle, location, salary, jobType } =
    jobs;
  // console.log(id);
  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <div className="px-4">
          <img className="w-64 lg:w-96"  src={companyLogoUrl} alt="Shoes" />
        </div>

        <div className="card-body">
          <h2 className="card-title">
            {jobTitle}
            <div className="card-actions justify-end">
              <div className="btn btn-sm">{jobType[0]}</div>
              <div className="btn btn-sm">{jobType[1]}</div>
            </div>
          </h2>
          <p>{companyName}</p>
          <div className="flex gap-4">
            <div className="flex  items-center gap-2">
              <MapPinIcon className="h-4  text-black" />
              <h1>{location}</h1>
            </div>

            <h2>sallary:{salary}</h2>
          </div>
          <div className="">
            <Link to="/jobdetails" className="btn" onClick={()=>handleJobDetails(jobs)}>View Details</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Jobs;
