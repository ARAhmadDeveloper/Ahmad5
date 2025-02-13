import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../constant/constant'; // Your data
import './productDetail.css'; // Import the CSS for styling

function ProductDetail() {
  // Get the product ID from the URL
  const { id } = useParams();

  // Find the product from data using the ID
  const product = data.find((item) => item.mobileId === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <div className="product-image">
          <img src={product.mobileImage} alt={product.mobileName} />
        </div>
        <div className="product-info">
          <h1> <strong>Model Name - </strong> {product.mobileName}</h1>
          <p><strong>Description - </strong> {product.mobileDescription}</p>
          <p><strong>Price:</strong> ${product.mobilePrice}</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
