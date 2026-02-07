import React from 'react'
import { useState } from 'react'
import { FaMapMarker } from 'react-icons/fa'  //font awesome icons, install using npm install react-icons then import from react-icons/fa module
                                               //  the icon you want to use, you can use it like a component and pass props to it
import { Link } from 'react-router-dom'                                               
const JobListing = ({job}) => {
  const [showFullDescription, setShowFullDescription] = useState(false); 
                                                                //value of state and function to update state, default value is false
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  let description = job.description;
  if (!showFullDescription && description.length > 100) {  //component state to toggle between showing full description and truncated description, 
                                   //if showFullDescription is false and description length is greater than 100 then we will show truncated description
    description = description.substring(0, 90) + "...";
  }
  return (
      <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">{job.type}</div>
                  <h3 className="text-xl font-bold">
                    {job.title}
                  </h3>
                </div>

                <div className="mb-5">
                  {description}
                </div>
                <button className="text-indigo-500 hover:text-indigo-600 mb-5"
                  onClick={toggleDescription}
              >
                  {showFullDescription ? "Show Less" : "Read More"}
                </button>
                <h3 className="text-indigo-500 mb-2">
                  {job.salary}
                </h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <FaMapMarker className="text-lg inline-block mr-1 mb-1" />
                    {job.location}
                  </div>
                  <Link
                    to={`/jobs/${job.id}`}
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
  )
}

export default JobListing