import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import JobDetails from "../JobDetails/JobDetails";

import Jobs from "../Jobs/Jobs";



const Home = () => {
    const jobDatas=useLoaderData()
    // console.log(jobDatas)
    const [job,setJob]=useState([]);
    const handleJobDetails=jobDetails=>{
    //  const NewDetails=[...job,jobDetails];
    //  setJob(NewDetails)
    console.log(jobDetails)
    setJob(jobDetails)
    
    // <JobDetails key={jobDetails.id} jobDetails={jobDetails}></JobDetails>
    }

  return (
    <div  className="container mx-auto">
      <div className=" flex flex-col items-center justify-between lg:flex-row">
        {/* Details  */}
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            One Step Closer To Your{" "}
            <span className=" text-transparent    bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-600  ">
              DreamJob
            </span>
          </h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <div>
            <button className="btn btn-active bg-gradient-to-r from-indigo-400  to-indigo-500">
              <Link to="/">Get Started</Link>
            </button>
          </div>
        </div>
        <div className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
            <img src="http://surl.li/ghbol" alt="" />
          </div>
        </div>
      </div>

      {/* Catagory section */}
      <div className="lg:mt-10 mt-11 ">
        <div>
          <h1 className="font-extrabold text-2xl text-center">
            Job Category List
          </h1>
          <p className="text-center">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="lg:flex items-center justify-between mt-8  mx-auto  lg:mx-auto">
        <div className="card w-64 bg-base-100 shadow-xl">
       
          <div className="ml-8">
          <img className="w-12"
            src="https://cdn-icons-png.flaticon.com/512/4772/4772869.png"
            alt=""
          />
          </div>
       
        <div className="card-body">
          <h2 className="card-title">Account & Finance</h2>
          <p>300 Jobs Available</p>
          
        </div>
      </div>
        <div className="card w-64 bg-base-100 shadow-xl">
       
          <div className="ml-8">
          <img className="w-12"
            src="https://cdn-icons-png.flaticon.com/512/551/551131.png"
            alt=""
          />
          </div>
       
        <div className="card-body">
          <h2 className="card-title">Creative Design</h2>
          <p>100+ Jobs Available</p>
          
        </div>
      </div>
        <div className="card w-64 bg-base-100 shadow-xl">
       
          <div className="ml-8">
          <img className="w-12"
            src="https://cdn-icons-png.flaticon.com/512/775/775732.png"
            alt=""
          />
          </div>
       
        <div className="card-body">
          <h2 className="card-title">Marketing & Sales</h2>
          <p>150 Jobs Available</p>
          
        </div>
      </div>
        <div className="card w-64 bg-base-100 shadow-xl">
       
          <div className="ml-8">
          <img className="w-12"
            src="https://i.pinimg.com/originals/dd/db/ea/dddbea5fe274061fa420385210b90987.png"
            alt=""
          />
          </div>
       
        <div className="card-body">
          <h2 className="card-title">Engineering Job</h2>
          <p>224 Jobs Available</p>
          
        </div>
      </div>
        </div>

      </div>
         <div className="mt-8">
            <div className="text-center">
                <h1 className="font-extrabold text-4xl tracking-wide">Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid gap-6 mb-8 lg:grid-cols-2 sm:grid-cols-1">
                {
                    jobDatas.map(data=><Jobs 
                    key={data.id} jobs={data} handleJobDetails={handleJobDetails}></Jobs>)
                }
                       
            </div>

         </div>
     
    </div>
  );
};

export default Home;
