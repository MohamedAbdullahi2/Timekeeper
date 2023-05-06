import React, { useEffect } from "react";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import './style.css';
//commented out in favor of redux logic
//import { useStoreContext } from '../../utils/GlobalState';
import { useDispatch, useSelector } from 'react-redux';
// stripe checkout api
// to be used as part of the button checkout process
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from '@apollo/react-hooks';
import { QUERY_CHECKOUT } from "../../utils/queries"

// API key in context of REACT as testing key.
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {

  /*
  You'll use the custom useStoreContext Hook to establish 
  a state variable and the dispatch() function to update
  the state. In this case, dispatch() will call the TOGGLE_CART
  action. In the Cart functional component, write the following code:
  */

  // Commented out in favor of redux logic
  //const [state, dispatch] = useStoreContext();

  const state = useSelector((state) => {
    return state
  });

  const dispatch = useDispatch();

  // using lazyQuery to be used as part of the checkout function
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);



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

    // jsx component befor
    //<div className="close">[close]</div>
    // after <div className="close" onClick={toggleCart}>[close]</div>

    /*we call the action and the resolver will give return 
            case TOGGLE_CART:
    return {
      ...state,
      cartOpen: !state.cartOpen
    };
    */
   // at this poit state.cartOpen is !state.cartOpen

   // call our QUERY_CHECKOUT query
       // handle stripe checkout
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
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </div>

  );
};

/*
    <div className="cart">
      <div className="close" onClick={toggleCart}>[close]</div>
      <h2>Shopping Cart</h2>
      <div>
          <CartItem item={{name:'Camera', image:'camera.jpg', price:5, purchaseQuantity:3}} />
          <CartItem item={{name:'Soap', image:'soap.jpg', price:6, purchaseQuantity:4}} />

          <div className="flex-row space-between">
            <strong>Total: $0</strong>
            {
              Auth.loggedIn() ?
                <button>
                  Checkout
                </button>
                :
                <span>(log in to check out)</span>
            }
          </div>
        </div>
    </div>
    */

export default Cart;