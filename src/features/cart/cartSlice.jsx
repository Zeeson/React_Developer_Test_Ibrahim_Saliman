import { createSlice } from "@reduxjs/toolkit";

const cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart);

const qty = cart?.products
  .map((item) => item.qty)
  .reduce((acc, next) => acc + next);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: cart ? cart?.products : [],
    total: cart ? cart?.total : 0,
    qty: qty ? qty : 0,
    openCart: false,
  },
  reducers: {
    showCart: (state, action) => {
      state.openCart = !state.openCart;
    },
    addProductToCart: (state, action) => {
      const product = action.payload.productData?.id;

      // check if item exist in cart

      let itemExist = state.products.findIndex((p) => p?.id === product);
      console.log(itemExist);

      // check if item exist in cart
      if (itemExist > -1) {
        // item exist in cart
        let productItem = state.products[itemExist];

        console.log(productItem);

        productItem.qty += 1;
        productItem.total = productItem.qty * productItem.unitPrice[0].amount;

        state.products[itemExist] = productItem;
        state.qty = state.products
          .map((item) => item.qty)
          .reduce((acc, next) => acc + next);

        state.total = state.products
          .map((item) => item.total)
          .reduce((acc, next) => acc + next);
        // console.log(cart.totalPrice);

        // cart.totalPrice = cart.totalPrice;
      }

      // localStorage.setItem("cart", JSON.stringify(state));
      else {
        // item does not exist in cart
        state.products.push(action.payload.productData);
        state.qty = state.products
          .map((item) => item.qty)
          .reduce((acc, next) => acc + next);
        state.total = state.products
          .map((item) => item.total)
          .reduce((acc, next) => acc + next);
        // console.log(cart.totalPrice);
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    changeProductQuantity: (state, action) => {
      const product = action.payload;

      // check if item exist in cart
      let itemExist = state.products.findIndex((p) => p.id === product);
      console.log(action.payload);

      // item exist in cart
      let productItem = state.products[itemExist];

      console.log(productItem);

      productItem.qty += 1;
      productItem.total = productItem.qty * productItem.unitPrice[0].amount;

      state.products[itemExist] = productItem;
      state.qty = state.products
          .map((item) => item.qty)
          .reduce((acc, next) => acc + next);
      state.total = state.products
        .map((item) => item.total)
        .reduce((acc, next) => acc + next);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decreaseProductQuantity: (state, action) => {

      const product = action.payload;

      // check if item exist in cart
      let itemExist = state.products.findIndex((p) => p.id === product);
      console.log(action.payload);

      // item exist in cart
      let productItem = state.products[itemExist];

      console.log(productItem);

      productItem.qty -= 1;
      productItem.total = productItem.qty * productItem.unitPrice[0].amount;

      state.products[itemExist] = productItem;
      state.qty = state.products
        .map((item) => item.qty)
        .reduce((acc, next) => acc + next);
      state.total = state.products
        .map((item) => item.total)
        .reduce((acc, next) => acc + next);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    updateAttributeIndex: (state, action) => {
      const product = action.payload.id;

      const attrIndex = action.payload.attr;
      console.log(attrIndex);

      // check if item exist in cart
      let itemExist = state.products.findIndex((p) => p.id === product);
      // console.log(itemExist);

      // item exist in cart
      let productItem = state.products[itemExist];

      // console.log(productItem);

      productItem.selectedAttributes[0] = attrIndex;

      localStorage.setItem("cart", JSON.stringify(state));
    },
    updateColor: (state, action) => {
      const product = action.payload.id;

      const attrIndex = action.payload.color;
      console.log(attrIndex);

      // check if item exist in cart
      let itemExist = state.products.findIndex((p) => p.id === product);
      // console.log(itemExist);

      // item exist in cart
      let productItem = state.products[itemExist];

      console.log(productItem);

      productItem.selectedColor = attrIndex;

      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const {
  addProductToCart,
  updateColor,
  changeProductQuantity,
  decreaseProductQuantity,
  updateAttributeIndex,
  showCart,
} = cartSlice.actions;
export default cartSlice.reducer;