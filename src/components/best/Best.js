import React from 'react'
import './Best.css'
import Apartment1 from '../../assets/apt1.jpg'
import Apartment2 from '../../assets/apt2.jpg'
import Apartment3 from '../../assets/apt3.jpg'

const Best = () => {
  return (
    <div className="best">
    <h1>Find Best Rated Dorms</h1>
    <div>
        <p><span className='bold'>All</span></p>
        <p>Dorms</p>
        <p>Hostels</p>
        <p>PGs</p>
    </div>
    <div className='container'>
        <img src={Apartment1} alt='' />
        <img src={Apartment2} alt='' />
        <img src={Apartment3} alt='' />
    </div>
    <button className='btn'>View All</button>
    </div>
  )
}

export default Best