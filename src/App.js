import React, { Component } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "@fontsource/raleway";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import {  onError } from '@apollo/client/link/error'
import { connect } from "react-redux";
import { GetCurrency } from "./features/currency/currencySlice";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({
    url: 'http://localhost:4000/'
  })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

 class App extends Component {
   componentDidMount() {
    this.props.GetCurrency();
  
  }

  render() {
    return (
      <>
        <ApolloProvider client={client}>
          <RouterProvider router={router} />
        </ApolloProvider>
        
      </>
    );
  }
}


const mapStateToProps = (state) => ({
  currency: state.currency
});

const mapDispatchToProps = { GetCurrency };

export default connect(mapStateToProps, mapDispatchToProps)(App)