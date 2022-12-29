import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_CURRENCY } from "../../graphql/Queries";

const GetCurrency = async (props) => {
  const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
  });

  async function fetchData() {
    try {
      let currency = await client
        .query({ query: GET_CURRENCY })
        .then((currency) => {
          //   console.log("currency", currency.data);
          return currency;
        })
        .catch((error) => {
          console.log("Something went wrong in response");
        });
      return currency.data.currencies;
    } catch {}
  }
  const response = fetchData();
  return response;
};

const currencyServices = { GetCurrency };

export default currencyServices;
