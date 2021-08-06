import React from 'react'
import { NavLink } from 'react-router-dom';
import aboutImg from '../Components/image/mini2.jpg'

const About = () =>{

    return (

        <div>
        
        <section id="header">
               <div className="container">
                   <div className="row">
                       <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                           <h1>
                               Welcome to you our About page 
                           </h1>
                           <h2 className='my-3'>
                             We are the team of talented making websites
                           </h2>
                           <div className="mt-3">
                               <NavLink  to='/service' className='btn-get-started'> 
                                  Get Started
                               </NavLink>
                           </div>
                       </div>
                       <div className="col-md-6 order-1 order-lg-2  d-flex justify-content-center flex-column">
                      <img src={aboutImg} className='img-fluid animate' alt='img'/>
                   </div>
                   </div>
                   
               </div>
           </section>


        </div>
    )
}

export default About;