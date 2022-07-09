import "./App.css";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";
import { itemsMock } from "./mockData";
import ProductListing from "./components/ProductListing";
import CartItems from "./components/CartItems";

function App() {
  const [products] = useState(itemsMock);
  const [cartItems, setCartItems] = useState([]);
  const [input, setInput] = useState("");
  const addItems = (product) => {
    if (product) {
      setCartItems([...cartItems, product]);
    }
  };
  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALANAI_URL,
      onCommand: (commandData) => {
        setInput(commandData.data);
      },
    });
  }, []);

  useEffect(() => {
    addItems(
      products.filter((product) => {
        if (product.name.toLowerCase() === input) {
          return { ...product };
        }
      })[0]
    );
  }, [input]);
  return (
    <div>
      <h1>All Products</h1>
      <div className="product-list-items">
        {products.map((product) => (
          <div className="product-item">
            <ProductListing product={product} addItems={addItems} />
          </div>
        ))}
      </div>

      {cartItems.length > 0 ? <h1>Cart Items</h1> : <></>}
      <div className="product-list-items">
        {cartItems.length > 0 &&
          cartItems.map((cartItem) => (
            <>
              {cartItem && (
                <div className="product-item">
                  <CartItems cartItem={cartItem} />
                </div>
              )}
            </>
          ))}
      </div>
    </div>
  );
}

export default App;
