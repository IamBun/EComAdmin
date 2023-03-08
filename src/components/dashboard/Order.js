import classes from "./order.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { editPrice, truncate } from "../../store/function";
import { useNavigate } from "react-router-dom";

const Order = (props) => {
  const userToken = useSelector((state) => state.currentUser.token);
  const userId = useSelector((state) => state.currentUser.userId);
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();

  const showOrder = (id) => {
    navigate(`/order/${id}`);
  };

  useEffect(() => {
    setOrder(props.order);
  }, []);

  return (
    <>
      {order.length != 0 &&
        order.map((ele) => {
          return (
            <div className={classes.orderDetail} key={ele._id}>
              <p>{truncate(ele.userId, 10)}</p>
              <p>{ele.name}</p>
              <p>{ele.phoneNumber}</p>
              <p>{ele.address}</p>
              <p>{editPrice(ele.total)}</p>
              <p>Pending</p>
              <p>{ele.status}</p>
              <button
                onClick={() => {
                  showOrder(ele._id);
                }}
                id="detail"
              >
                Detail
              </button>
            </div>
          );
        })}
      {order.length == 0 && <h1>No order yet ! Shopping now </h1>}
    </>
  );
};

export default Order;
