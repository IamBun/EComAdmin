import classes from "./widget.module.css";
import { editPrice } from "../../store/function";

const Widget = (props) => {
  console.log(props.item);
  return (
    <>
      <div className={classes.widget}>
        <div className={classes.left}>
          <h2 className={classes.info}>
            {props.item > 100000 ? editPrice(props.item) : props.item}
          </h2>
          <h3 className={classes.title}>{props.type}</h3>
        </div>
        <div className={classes.right}>{props.icon}</div>
      </div>
    </>
  );
};

export default Widget;
