import { gql } from "@apollo/client";

export const CATEGORIES = gql`
  query {
    categories {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;

export const GET_CATEGORY = gql`
  query Query($title: String!) {
    category(input: { title: $title }) {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            symbol
            label
          }
          amount
        }
        brand
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query ProductQuery($productId: String!) {
    product(id: $productId) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        items {
          id
          value
          displayValue
        }
        type
        name
        id
      }
      prices {
        amount
        currency {
          label
          symbol
        }
      }
      brand
    }
  }
`;



export const GET_CURRENCY = gql`
  query Query {
    currencies {
      label
      symbol
    }
  }
`;
