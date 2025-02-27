import { useDispatch, useSelector } from "react-redux";
import "./cartedProducts.css";
import { descreaseQuantity, increaseQuantity, removeFromCart } from "../../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";

function CartedProducts() {
  const carted = useSelector((store) => store.cartProduct.cartItems) || []; // Ensure default to []
  // console.log("carted ========>>>>>>>>>>________++_+_+_+", carted);
  const totalPrice = carted.reduce(
    (acc, item) => acc + item.mobilePrice * item.quantity,
    0
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log("Total Price ===-=-=-", totalPrice.toFixed(2));


  const handleOrder = (e) => {
    navigate("/address"); // Redirect to order summary page
  };




  return (
    <div className="cart-container">
      <h1>Carted Products</h1>

      {carted.length > 0 ? (
        carted.map((product) => (
          <div
            key={product.id}
            id={`product-${product.id}`}
            className="cart-item"
          >
            <img
              src={product.mobileImage}
              alt={product.name}
              className="cart-image"
            />
            <div className="cart-info">
              <h2>{product.mobileName}</h2>
              <p>{product.mobileDescription}</p>
              <p className="price">Price: ${product.mobilePrice}</p>
              <p>Quantity: {product.quantity}</p>
              <button
                className="increase-btn"
                onClick={() => dispatch(increaseQuantity(product.mobileId))}
              >
                +
              </button>
              {product.quantity <= 1 ? <button
              className="delete-btn"
              onClick={() => dispatch(removeFromCart(product.mobileId))}
              >Remove</button> :
              <button
              className="decrease-btn"
              onClick={() => dispatch(descreaseQuantity(product.mobileId))}
              >
                -
              </button>
              }
            </div>
          </div>
        ))
      ) : (
        <p
          className="empty-cart"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          No products in cart.
        </p>
      )}
      {totalPrice <= 1 ? "" :
      <div>
      <h3 className="totalPrice">Total Price: ${totalPrice.toFixed(2)}</h3>
      <button className="orderNowBtn" onClick={handleOrder}>Order Now</button>
      </div>
}
    </div>
  );
}

export default CartedProducts;
