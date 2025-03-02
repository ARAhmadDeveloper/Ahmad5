import { useSelector } from "react-redux";
import "./orders.css"; // Import external CSS

export default function Orders() {
    const allAddressData = useSelector((store) => store.address.addresses || []);

    console.log("allAddressData =======>>>>>>>>>>", allAddressData);

    if (allAddressData.length === 0) {
        return(
            <div  style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                color: "#fff",
                fontSize: "3rem",
            }}>
         <h1 className="no-orders">No orders found.</h1>
         </div>
        )
    }

    return (
        <div className="orders-container">
            <h1 className="orders-title">All Order History</h1>
            <div className="orders-list">
                {allAddressData.map((address, index) => (
                    <div key={index} className="order-card">
                        <h2>Order #{index + 1}</h2>
                        <p><strong>Name:</strong> {address.name}</p>
                        <p><strong>Email:</strong> {address.email}</p>
                        <p><strong>Address:</strong> {address.address}</p>
                        <p><strong>City:</strong> {address.city}</p>
                        <p><strong>Postal Code:</strong> {address.postalCode}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

