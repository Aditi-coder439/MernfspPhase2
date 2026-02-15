import React from 'react'

function Product(props) {
    const {title,price,image}=props;
  return (
    <div>
     <img src={props.image} alt=''/>
       <h2>{props.title}</h2>
       <p>{props.price}</p>
    </div>
  )
}

export default Product

