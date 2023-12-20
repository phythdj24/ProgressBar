/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from './Navbar'

export const Home = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (food) => {
      setCart([...cart, food]);
    };

  return (
    <>
    <div>
        <Navbar />

        </div>

        <div className='Home'>
            <div className='Card'>
                <img src='https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*' alt="" />
                <h1>Pizza</h1>
                <h4>Price 100$</h4>
                <button onClick={() => addToCart({ id: 1, name: 'Pizza', price: 100 })}>Add</button>

            </div>
            <div className='Card'>
                <img src='https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*' alt="" />
                <h1>Pizza</h1>
                <h4>Price 100$</h4>
                <button>Add</button>

            </div>
            <div className='Card'>
                <img src='https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*' alt="" />
                <h1>Pizza</h1>
                <h4>Price 100$</h4>
                <button onClick={() => addToCart({ id: 2, name: 'Pizza', price: 100 })}>Add</button>

            </div>
            <div className='Card'>
                <img src='https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*' alt="" />
                <h1>Pizza</h1>
                <h4>Price 100$</h4>
                <button>Add</button>

            </div>
            <div className='Card'>
                <img src='https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*' alt="" />
                <h1>Pizza</h1>
                <h4>Price 100$</h4>
                <button>Add</button>

            </div>
            <div className='Card'>
                <img src='https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*' alt="" />
                <h1>Pizza</h1>
                <h4>Price 100$</h4>
                <button>Add</button>

            </div>
            <div className='Card'>
                <img src='https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*' alt="" />
                <h1>Pizza</h1>
                <h4>Price 100$</h4>
                <button>Add</button>

            </div>
            <div className='Card'>
                <img src='https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*' alt="" />
                <h1>Pizza</h1>
                <h4>Price 100$</h4>
                <button>Add</button>

            </div>
    
    </div>
    </>
  )
}
