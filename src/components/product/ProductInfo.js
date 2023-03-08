import { useSelector } from "react-redux";
import classes from "./productInfo.module.css";
import { toast, ToastContainer } from "react-toastify";
import { editPrice } from "../../store/function";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productActions } from "../../store/product";

const ProductInfo = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.currentUser.token);
  const deleteProductHandler = async (id) => {
    try {
      const res = await fetch(
        process.env.REACT_APP_API_URL + `/admin/product/${id}`,
        {
          credentials: "include",
          method: "DELETE",
          headers: {
            Authorization: token,
          },
        }
      );
      const result = await res.json();
      if (!res.ok) {
        toast.error(`${result.message}`);
        throw new Error("Fetching failed !");
      }
      toast.success(`${result.message}`);
      dispatch(productActions.change());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={classes.productInfo}>
        <h5>{props.item._id}</h5>
        <h4>{props.item.name}</h4>
        <h4>{editPrice(props.item.price)}</h4>
        <img
          src={process.env.REACT_APP_API_URL + "/" + props.item.image[0]}
          alt={props.item.name}
        ></img>
        <h4>{props.item.category}</h4>
        <div className={classes.productAction}>
          <button
            id="update"
            onClick={() => {
              navigate(`/editProduct/${props.item._id}`);
            }}
          >
            Update
          </button>
          <button
            id="delete"
            onClick={() => {
              let prom = prompt(
                "Are you sure you want delete this product (y/n) ?"
              );
              if (prom.toLowerCase() === "y") {
                deleteProductHandler(props.item._id);
              }
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default ProductInfo;
