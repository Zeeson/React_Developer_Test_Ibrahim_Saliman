import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
  },
  reducers: {
    addProductToCart: (state, action) => {
 
      const product = action.payload.productData.id;
        

      // check if item exist in cart
      let itemExist = state.products.findIndex((p) => p.id === product);
      console.log(action.payload);

      // check if item exist in cart
      if (itemExist > -1) {
        // item exist in cart
        let productItem = state.products[itemExist];

        console.log(productItem);

        productItem.qty += 1;
        productItem.total = productItem.qty * productItem.unitPrice[0].amount;

        state.products[itemExist] = productItem;
        state.total = state.products
          .map((item) => item.price)
          .reduce((acc, next) => acc + next);
        // console.log(cart.totalPrice);

        // cart.totalPrice = cart.totalPrice;
      } else {
        // item does not exist in cart
        state.products.push(action.payload.productData);
        state.total = state.products
          .map((item) => item.price)
          .reduce((acc, next) => acc + next);
        // console.log(cart.totalPrice);
      }
    },
    changeProductQuantity: (state, action) => {
       const product = action.payload.productData.id;

       // check if item exist in cart
       let itemExist = state.products.findIndex((p) => p.id === product);
       console.log(action.payload);

       
         // item exist in cart
         let productItem = state.products[itemExist];

         console.log(productItem);

         productItem.qty += 1;
         productItem.total = productItem.qty * productItem.unitPrice[0].amount;

         state.products[itemExist] = productItem;
         state.total = state.products
           .map((item) => item.price)
           .reduce((acc, next) => acc + next);
         // console.log(cart.totalPrice);

         // cart.totalPrice = cart.totalPrice;
      
    },
    decreaseProductQuantity: (state, action) => {
      state.quantity -= 1;
      state.products[action.payload].productQuantity -= 1;
    },
    updateAttributeIndex: (state, action) => {
      state.products[action.payload.productIndex].selectedAttributes[
        action.payload.indexAttribute
      ][1] = action.payload.index;
    },
    deleteProduct: (state, action) => {
      state.quantity -= 1;
      state.products.splice([action.payload], 1);
    },
  },
});

export const {
  addProductToCart,
  deleteProduct,
  changeProductQuantity,
  decreaseProductQuantity,
  updateAttributeIndex,
} = cartSlice.actions;
export default cartSlice.reducer;
