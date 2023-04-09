import React from 'react'
import {Link} from 'react-router-dom';


const OurCompanySection = () => {
  return (
    <div>
        <div className="row">
            
            <div className="col-md-12 text-center">
              <h1 className="main-heading">Our Company</h1>
              <div className="underline mx-auto"></div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <Link className="btn btn-warning" to={"/about"}>Read more..</Link>
            </div>

            <div className="mb-5"></div>

          </div>
    </div>
  )
}

export default OurCompanySection