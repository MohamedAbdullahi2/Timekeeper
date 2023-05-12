// import React, { useEffect, useState } from "react";
// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";
// import "./index.css"

// function Nav() {

//   function showNavigation() {
//     if (Auth.loggedIn()) {
//       return (
//         <ul className="flex-row">
//           <li className="mx-1">
//             <Link to="/orderHistory">
//               Order History
//             </Link>
//           </li>
//           <li className="mx-1">
//             {/* this is not using the Link component to logout or user and then refresh the application to the start */}
//             <a href="/" onClick={() => Auth.logout()}>
//               Logout
//             </a>
//           </li>
//         </ul>
//       );
//     } else {
//       return (
//         <ul className="flex-row">
//           <li className="mx-1">
//             <Link to="/signup">
//               Signup
//             </Link>
//           </li>
//           <li className="mx-1">
//             <Link to="/login">
//               Login
//             </Link>
//           </li>
//         </ul>
//       );
//     }
//   }

//   return (
//     <header className="flex-row px-1">
//       <h1>
//         <Link to="/">
//           <span role="img" aria-label="Timekeepers"></span>
//           Timekeepers
//         </Link>
//       </h1>

//       <nav>
//         {showNavigation()}
//       </nav>
      
//     </header>
//   );

//   }

// export default Nav;



// import React from "react";
// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";
// import UIkit from 'uikit';
// import Icons from 'uikit/dist/js/uikit-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleCart } from "../../utils/actions";
// import './index.css'; // Import the CSS file for custom styles

// // Initializes the UIkit icons plugin
// UIkit.use(Icons);

// function Nav() {
//   const dispatch = useDispatch();
//   const cart = useSelector(state => state.cart);

//   function showNavigation() {
//     if (Auth.loggedIn()) {
//       return (
//         <ul className="uk-navbar-nav">
//           <li>
//             <Link to="/orderHistory">Order History</Link>
//           </li>
//           <li>
//             <a href="/" onClick={() => Auth.logout()}>Logout</a>
//           </li>
//           <li>
//             <Link to="/cart-closed">
//               <span uk-icon="icon: cart; ratio: 1.5" className="animated-icon"></span>
//             </Link>
//           </li>
//         </ul>
//       );
//     } else {
//       return (
//         <ul className="uk-no-bullet">
//           <li className="uk-no-bullet">
//             <Link to="/signup" className="animated-icon">
//               <span uk-icon="icon: sign-up; ratio: 1.5" className="animated-icon"></span>
//             </Link>
//           </li>
//           <li className="uk-no-bullet">
//             <Link to="/login" className="uk-navbar-item">
//               <span uk-icon="icon: sign-in; ratio: 1.5" className="animated-icon"></span>
//             </Link>
//           </li>
//           <li className="uk-no-bullet">
//             <Link to="/cart-closed">
//               <span uk-icon="icon: cart; ratio: 1.5" className="animated-icon"></span>
//             </Link>
//           </li>
//         </ul>
//       );
//     }
//   }

//   return (
//     <nav className="uk-navbar-container" uk-navbar="true">
//       <div className="uk-navbar-left">
//         <Link to="/" className="uk-navbar-item uk-logo">
//           Timekeepers
//         </Link>
//       </div>
//       <div className="uk-navbar-right">
//         <div className="uk-navbar-item">
//           <div className="uk-grid-small" uk-grid="true">
//             <div className="uk-width-auto">
//               <ul className="uk-iconnav">
//                 <li className="uk-no-bullet">
//                   <Link to="/signup">
//                     <span uk-icon="icon: user; ratio: 1.5" className="animated-icon"></span>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="uk-width-auto">
//               {showNavigation()}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Nav;



// import React from "react";
// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";
// import UIkit from 'uikit';
// import Icons from 'uikit/dist/js/uikit-icons';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleCart } from "../../utils/actions";
// import './index.css'; // Import the CSS file for custom styles

// // Initializes the UIkit icons plugin
// UIkit.use(Icons);

// function Nav() {
//   const dispatch = useDispatch();
//   const cart = useSelector(state => state.cart);

//   function showNavigation() {
//     if (Auth.loggedIn()) {
//       return (
//         <ul className="uk-navbar-nav">
//           <li>
//             <Link to="/orderHistory">Order History</Link>
//           </li>
//           <li>
//             <a href="/" onClick={() => Auth.logout()}>Logout</a>
//           </li>
//         </ul>
//       );
//     } else {
//       return (
//         <ul className="uk-no-bullet">
//           <li className="uk-no-bullet">
//             <Link to="/signup" className="animated-icon">
//               <span uk-icon="icon: sign-up; ratio: 1.5" className="animated-icon"></span>
//             </Link>
//           </li>
//           <li className="uk-no-bullet">
//             <Link to="/login" className="uk-navbar-item">
//               <span uk-icon="icon: sign-in; ratio: 1.5" className="animated-icon"></span>
//             </Link>
//           </li>
//         </ul>
//       );
//     }
//   }
  

//   return (
//     <nav className="uk-navbar-container" uk-navbar="true">
//       <div className="uk-navbar-left">
//         <Link to="/" className="uk-navbar-item uk-logo">
//           Timekeepers
//         </Link>
//       </div>
//       <div className="uk-navbar-right">
//         <div className="uk-navbar-item">
//           <div className="uk-grid-small" uk-grid="true">
//             <div className="uk-width-auto">
//               <ul className="uk-iconnav">
//                 <li className="uk-no-bullet">
//                   <Link to="/signup">
//                     <span uk-icon="icon: user; ratio: 1.5" className="animated-icon"></span>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="uk-width-auto">
//               {showNavigation()}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Nav;



import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from "../../utils/actions";
import './index.css'; // Import the CSS file for custom styles

// Initializes the UIkit icons plugin
UIkit.use(Icons);

function Nav() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="uk-navbar-nav">
          <li>
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li>
            <a href="/" onClick={() => Auth.logout()}>Logout</a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="uk-no-bullet uk-flex">
          <li className="uk-no-bullet">
            <Link to="/signup" className="animated-icon">
              <span uk-icon="icon: sign-up; ratio: 1.5" className="animated-icon"></span>
            </Link>
          </li>
          <li className="uk-no-bullet">
            <Link to="/login" className="uk-navbar-item">
              <span uk-icon="icon: sign-in; ratio: 1.5" className="animated-icon"></span>
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <nav className="uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left">
        <Link to="/" className="uk-navbar-item uk-logo">
          Timekeepers
        </Link>
      </div>
      <div className="uk-navbar-right">
        <div className="uk-navbar-item">
          <div className="uk-grid-small uk-flex uk-flex-right" uk-grid="true">
            <div className="uk-width-auto">
              {showNavigation()}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

