import { useDispatch, useSelector } from "react-redux";
import "./orders.css"; // Import external CSS
import { useNavigate } from "react-router-dom";

export default function Orders() {
  const carted = useSelector((store) => store.cartProduct.cartItems) || []; // Ensure default to []
  // console.log("carted ========>>>>>>>>>>________++_+_+_+", carted);
  const totalPrice = carted.reduce(
    (acc, item) => acc + item.mobilePrice * item.quantity,
    0
  );
  const gst = (5 / 100) * totalPrice;
  const finalPrice = totalPrice + gst + 5; // $5 delivery charge




  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log("Total Price ===-=-=-", totalPrice.toFixed(2));

  const handleOrder = (e) => {
    navigate("/checkout"); // Redirect to order summary page
  };

  const allAddressData = useSelector((store) => store.address.addresses || []);

  console.log("allAddressData =======>>>>>>>>>>", allAddressData);

  if (allAddressData.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          color: "#fff",
          fontSize: "3rem",
        }}
      >
        <h1 className="no-orders">No orders found.</h1>
      </div>
    );
  }
  return (
    <div className="order-history">
      <h1 className="order-heading">All Order History</h1>
  
      <div className="order-container">
        {/* Left Side - Orders */}
        <div className="order-list">
          {allAddressData.map((address, index) => (
            <div key={index} className="order-box">
              <h2>Order #{index + 1}</h2>
              <p><strong>Name:</strong> {address.name}</p>
              <p><strong>Email:</strong> {address.email}</p>
              <p><strong>Address:</strong> {address.address}</p>
              <p><strong>City:</strong> {address.city}</p>
              <p><strong>Postal Code:</strong> {address.postalCode}</p>
            </div>
          ))}
        </div>
  
        {/* Right Side - Products */}
        <div className="cart-list">
          {carted.map((product, index) => (
            <div key={index} className="cart-box">
              <img src={product.mobileImage} alt={product.mobileName} className="cart-photo" />
              <div className="cart-info">
                <h2>{product.mobileName}</h2>
                <p className="cart-price">Price: ${product.mobilePrice}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
          <h3 className="finalBtn">Final Amount: ${finalPrice.toFixed(2)}</h3>
    </div>
  );
  
  
//   return (
//     <div className="">
//       <h1 className="">All Order History</h1>
//       <div className="">
//         {carted.length > 0 ? (
//           carted.map((product) => (
//             <div
//               key={product.id}
//               id={`product-${product.id}`}
//               className=""
//             >
//               <img
//                 src={product.mobileImage}
//                 alt={product.name}
//                 className="cart-image"
//               />
//               <div className="cart-info">
//                 <h2>{product.mobileName}</h2>
//                 <p className="price">Price: ${product.mobilePrice}</p>
//                 <p>Quantity: {product.quantity}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p
//             className="empty-cart"
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             No products in cart.
//           </p>
//         )}
//         {totalPrice <= 1 ? (
//           ""
//         ) : (
//           <div>
//             {/* <h3 className="totalPrice">Total Price: ${totalPrice.toFixed(2)}</h3> */}
//             <button className="orderNowBtn" onClick={handleOrder}>
//               Checkout
//             </button>
//           </div>
//         )}
//       </div>
//       <div className="orders-list">
//         {allAddressData.map((address, index) => (
//           <div key={index} className="order-card">
//             <h2>Order #{index + 1}</h2>
//             <p>
//               <strong>Name:</strong> {address.name}
//             </p>
//             <p>
//               <strong>Email:</strong> {address.email}
//             </p>
//             <p>
//               <strong>Address:</strong> {address.address}
//             </p>
//             <p>
//               <strong>City:</strong> {address.city}
//             </p>
//             <p>
//               <strong>Postal Code:</strong> {address.postalCode}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
}
