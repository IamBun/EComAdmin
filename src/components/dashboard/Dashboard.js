import { useEffect, useState } from "react";
import classes from "./dashboard.module.css";
import Widget from "./Widget";
import { useSelector } from "react-redux/es/exports";
import { BiUser, BiFile, BiMoney } from "react-icons/bi";
import Order from "./Order";

const Dashboard = () => {
  const token = useSelector((state) => state.currentUser.token);
  const [info, setInfo] = useState();

  const fecthDashboard = async () => {
    try {
      const res = await fetch(
        process.env.REACT_APP_API_URL + `/admin/dashboard`,
        {
          headers: {
            Authorization: token,
          },
          credentials: "include",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        throw Error("Loading failed !");
      }
      setInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Data", info);
  useEffect(() => {
    fecthDashboard();
  }, []);
  return (
    <div className={classes.dashboardWrapper}>
      {info && (
        <>
          <div className={classes.widgets}>
            <Widget type="users" item={info.countUser} icon={<BiUser />} />
            <Widget type="earning" item={info.totalOrder} icon={<BiMoney />} />
            <Widget type="orders" item={info.countOrder} icon={<BiFile />} />
          </div>
          <h2> Order History</h2>
          <div className={classes.title}>
            <h3>ID USER</h3>
            <h3>USER NAME</h3>
            <h3>PHONE</h3>
            <h3>ADDRESS</h3>
            <h3>TOTAL</h3>
            <h3>DELIVERY</h3>
            <h3>STATUS</h3>
            <h3>DETAIL</h3>
          </div>
          <Order order={info.orders} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
