import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from ".//page/HomePage";
import Layout from "./components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { dataActions } from "./store/data";
import LoadingSpinner from "./components/UI/LoadingSpinner";

//Lazy Load
// const ShopPage = React.lazy(() => import(".//page/ShopPage"));
// const CheckoutPage = React.lazy(() => import(".//page/CheckoutPage"));
// const CartPage = React.lazy(() => import(".//page/CartPage"));
// const OrderPage = React.lazy(() => import(".//page/OrderPage"));
const OrderIdDetail = React.lazy(() =>
  import("./components/orderPage/OrderIdDetail")
);
const LoginPage = React.lazy(() => import(".//page/LoginPage"));
const RegisterPage = React.lazy(() => import(".//page/RegisterPage"));
const DetailPage = React.lazy(() => import(".//page/DetailPage"));
const ProductPage = React.lazy(() => import(".//page/ProductPage"));
const AddProductPage = React.lazy(() => import(".//page/AddProductPage"));
const EditProductPage = React.lazy(() => import(".//page/EditProductPage"));
const DashboardPage = React.lazy(() => import("./page/DashboardPage"));
const LivechatPage = React.lazy(() => import("./page/LivechatPage"));

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.currentUser.token);
  const getProducts = async function () {
    try {
      const res = await fetch(
        process.env.API_URL +
          // "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
          "/shop/allProduct",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error("Loading failed !");
      }

      const data = await res.json();
      dispatch(dataActions.getData(data.products));
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Layout>
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "100px auto",
              }}
            >
              <LoadingSpinner />
            </div>
          }
        >
          <Routes>
            {token && (
              <Route path="/dashboard" element={<DashboardPage />}></Route>
            )}
            {token && <Route path="/product" element={<ProductPage />}></Route>}
            {token && (
              <Route path="/addproduct" element={<AddProductPage />}></Route>
            )}
            {token && (
              <Route
                path="/editproduct/:productId"
                element={<EditProductPage />}
              ></Route>
            )}
            {/* <Route path="/shop" element={<ShopPage />}></Route> */}
            {/* <Route path="/cart" element={<CartPage />}></Route> */}
            {/* <Route path="/checkout" element={<CheckoutPage />}></Route> */}
            {/* <Route path="/order" element={<OrderPage />}></Route> */}
            <Route path="/detail/:productId" element={<DetailPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/order/:orderId" element={<OrderIdDetail />}></Route>
            <Route path="/livechat" element={<LivechatPage />}></Route>
            <Route path="*" element={<LoginPage />}></Route>
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
