import React from 'react'

const Contact = () =>{

    return (

        <div>
          <div className="container">
              <div className="row">
                  <div className="col-md-10">
                      <form >
                          <div className="form-group mx-auto">
                              <label htmlFor="name">Name</label>
                              <input type="text" className='form-control' placeholder='Name' id='name' />
                          </div>
                          <div className="form-group mx-auto">
                              <label htmlFor="email">Email</label>
                              <input type="email" className='form-control' placeholder='Email' id='email' />
                          </div>
                          <div className="form-group mx-auto">
                              <label htmlFor="number">Phone Number</label>
                              <input type="number" className='form-control' placeholder='Number' id='number' />
                          </div>
                          <div className="form-group mx-auto">
                              <label htmlFor="number">Password</label>
                              <input type="number" className='form-control' placeholder='Password' id='number' />
                          </div>
                          <button type='button' className='btn btn-primary'>Send</button>
                      </form>
                  </div>
              </div>
              </div>
          </div>
    )
}

export default Contact;