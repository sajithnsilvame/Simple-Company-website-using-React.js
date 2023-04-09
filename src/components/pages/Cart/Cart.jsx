import React from 'react'

const Cart = (props) => {
  return (
    <div className="container">
        <div className="card mt-5">
        <div className="card-body shadow" >
        <h1>cart{props.itemname}</h1>
        </div>
        </div>
    </div>
  )
}

export default Cart