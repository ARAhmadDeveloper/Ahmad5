import { useSelector } from "react-redux";
import "./cartedProducts.css";

function CartedProducts() {
  const carted = useSelector((store) => store.cartProduct.cartItems) || []; // Ensure default to []
  console.log("carted ========>>>>>>>>>>________++_+_+_+", carted);

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
            </div>
          </div>
        ))
      ) : (
        <p className="empty-cart" style={{display:"flex", justifyContent:"center",alignItems:"center"}}>No products in cart.</p>
      )}
    </div>
  );
}

export default CartedProducts;
