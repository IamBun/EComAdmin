import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShopBanner from "../shopPage/ShopBanner";
import classes from "./product.module.css";
import ProductInfo from "./ProductInfo";
import { dataActions } from "../../store/data";
import { categoriesActions } from "../../store/categories";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.currentUser.token);
  const categoriesInputRef = useRef();
  const navigate = useNavigate();
  const data = useSelector((state) => state.data.currentData); // lay data tu store
  const productChange = useSelector((state) => state.product.productChange);

  const fetchProduct = async () => {
    try {
      const res = await fetch(
        process.env.REACT_APP_API_URL + `/admin/allProduct`,
        {
          credentials: "include",
          headers: {
            Authorization: token,
          },
        }
      );
      if (!res.ok) {
        throw Error("Loading failed !");
      }
      const dataGetFromBE = await res.json();
      dispatch(dataActions.getData(dataGetFromBE));
      setProducts(dataGetFromBE);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(categoriesActions.getCategories(data));
  }, [data, productChange]); //lan dau tai trang thi lay data luu vao store redux, khi data thay doi thi tai lai

  const searchCategoryHandler = () => {
    const enteredInputRef = categoriesInputRef.current.value
      .toLowerCase()
      .trim(); //lay gia tri tu input, khong viet hoa
    let categoryArr = data.filter(
      //tao mang moi lay tu mang data sao cho category trung voi category nhap tu input
      // (ele) => ele.name.match(enteredInputRef)
      (ele) =>
        ele.category === enteredInputRef || ele.name.match(enteredInputRef)
    );

    dispatch(categoriesActions.getCategories(categoryArr)); //goi len store luu mang category de hien thi
  };

  const categorySearch = useSelector((state) => state.categories.categories); // lay mang category tu store, da duoc danh gia lai

  useEffect(() => {
    fetchProduct();
  }, [productChange]);

  return (
    <>
      <ShopBanner />
      {token && (
        <div className={classes.searchDetail}>
          <div>
            <input
              placeholder="Enter Search Category Here ! "
              ref={categoriesInputRef}
            ></input>
            <button onClick={searchCategoryHandler}>Search</button>
          </div>
          <button
            id="add"
            onClick={() => {
              navigate("/addproduct");
            }}
          >
            Add New Product
          </button>
        </div>
      )}
      {products && (
        <div className={classes.productTitle}>
          <h2>ID</h2>
          <h2>Name</h2>
          <h2>Price</h2>
          <h2>Image</h2>
          <h2>Category</h2>
          <h2>Edit</h2>
        </div>
      )}
      {categorySearch.length > 0 ? (
        categorySearch.map((ele) => {
          return <ProductInfo key={ele._id} item={ele} />;
        })
      ) : (
        // khong tim duoc san pham
        <div className={classes.fetchFail}>
          <h2>No product found </h2>
        </div>
      )}
    </>
  );
};

export default Product;
