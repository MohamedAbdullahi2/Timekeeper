import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import "../ProductList/index.css"

function ProductItem(item) {
  const [showDetails, setShowDetails] = useState(false); // initialize showDetails state as false
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  const { image, name, _id, price, quantity } = item;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className="card px-1 py-1">
      <div>
        <Link to={`/products/${_id}`}>
          <img alt={name} src={`/images/${image}`} />
          <p>{name}</p>
        </Link>
        <Link to={`/products/${_id}`}>
          <p>{name}</p> {/* Display product name again */}
        </Link>
      </div>
      {!showDetails ? ( // show the following product details only if showDetails is true
        <button onClick={() => setShowDetails(true)}>Show details</button>
      ) : (
        <>
          <div>{quantity} {pluralize("item", quantity)} in stock</div>
          <span>${price}</span>
          <button onClick={addToCart}>Add to cart</button>
        </>
      )}
    </div>
  );
}

export default ProductItem;
