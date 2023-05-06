import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import Success from "./pages/Sucess";
// redux hook and store
import { Provider } from 'react-redux';
import store from './redux/store';
import OrderHistory from "./pages/OrderHistory";

// custom React Hook
// commented out in favor of redux
// import { StoreProvider } from "./utils/GlobalState";




const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

// Custom React Hook called added as StoreProvider container
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          {/*<StoreProvider>*/}
          <Provider store={store}>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/products/:id" component={Detail} />
              <Route exact path="/success" component={Success} />
              <Route component={NoMatch} />
              
            </Switch>
          </Provider>
          {/*</StoreProvider>*/}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
