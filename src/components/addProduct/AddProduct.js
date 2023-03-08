import { useSelector } from "react-redux";
import classes from "./addProduct.module.css";
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const token = useSelector((state) => state.currentUser.token);
  const nameInputRef = useRef();
  const priceInputRef = useRef();
  const categoryInputRef = useRef();
  const longdescInputRef = useRef();
  const shortdescInputRef = useRef();
  const imagesInputRef = useRef();
  const [fileList, setFileList] = useState();
  const files = fileList ? [...fileList] : [];
  const navigate = useNavigate();

  // console.log("fileList", fileList);
  // console.log("files", files);

  const submitForm = async (e) => {
    try {
      e.preventDefault();
      const enterNameInputRef = nameInputRef.current.value;
      const enterCategoryInputRef = categoryInputRef.current.value;
      const enterPriceInputRef = priceInputRef.current.value;
      const enterLongdescInputRef = longdescInputRef.current.value;
      const enterShortdescInputRef = shortdescInputRef.current.value;

      // if (!fileList) {
      //   throw new Error("No file chosen !");
      // }

      console.log("filelist:", fileList);

      let data = new FormData();

      data.append("name", enterNameInputRef);
      data.append("price", enterPriceInputRef);
      data.append("category", enterCategoryInputRef);
      data.append("long_desc", enterLongdescInputRef);
      data.append("short_desc", enterShortdescInputRef);
      for (let i = 0; i < files.length; i++) {
        data.append("images", files[i]);
      }

      const res = await fetch(process.env.API_URL + `/admin/addproduct`, {
        credentials: "include",
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: data,
      });
      const result = await res.json();
      if (!res.ok) {
        toast.error(`${result.message}`);
        throw new Error("Loading failed !");
      }
      // const result = await res.json();
      toast.success(`${result.message}`);
      setTimeout(() => {
        navigate("/product");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    setFileList(e.target.files);
  };

  return (
    <div className={classes.addProductWrapper}>
      <h2>Add New Product</h2>
      <form onSubmit={submitForm}>
        <div className={classes.field}>
          <label>Product Name</label>
          <input type="text" id="name" ref={nameInputRef}></input>
        </div>
        <div className={classes.field}>
          <label>Category</label>
          <input type="text" id="category" ref={categoryInputRef}></input>
        </div>
        <div className={classes.field}>
          <label>Price</label>
          <input type="number" id="price" ref={priceInputRef}></input>
        </div>
        <div className={classes.field}>
          <label>Short Description</label>
          <textarea row="4" id="longdesc" ref={shortdescInputRef}></textarea>
        </div>
        <div className={classes.field}>
          <label>Long Description</label>
          <textarea rows="4" id="shortdesc" ref={longdescInputRef}></textarea>
        </div>
        <div className={classes.field}>
          <label>Images (4 images )</label>
          <input
            type="file"
            id="images"
            name="images"
            ref={imagesInputRef}
            multiple
            onChange={handleFileChange}
          ></input>
        </div>
        <button type="submit" id="add">
          Add Product
        </button>
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

export default AddProduct;
