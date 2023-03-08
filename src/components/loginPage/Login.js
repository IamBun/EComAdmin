import img from "../SRCIMG/banner1.jpg";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUserActions } from "../../store/user";
import { useNavigate } from "react-router-dom";
import classes from "./login.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const token = useSelector((state) => state.currentUser.token);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token]);

  const signInHandler = async (e) => {
    //click login
    e.preventDefault();

    const enteredEmailInputRef = emailInputRef.current.value; //lay gia tri tu input
    const enteredPasswordInputRef = passwordInputRef.current.value;
    try {
      const res = await fetch(process.env.API_URL + "/auth/adminlogin", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: enteredEmailInputRef,
          password: enteredPasswordInputRef,
        }),
      });

      const data = await res.json();
      // console.log("data", data);

      const userId = await data.userId;
      if (!userId) {
        toast.error(`${data.message}`);
        throw new Error("Login failed !");
      }
      toast.success("Login success !");

      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("isUser", data.name);
      dispatch(
        currentUserActions.login({
          token: data.token,
          userId: data.userId,
          name: data.name,
        })
      );
      // const cartTotal = await cart.json();
      // dispatch(
      //   cartActions.changeProductQuantity({ totalProduct: cartTotal.length })
      // );
      // localStorage.setItem("cartTotal", cartTotal.length);
      // dispatch(cartActions.changeCart({ cart: cartTotal }));
      // dispatch(
      //   currentUserActions.login({
      //     email: enteredEmailInputRef,
      //     token: data.token,
      //     userId: data.userId,
      //   })
      // ); // gui dispatch de luu email user hien tai
      navigate("/home"); //dang nhap thanh cong, chuyen trang home
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className={classes.login}>
      <img src={img}></img>
      <form onSubmit={signInHandler} className={classes.form}>
        <h1>Sign In</h1>
        <input type="text" placeholder="Email" ref={emailInputRef}></input>
        <input
          type="password"
          placeholder="Password"
          ref={passwordInputRef}
        ></input>
        <button>SIGN IN</button>
        {/* Goi y chua co tai khoan thi chuyen den trang dang ky  */}
        <h3>
          Create an account ? <Link to="/register"> Sign up</Link>
        </h3>
      </form>
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
    </div>
  );
};

export default Login;
