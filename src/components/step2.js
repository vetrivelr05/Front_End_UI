import React from "react";
import { Link } from "react-router-dom";
let Step2 = () =>{
    return (
      <>
        <article className="container step-one-main">
          <aside className="step-one  p-8">            
            <div className="form-header">
              <div className="form-header-title">
              Create a job
              </div>
              <div className="form-header-step">
              Step 2
              </div>
            </div> 
            <div className="pb-6">
              <label className="form-label" for="title">Job title<span className="text-error">*</span></label>
              <input type="text" name="title" placeholder="ex. UX UI Designer" className="input-form" />
            </div>
            <div className="pb-6">
              <label className="form-label" for="Company">Company name<span className="text-error">*</span></label>
              <input type="text" name="Company" placeholder="ex. Google" className="input-form" />
            </div>
            <div className="pb-6">
              <label className="form-label" for="Industry">Industry<span className="text-error">*</span></label>
              <input type="text" name="Industry" placeholder="ex. Information Technology" className="input-form" />
            </div>
            <div className="form-row pb-24">
              <div className="location-form">
                <label className="form-label" for="Industry">Location<span className="text-error">*</span></label>
                <input type="text" name="Industry" placeholder="ex. Chennai" className="input-form" />
              </div>
              <div className="location-form">
                <label className="form-label" for="Industry">Remote type<span className="text-error">*</span></label>
                <input type="text" name="Industry" placeholder="ex. In-office" className="input-form" />
              </div>
            </div>
            <div className="text-right button-footer">
            <Link to="/" className="btn-primary">Save</Link>
            </div>
          </aside>
        </article>
      </>
    )
}
export default Step2;