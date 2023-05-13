import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
const CartItem = ({ data }) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={data.productImage} />
      <div className="description">
        <p>
          <b>{data.productName}</b>
        </p>
        <p> ${data.price} </p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(data.id)}>-</button>
          <input
            onChange={(e) =>
              updateCartItemCount(Number(e.target.value), data.id)
            }
            type="text"
            value={cartItems[data.id]}
          />
          <button onClick={() => addToCart(data.id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
