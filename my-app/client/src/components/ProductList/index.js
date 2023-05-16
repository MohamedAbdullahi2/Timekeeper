import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/react-hooks';
import ProductItem from '../ProductItem';
import { QUERY_PRODUCTS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';
import { idbPromise } from '../../utils/helpers';
import './index.css';

function ProductList() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [showMore, setShowMore] = useState(false);

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products,
        });
      });
    }
  }, [data, dispatch, loading]);

  function filterProducts() {
    let filteredProducts = state.products;
    if (category) {
      filteredProducts = filteredProducts.filter((product) => product.category._id === category);
    }
    if (searchTerm) {
      filteredProducts = filteredProducts.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    return filteredProducts;
  }

  function handleSearchInputChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleShowMoreClick() {
    setShowMore(!showMore);
  }

  function renderProducts(products) {
    return (
      <div className="container">
      {products
        .slice(0, showMore ? products.length : 10)
        .map((product) => (
          <ProductItem
            key={product._id}
            _id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            className="image-style" // Place className attribute here
          />
        ))}
    </div>
    
    
    );
  }

  const filteredProducts = filterProducts();

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      <div className="flex-row">
        <input type="text" placeholder="Search by name" onChange={handleSearchInputChange} />
        <select defaultValue="" onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {state.categories.map((category) => (
            <option value={category._id} key={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      {filteredProducts.length ? (
        <>
          {renderProducts(filteredProducts)}
          {filteredProducts.length > 25 && (
            
            <div className="btn">
              <button className="btn-more"onClick={handleShowMoreClick}>{showMore ? 'Show Less' : 'Show More'}</button>
            </div>
          )}
        </>
      ) : (
        <h3>No products found</h3>
      )}
      {loading && <img src={spinner} alt="loading" />}
    </div>
  );
}

export default ProductList;

