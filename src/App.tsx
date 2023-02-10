import React,{useState} from "react";
import "./App.css";
import Header from "./components/header/header";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/footer";



function App() {
 
  const [isModal, setModal] = useState<Boolean>(true);

   const modal = () => {
     setModal(!isModal);
    };
  return (
    <div className="App">
      <Header />
      <Cart modal={modal} isModal={isModal} />
      <Footer />
    </div>
  );
}

export default App;
