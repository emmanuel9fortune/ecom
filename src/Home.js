import React, { useState } from 'react'
import Header from './Header'
import './home.css'
import { useDispatch } from 'react-redux'
import prod from './prod.json'
import { addToCart } from './features/cartSlice'
 
function Home() {

  const home = true

  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const increaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty + 1;
      return newQty;
    })
  }

  const decreaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty - 1;
      if(newQty < 1){
        newQty = 1;
      }
      return newQty;
    })
  }

  const add =(product)=>{
    let totalPrice = qty * product.price;

    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice
    }
    
    dispatch(addToCart(tempProduct));
  }

  return (
    <div className='home'>
      <Header home={home}/>
      {
        prod.map((product)=>(
          <div >
            <p>{product.name}</p>
            <p>{qty}</p>
            <button onClick={() => decreaseQty()}>decrease</button>
            <button onClick={() => increaseQty()}>increase</button>
            <button onClick={()=> add(product)} >add</button>
          </div>
        ))
      }

      
    </div>
  )
}

export default Home