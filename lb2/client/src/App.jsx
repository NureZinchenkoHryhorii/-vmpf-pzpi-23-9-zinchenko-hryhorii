import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orderMessage, setOrderMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setOrderMessage("");
  };

  const checkout = () => {
    if (cart.length === 0) {
      setOrderMessage("Кошик порожній");
      return;
    }

    setOrderMessage("Замовлення успішно оформлено!");
    setCart([]);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <h1>Каталог товарів</h1>

      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>Ціна: {product.price} грн</p>
            <button onClick={() => addToCart(product)}>
              Додати в кошик
            </button>
          </div>
        ))}
      </div>

      <h2>Кошик</h2>

      {cart.length === 0 ? (
        <p>Кошик порожній</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} — {item.price} грн
            </li>
          ))}
        </ul>
      )}

      <h3>Загальна сума: {totalPrice} грн</h3>

      <button onClick={checkout}>Оформити замовлення</button>

      <p>{orderMessage}</p>
    </div>
  );
}

export default App;