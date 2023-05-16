import React, { useEffect } from "react";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import './style.css';
//commented out in favor of redux logic
//import { useStoreContext } from '../../utils/GlobalState';
import { useLazyQuery } from '@apollo/react-hooks';
import { loadStripe } from '@stripe/stripe-js';
import { useDispatch, useSelector } from 'react-redux';
// stripe checkout api
// to be used as part of the button checkout process
// import { loadStripe } from "stripe";
// import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from "../../utils/queries"

// API key in context of REACT as testing key.
const stripePromise = loadStripe('pk_test_51MmU36BlbDJj83aqAwRrJZByL7a8TdG45zoSSlQFWGN0vBwig59E8oPM3XijEwweSA0VQ0bZRWfhXoANuMKXwZPc00HyNd9tt5');

const Cart = () => {

  const state = useSelector((state) => {
    return state
  });

  const dispatch = useDispatch();

  // using lazyQuery to be used as part of the checkout function
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  console.log(data)

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    };
  
    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  // use effect for checkout lazyhook
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);
  
  //  console.log([data])

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach(item => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

       
  function submitCheckout() {
    const productIds = [];
  
    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });
    getCheckout({
      variables: { products: productIds }
    });

  }


    if (!state.cartOpen) {
      return (
        <div className="cart-closed" onClick={toggleCart}>
          <span
            role="img"
            aria-label="trash">🛒</span>
        </div>
      );
    }
    


  return (

    <div className="cart">
      <div className="close" onClick={toggleCart}>[close]</div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map(item => (
            <CartItem key={item._id} item={item} />
          ))}
          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>
            {
              Auth.loggedIn() ?
              <button onClick={submitCheckout}>
              Checkout
             </button>
                :
                <span>(log in to check out)</span>
            }
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            
          </span>
          Your cart is empty! Start adding items to your cart
        </h3>
      )}
    </div>

  );
};

export default Cart;