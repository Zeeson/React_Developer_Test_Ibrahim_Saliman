import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_PRODUCT } from "../../graphql/Queries";

const GetProduct = async (props) => {
  const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
  });

  async function fetchData() {
    try {
      let product = await client
        .query({ query: GET_PRODUCT, variables: { productId: props } })
        .then((product) => {
        //   console.log("product", product.data);
          return product;
        })
        .catch((error) => {
          console.log("Something went wrong in response");
        });
      return product.data.product;
    } catch {}
  }
  const response = fetchData();
  return response;
};

const productServices = { GetProduct };

export default productServices;
