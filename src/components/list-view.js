import React, { useEffect, useState } from "react";
import logo from '../assets/images/logo.png';
import { Link } from "react-router-dom";
import { AccessAPI } from "../services/AccessAPI";
let ListView = () =>{
  let [state, setState] = useState(
    {
    users : [],
    errorMessage : ''
    }
  );
  useEffect(() => {
        
    async function fetchData() {
        
      try{
      const response = await AccessAPI.getAll();
      setState({
        ...state,
        users: response.data,
      });
      }
      catch(error) {
        setState({
            ...state,
            errorMessage: error.message
        })
      }
    }
    fetchData();        
}, []);
let {users, errorMessage}= state;
    return (
      <>
     {/* <pre>
            {JSON.stringify(users)}
            <br/>
            {JSON.stringify(users.job_title)}
        </pre>  */}
        <article className="list-view-main bg-gray-100 container">
        {
                            users.length > 0 &&
                            users.map(user =>{
                                return(
            <aside className="list-view-item px-6 py-4" key={user.id}>
                       
                <div className='inner-list-view'>
                <div className='list-view-item-left'>
                  <img src={logo} alt="logo" className='img-logo' />                  
                </div>
                <div className='list-view-item-right' value={user.id}>
                  <h3 className='title'>{user.job_title}</h3>
                  <p className='company'>{user.company_name} - {user.industry}</p>
                  <p className='location'>{user.location} ({user.remote_type})</p>
                  <p className='timining'>Part-Time ({user.start_time} - {user.end_time} IST)</p>
                  <p className='experience'>Experience ({user.experience_min} - {user.experience_max} years)</p>
                  <p className='salary'>INR (₹) {user.salary_min} - {user.salery_max} / Month</p>
                  <p className='emp'>{user.total_emp} employees</p>
                  <div className="btn-group-list">
                    <Link to="/step1" className="btn-primary">Apply Now</Link>
                    <Link to="/step2" className="btn-primary-outline">External Apply</Link>
                  </div>
                </div>
                </div>  
            </aside> 
            )
            })
        } 
          
        </article>
      </>
    );
  }
  
  export default ListView;