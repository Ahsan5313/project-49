import React from 'react'
import { NavLink } from 'react-router-dom';
import cardImg from '../Components/image/pizza1.jpg'

const Service = () =>{

    return (

        <div>
           
            <div className="text-center mt-5 mb-5">
                <h2>Our Services</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    <div class="card" >
                        <img src={cardImg} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card" >
                        <img src={cardImg} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card" >
                        <img src={cardImg} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4">
                    <div class="card" >
                        <img src={cardImg} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card" >
                        <img src={cardImg} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card" >
                        <img src={cardImg} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink to="/" class="btn btn-primary">Go somewhere</NavLink>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Service;