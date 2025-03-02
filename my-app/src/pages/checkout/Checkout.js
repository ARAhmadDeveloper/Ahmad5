import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./checkout.css";

function Checkout() {
  const carted = useSelector((store) => store.cartProduct.cartItems) || [];
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 200); // Smooth animation delay
  }, []);

  const totalPrice = carted.reduce(
    (acc, item) => acc + item.mobilePrice * item.quantity,
    0
  );
  const gst = (5 / 100) * totalPrice;
  const finalPrice = totalPrice + gst + 5; // $5 delivery charge

  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/address");
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Your Cart</h1>
      {carted.length > 0 ? (
        <div className="cart-items">
          {carted.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.mobileImage} alt={product.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2 className="cart-item-title">{product.mobileName}</h2>
                <p className="cart-item-desc">{product.mobileDescription}</p>
                <p className="cart-item-price">Price: ${product.mobilePrice}</p>
                <p className="cart-item-qty">Quantity: {product.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-cart-message">Your cart is empty.</p>
      )}

      {totalPrice > 0 && (
        <div className={`checkout-summary ${isLoaded ? "show" : ""}`}>
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <h3>GST (5%): ${gst.toFixed(2)}</h3>
          <h3>Delivery Charges: $5.00</h3>
          <h3 className="final-amount">Final Amount: ${finalPrice.toFixed(2)}</h3>
          <button className="checkout-button" onClick={handleOrder}>
            Proceed to Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
