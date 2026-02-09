import React from 'react'
import JobListing from './JobListing'
//  import Jobs from '../jobs.json'  //importing jobs array from jobs.json
import { useState, useEffect } from 'react';
import Spinner from './spinner';
//  
const JobListings = ({isHome = false}) => {
  // const jobListings = isHome ? Jobs.slice(0, 3) : Jobs; //if isHome is true show only 3 jobs else show all jobs 
  const [jobs, setJobs] = useState([]); //jobs exist state yes or no
  const [loading, setLoading] = useState(true);
  
                    // useffect like onload of .net itruns after component renders
  useEffect(() => { //useEffect is a hook that allows us to perform side effects in our components, it takes a function as a parameter and it runs after the component renders, we can use it to fetch data from an API, we can also specify a dependency array as a second parameter, if the dependency array is empty it runs only once when the component mounts, if the dependency array has values it runs every time the values in the dependency array change
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';  
      try {
        const res = await fetch(apiUrl);   
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };
 fetchJobs();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }
    
  return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
           {isHome ? 'Recent Jobs' : 'Browse Jobs'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
   {loading ? (
  <Spinner loading={loading} />
) : (
  <>
    {jobs.map((job) => (
      <JobListing key={job.id} job={job} />
    ))}
  </>
)}

            

             
            {/* Job Listing 1 */}

            {/* Job Listing 2
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Remote</div>
                  <h3 className="text-xl font-bold">
                    Front-End Engineer (React)
                  </h3>
                </div>

                <div className="mb-5">
                  Join our team as a Front-End Developer in sunny Miami, FL. We
                  are looking for a motivated individual with a passion...
                </div>

                <h3 className="text-indigo-500 mb-2">
                  $70K - $80K / Year
                </h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>{" "}
                    Miami, FL
                  </div>
                  <a
                    href="job.html"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div> */}

            {/* Job Listing 3 */}
            {/* <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">Remote</div>
                  <h3 className="text-xl font-bold">
                    React.js Developer
                  </h3>
                </div>

                <div className="mb-5">
                  Are you passionate about front-end development? Join our team
                  in vibrant Brooklyn, NY, and work on exciting projects that
                  make a difference...
                </div>

                <h3 className="text-indigo-500 mb-2">
                  $70K - $80K / Year
                </h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>{" "}
                    Brooklyn, NY
                  </div>
                  <a
                    href="job.html"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </section>

  )
}

export default JobListings