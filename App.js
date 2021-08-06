import React from 'react'
import './App.css';

//import bootstrap form node_modules
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//import js bundle for dropdown menu
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

//importing form here
import { Switch, Route, Redirect } from 'react-router';

import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Service from './Components/Service.jsx';
import Contact from './Components/Contact.jsx';

//import navbar 
import Navbar from './Components/Navbar.jsx'

import Footer from './Components/Footer';







export default function App() {
  return (

      <div>

        <Navbar />

          <Switch>

            <Route exact path='/' component={Home}/>            
            <Route exact path='/about' component={About}/>            
            <Route exact path='/service' component={Service}/>            
            <Route exact path='/contact' component={Contact}/>            
            <Redirect to='/' />

          </Switch>

          <Footer/>

      </div>

    
  )
}
