import { ApolloClient, InMemoryCache } from "@apollo/client";
import { CATEGORIES, GET_CATEGORY } from "../../graphql/Queries";

const GetCategories = async (props) => {
    const client = new ApolloClient({
      uri: "http://localhost:4000/",
      cache: new InMemoryCache(),
    });
  async function fetchData() {
    try {
      let Categories = await client
        .query({ query: CATEGORIES })
        .then((Categories) => {
        //   console.log(
        //     "getProductsByCategory",
        //     Categories.data
        //   );
          return Categories.data.categories;
        })
        .catch((error) => {
          console.log("Something went wrong in response");
        });
      return Categories;
    } catch {}
  }
  const response = fetchData();
  return response;
//   console.log({ error, loading, data });

};
const GetCategory = async (props) => {
       const client = new ApolloClient({
         uri: "http://localhost:4000/",
         cache: new InMemoryCache(),
       });

       async function fetchData() {
         try {
           let resultByCategory = await client
             .query({ query: GET_CATEGORY, variables: { title: props } })
             .then((resultByCategory) => {
              //  console.log(
              //    "getProductsByCategory",
              //    resultByCategory.data.category
              //  );
               return resultByCategory;
             })
             .catch((error) => {
               console.log("Something went wrong in response");
             });
           return resultByCategory.data.category
         } catch {}
       }
       const response = fetchData();
       return response;

};

const categoryServices = { GetCategories, GetCategory };

export default categoryServices;
