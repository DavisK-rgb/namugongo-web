import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Home.css'
import * as FiIcons from "react-icons/fi";
import CountUp from 'react-countup';


function Home() {
    return (
        <div className='home-container'>
           <div className="slide-container">
        <Slide className='slider' >
          <div className="each-slide">
            <div className="slide1">
              <span>WELCOME TO UMSSN </span>
            </div>
          </div>
          <div className="each-slide">
            <div className="slide2">
              <span>SCHOOL POOL</span>
            </div>
          </div>
          <div className="each-slide">
            <div className="slide3">
              <span> </span>
            </div>
          </div>
        </Slide>
      </div>
      <div className="brief-text">
          <h1>In Brief</h1>

      </div>
      <div className='inbrief'>
          <div className='brief1'>
              <FiIcons.FiEdit/>
              <h2>S.1 APPLICATIONS 2021</h2>
              <p>
                  As we wait for the Government guidance on the selection and commencement of s.1/2021,
                  those interested in joining Uganda Martyrs Secondary School Namugongo should follow 
                  the  appliction process as described in the academics tab.
              </p>

          </div>
          <div className='brief1'>
              <FiIcons.FiEdit/>
              <h2>S.5 APPLICATIONS 2021</h2>
              <p>
                  As we wait for the Government guidance on the selection and commencement of s.5/2021,
                  those interested in joining Uganda Martyrs Secondary School Namugongo should follow 
                  the  application process as described in academics tab.
              </p>

          </div>
          <div className='brief1'>
              <FiIcons.FiUserCheck/>
              <h2>CURRENT STUDENTS</h2>
              <p>
                Our dear students , you are encouraged to keep reading your books as we wait for schools to be
                opened.Teachers have compiled work for you in the academics tab.
                
              </p>

          </div>
          


      </div>
      <div className="mission">
          <h1>OUR MISSION</h1>
          <h3>To develop academic and other talents of students in a truly humane and christian environment
                in catholic tradition. </h3>

      </div>
      <div className='results'>
        <h2>2020 UCE RESULTS </h2>
      </div>
      <div className='counts-container'>
        
        <div className='counts-inner'>
      <CountUp delay={0} end={100} duration ={2.75} className='counts'/>
      <p>1st grades</p>
      </div>
      <div className='counts-inner'>
      <CountUp delay={0} end={4} duration ={2.75} className='counts'/>
      <p>10 in 10</p>
      </div>
      <div className='counts-inner'>
      <CountUp delay={0} end={26} duration ={2.75} className='counts'/>
      <p>8 in 8</p>
      </div>
      <div className='counts-inner'>
      <CountUp delay={0} end={16} duration ={2.75} className='counts'/>
      <p>9 in 8</p>
      </div>
      <div className='counts-inner'>
      <CountUp delay={0} end={98} duration ={2.75} className='counts'/>
      <p>1st grade percentage</p>
      </div>

      </div>
      
      
        </div>
    )
}

export default Home
