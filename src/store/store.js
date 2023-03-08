import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./data";
import popupReducer from "./popup";
import categoriesReducer from "./categories";
import currentUserReducer from "./user";
import cartReducer from "./cartStore";
import billReducer from "./bill";
import productReducer from "./product";

const store = configureStore({
  reducer: {
    popup: popupReducer,
    data: dataReducer,
    categories: categoriesReducer,
    currentUser: currentUserReducer,
    cart: cartReducer,
    product: productReducer,
    bill: billReducer,
  },
});

export default store;
