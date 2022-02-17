import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './Hero.css'

const Hero = () => {
  return (
   <div className="hero">
        <div className="content">
            <h1>Find the perfect Dorm</h1>
            <p className="search-text"> Search the largest Section of dorms , hostels & PGs. </p>
            <form className='search'>

            <div>
                <input type='text' placeholder='Enter University' />
            </div>
            <div className='radio'> 
                <input type='radio' checked />
                <label>PG</label>
                <input type='radio'  />
                <label>Hostel</label>
                <button type='submit'><AiOutlineSearch className='icon'/></button>
            </div>
        </form>
            </div>
   </div>
  );
}

export default Hero