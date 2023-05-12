// import React, { useState } from "react";
// import { useMutation } from '@apollo/react-hooks';
// import { Link } from "react-router-dom";
// import { LOGIN } from "../utils/mutations"
// import Auth from "../utils/auth";

// function Login(props) {
//   const [formState, setFormState] = useState({ email: '', password: '' })
//   const [login, { error }] = useMutation(LOGIN);

//   const handleFormSubmit = async event => {
//     event.preventDefault();
//     try {
//       const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
//       const token = mutationResponse.data.login.token;
//       Auth.login(token);
//     } catch (e) {
//       console.log(e)
//     }
//   };

//   const handleChange = event => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value
//     });
//   };

//   return (
//     <div className="container my-1">
//       <Link to="/signup">
//         ← Go to Signup
//       </Link>

//       <h2>Login</h2>
//       <form onSubmit={handleFormSubmit}>
//         <div className="flex-row space-between my-2">
//           <label htmlFor="email">Email address:</label>
//           <input
//             placeholder="youremail@test.com"
//             name="email"
//             type="email"
//             id="email"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex-row space-between my-2">
//           <label htmlFor="pwd">Password:</label>
//           <input
//             placeholder="******"
//             name="password"
//             type="password"
//             id="pwd"
//             onChange={handleChange}
//           />
//         </div>
//         {
//           error ? <div>
//             <p className="error-text" >The provided credentials are incorrect</p>
//           </div> : null
//         }
//         <div className="flex-row flex-end">
//           <button type="submit">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }


// export default Login;




// import React, { useState } from "react";
// import { useMutation } from '@apollo/react-hooks';
// import { Link } from "react-router-dom";
// import { LOGIN } from "../utils/mutations"
// import Auth from "../utils/auth";

// function Login(props) {
//   const [formState, setFormState] = useState({ email: '', password: '' })
//   const [login, { error }] = useMutation(LOGIN);

//   const handleFormSubmit = async event => {
//     event.preventDefault();
//     try {
//       const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
//       const token = mutationResponse.data.login.token;
//       Auth.login(token);
//     } catch (e) {
//       console.log(e)
//     }
//   };

//   const handleChange = event => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value
//     });
//   };

//   return (
//     <div className="card" style={{ backgroundColor: "#f2f2f2", padding: "20px" }}>
//       <div className="card-header">
//         <Link to="/signup">
//           ← Go to Signup
//         </Link>
//       </div>

//       <div className="card-body">
//         <h2>Login</h2>
//         <form onSubmit={handleFormSubmit}>
//           <div className="form-group">
//             <label htmlFor="email">Email address:</label>
//             <input
//               className="form-control"
//               placeholder="youremail@test.com"
//               name="email"
//               type="email"
//               id="email"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="pwd">Password:</label>
//             <input
//               className="form-control"
//               placeholder="******"
//               name="password"
//               type="password"
//               id="pwd"
//               onChange={handleChange}
//             />
//           </div>
//           {
//             error ? <div>
//               <p className="error-text" >The provided credentials are incorrect</p>
//             </div> : null
//           }
//           <div className="form-group">
//             <button className="btn btn-primary" type="submit">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;



// import React, { useState } from "react";
// import { useMutation } from '@apollo/react-hooks';
// import { Link } from "react-router-dom";
// import { LOGIN } from "../utils/mutations"
// import Auth from "../utils/auth";

// function Login(props) {
//   const [formState, setFormState] = useState({ email: '', password: '' })
//   const [login, { error }] = useMutation(LOGIN);

//   const handleFormSubmit = async event => {
//     event.preventDefault();
//     try {
//       const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
//       const token = mutationResponse.data.login.token;
//       Auth.login(token);
//     } catch (e) {
//       console.log(e)
//     }
//   };

//   const handleChange = event => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value
//     });
//   };

//   return (
//     <div className="page-container" style={{ backgroundColor: "#f2f2f2", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
//       <div className="card" style={{ width: "400px", padding: "20px" }}>
//         <div className="card-header">
//           <Link to="/signup">
//             ← Go to Signup
//           </Link>
//         </div>

//         <div className="card-body">
//           <h2>Login</h2>
//           <form onSubmit={handleFormSubmit}>
//             <div className="form-group">
//               <label htmlFor="email">Email address:</label>
//               <input
//                 className="form-control"
//                 placeholder="youremail@test.com"
//                 name="email"
//                 type="email"
//                 id="email"
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="pwd">Password:</label>
//               <input
//                 className="form-control"
//                 placeholder="******"
//                 name="password"
//                 type="password"
//                 id="pwd"
//                 onChange={handleChange}
//               />
//             </div>
//             {
//               error ? <div>
//                 <p className="error-text">The provided credentials are incorrect</p>
//               </div> : null
//             }
//             <div className="form-group">
//               <button className="btn btn-primary" type="submit">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import "./loginForm.css";


const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { email: formState.email, password: formState.password }
      });
      const token = data.login.token;
      Auth.login(token);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <div className="container my-1">
      <Link to="/signup">← Go to Signup</Link>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error && (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        )}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
