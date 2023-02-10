import React, { useState } from "react";
import cartImage from "../../assets/cart.jpeg";

import AddProduct from "../addproduct/AddProduct";
import "./cart.css";

interface Product {
  id: number;
  name: string;
  img: string;
  price: string;
}
const Cart = ({ isModal, modal }: { isModal: Boolean; modal: any }) => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "LG TV", img: cartImage, price: "NGN 150,000" },
    { id: 2, name: "AirPod", img: cartImage, price: "NGN 120,000" },
    { id: 3, name: "Laptop", img: cartImage, price: "NGN 180,000" },
    { id: 4, name: "Mac book", img: cartImage, price: "NGN 580,000" },
    { id: 5, name: "LG Speaker", img: cartImage, price: "NGN 100,000" },
  ]);

  // id, name, price and image.
  const handleAddProduct = (
    id: number,
    productName: string,
    productPrice: string,
    image: string
  ) => {
    const newProduct: Product = {
      id: products.length + 1,
      name: productName,
      price: productPrice,
      img: image,
    };
    setProducts([...products, newProduct]);
  };

  const handleRemoveProduct = (productId: number) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="cart_container">
      {!isModal && <AddProduct modal={modal} />}
      {/* <h1>Product List</h1> */}

      <input
        type="text"
        placeholder="Search"
        onChange={handleSearch}
        className="search__area"
      />

      <button onClick={modal} className="modal_button">
        Add Product
      </button>

      <div className="cart__container">
        <div className="cart__wapper">
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <div className="cart__flex">
                <div className="checkbox__wrapper">
                  <input type="checkbox" className="checkbox" />
                </div>
                <div className="product_id">
                  <p>{product.id}</p>
                </div>
                <div className="product_id">
                  <p>{product.name}</p>
                </div>
                <div className="image_wrapper">
                  <img src={product.img} alt="" className="cart_image" />
                </div>
                <div className="product_price">
                  <b>{product.price}</b>
                </div>
                <button
                  className="remove_button"
                  onClick={() => handleRemoveProduct(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <ul className="remove_cart">
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {/* {product.name}{" "} */}
              <button
                className="remove_button"
                onClick={() => handleRemoveProduct(product.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* <input
        type="text"
        placeholder="Enter product name"
        onChange={(e) => {
          handleAddProduct(e.target.value);
          // e.currentTarget.value = "";
        }}
      /> */}
    </div>
  );
};

export default Cart;
