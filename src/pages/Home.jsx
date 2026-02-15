import React from 'react'
import './Home.css'
import website from '../assets/website.jpg'


function Home() {
  return (
    <div>
    <img src={website} alt='website image'
     width="1000px" height='510px'/>
     <p className='para'>The Giant Panda is a gentle and iconic animal known for its distinctive black-and-white fur and calm nature. Native to the mountain forests of central China, pandas mainly feed on bamboo, spending most of their day eating to meet their energy needs. Although they belong to the bear family, giant pandas are generally peaceful and shy, preferring a solitary lifestyle. They play an important role in their ecosystem by helping maintain forest growth, and worldwide conservation efforts have helped protect this beloved species from extinction. 

</p>
<div className='image-row'>
 <img src={website} alt='image 1'/>
 <img src={website} alt='image 2'/>
 <img src={website} alt='image 3'/>
 <img src={website} alt='image 4'/>
 </div>
      Home
    </div>
  )
}

export default Home
