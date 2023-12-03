import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal, removeFromCart, toggleCartQty } from './features/cartSlice';

function Candi() {

  const vote = true

  const dispatch = useDispatch();

  const {data: cartProducts, totalItems, totalAmount, deliveryCharge} = useSelector(state => state.cart);

 

  useEffect(() => {
    dispatch(getCartTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [useSelector(state => state.cart)]); 

  return (
    <div>
      <Header vote={vote} />
      {
        cartProducts.map((item)=>(
          <div>
          <p>{item?.name}</p>
          <p>{item?.quantity}</p>
          <button type = "button" className='qty-inc fs-14 text-light-blue' onClick={() => dispatch(toggleCartQty({id: item.id, type: "INC"}))}>
          +
          </button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default Candi