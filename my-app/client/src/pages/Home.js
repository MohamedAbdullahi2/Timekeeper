import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from '../components/Cart';
import hiroImage from '../assets/hiro.jpg';


// Before being managed globally
// const Home = () => {
//   const [currentCategory, setCategory] = useState("");

//   before being managed globally
//   return (
//     <div className="container">
//       <CategoryMenu setCategory={setCategory} />
//       <ProductList currentCategory={currentCategory} />
//     </div>
//   );

 
// };

 // after being managed globally
 const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-image">
        <img src={hiroImage} alt="Hiro" />
      </div>
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;

