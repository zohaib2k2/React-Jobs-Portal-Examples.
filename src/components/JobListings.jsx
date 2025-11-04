
//import jobs from '../jobs.json';
import JobListing from './JobListing';
import { useState, useEffect } from 'react';
import Loader from './Loader';

const JobListings = (props) => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('/api/jobs');
        const data = await res.json();
        setJobs(data);
        //setLoading(false);
      } catch (error) {
        console.error(`Error occured while fetching data for jobs ${error}`);
      } finally {
        // make it sleep for 3 seconds to simulate loading
        // await new Promise(resolve => setTimeout(resolve, 3000));
        // ^ this is just for demonstration purpose.
        setLoading(false);
      }
      
      

    } 
    fetchJobs()

  }, [])
  //  props.defaultNum = 3;
  /**
   * props.defaultNum || jobs.length <-- if props.defaultNum is provided, use it; otherwise, use the total number of jobs
   * now this seems to arbitrary but it's a common pattern in JavaScript to provide default values
   * for example, if props.defaultNum is undefined, it will use jobs.length
   * however i would prefer to use ternary operator for better readability*/
    const numJobsToShow = props.defaultNum ? props.defaultNum : jobs.length;
   /* then use numJobsToShow in slice method
   */
  const recentJobs = jobs.slice(0, numJobsToShow);
  return (
    <section className="bg-blue-100 opacity-90 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          browse jobs
        </h2>
        
          {/* <!-- job listing  --> */}
          { loading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <Loader/>
            </div>
          ):(
            <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            { recentJobs.map( (job) => (
             <JobListing key={job.id} job={job}/>
             ))
            }
            </div>
            </>
          )
          }
        
          
        
      </div>
    </section>
    )
}

export default JobListings