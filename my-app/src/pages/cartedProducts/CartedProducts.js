import { useDispatch, useSelector } from "react-redux";
import "./cartedProducts.css";
import { increaseQuantity } from "../../store/slices/cartSlice";

function CartedProducts() {
  const carted = useSelector((store) => store.cartProduct.cartItems) || []; // Ensure default to []
  console.log("carted ========>>>>>>>>>>________++_+_+_+", carted);
  const totalPrice = carted.reduce(
    (acc, item) => acc + item.mobilePrice * item.quantity,
    0
  );

  const dispatch = useDispatch();
  console.log("Total Price ===-=-=-", totalPrice.toFixed(2));

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
      <h3 className="totalPrice">Total Price:eryth ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default CartedProducts;
