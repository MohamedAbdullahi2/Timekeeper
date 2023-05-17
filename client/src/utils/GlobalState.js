// Removed in favor of redux

/*

import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';


const StoreContext = createContext();
const { Provider } = StoreContext;
/*

/*
Create a custom provider
function that will be used to manage and update our 
state using the reducer we created earlier as well.
Having this all bundled up will make it easier to 
integrate into our application.
*/
/*
The value prop is good to have included, as it opens us
up to pass in more data for state if we need to. 
We don't actually need to in this app, but it makes 
this provider flexible. The other prop, or rather 
...props, is in place to handle any other props the
user may need. Namely, we'll need to use props.children,
as this <StoreProvider> component will wrap all of our
other components, making them children of it. If we didn't
include {...props} in our returning <Provider> component,
nothing on the page would be rendered!
*/

/*
const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
      products: [],
      cart: [],
      cartOpen: false,
      categories: [],
      currentCategory: ''
    });
    // use this to confirm it works!
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
  };

*/

/*Hook to be used by the components that actually need 
the data our <StoreProvider> will be providing
*/

/*
const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };

*/