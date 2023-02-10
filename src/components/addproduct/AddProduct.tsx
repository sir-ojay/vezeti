import React ,{ useState } from "react";
import './addproduct.css'

interface  INewProduct {
 modal:()=>{};
 handleAddProduct:any
 productImage:string
 productId:number
}
const AddProduct = ({modal, handleAddProduct,productImage, productId}:INewProduct ) => {
  const [name,setName] = useState("")
  const [price,setPrice] = useState("")
  const AddForm = (e: React.MouseEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!name|| !price){
      alert("Please fill all input")
      return 
    }
    handleAddProduct(productId+1,name,`NGN ${price}`, productImage)
    modal()
    return 
  }
  return (
    <div className="newprduct__wrapper">
      <form className="newprduct__container"
      
      onSubmit={AddForm}
      >
        <div className="formInput">
          <p onClick={modal}>x</p>
        </div>
        
        <div>
          <input
          value={name}
         onChange={(e: { target: { value: React.SetStateAction<string>; }; })=>{setName(e.target.value)}}
          type="text" placeholder="name" id="product_input" />
        </div>

        <div>
          <input 
          value={price}
         onChange={(e: any)=>{setPrice(e.target.value)}}
          type="number" placeholder="price" id="product_input" />
        </div>
        <button id="btn__submit">Add Product</button>
      </form>
      
    </div>
  );
};

export default AddProduct;  
