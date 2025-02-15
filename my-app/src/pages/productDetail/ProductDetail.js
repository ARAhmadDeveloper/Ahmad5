import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { data } from "../../constant/constant"; // Your data
import "./productDetail.css"; // Import the CSS for styling
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";

function ProductDetail() {
  // Get the product ID from the URL
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Find the product from data using the ID
  const product = data.find((item) => item.mobileId === parseInt(id));

  console.log("Products  ------------------------------", product);

  if (!product) {
    return <div>Product not found!</div>;
  }

  // add to cart product onCLick and save in redux store

  const onClickaddToCart = () => {
    dispatch(addToCart(product));
    navigate("/cartedProducts");
    console.log("Product added to cart", product);
  };
  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <div className="product-image">
          <img src={product.mobileImage} alt={product.mobileName} />
        </div>
        <div className="product-info">
          <h1>
            {" "}
            <strong>Model Name - </strong> {product.mobileName}
          </h1>
          <p>
            <strong>Description - </strong> {product.mobileDescription}
          </p>
          <p>
            <strong>Price:</strong> ${product.mobilePrice}
          </p>
          <button className="add-to-cart-btn" onClick={onClickaddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
