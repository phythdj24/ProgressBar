/* eslint-disable no-unused-vars */
import React from 'react'

const CartPage = () => {
    const cartItems = [ { id: 1, name: 'Pizza', price: 100 },
    { id: 2, name: 'Burger', price: 80 },];
  return (
    <div>
      <h1>Welcome to Cart Page</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CartPage