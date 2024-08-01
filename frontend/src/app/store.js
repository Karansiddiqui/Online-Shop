import { configureStore } from "@reduxjs/toolkit";
// import productReducer, { productsFetch } from "../features/productsSlice.js";
import productReducer from "../features/productsSlice.js";
import { productsAPi } from "../features/productsApi.js";
import cartReducer from "../features/cartSlice.js";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    [productsAPi.reducerPath]: productsAPi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return  getDefaultMiddleware().concat(productsAPi.middleware);
  }
});

// store.dispatch(productsFetch());

export default store;