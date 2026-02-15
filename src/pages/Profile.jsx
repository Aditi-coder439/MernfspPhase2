import React from 'react'
import Product from './Product'

function Profile() {
  return (
    <div>
     <Product
      title ="Product 1"
      price="Rs 3000"
      image="https://commons.wikimedia.org/wiki/File:A_picture_of_a_Panda.jpg"
     />
      <Product
      title ="Product 2"
      price="Rs 5000"
      image="https://commons.wikimedia.org/wiki/File:A_picture_of_a_Panda.jpg"
     />
    </div>
  )
}

export default Profile
