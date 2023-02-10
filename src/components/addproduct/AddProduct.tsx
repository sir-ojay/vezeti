import React from "react";
import './addproduct.css'

const AddProduct = ({modal}:{modal:()=>{}}) => {
  return (
    <div className="newprduct__wrapper">
      <form className="newprduct__container">
        <div className="formInput">

          <p onClick={modal}>x</p>
        
          <input
            type="file"
            id="file"
            accept=".jpg, .jpeg, .png"
         
          />
        </div>
        <div>
          <input type="text" placeholder="id" id="product_input" />
        </div>
        <div>
          <input type="text" placeholder="name" id="product_input" />
        </div>

        <div>
          <input type="text" placeholder="price" id="product_input" />
        </div>
        <button id="btn__submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;  
