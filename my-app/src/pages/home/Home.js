import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../constant/constant'; // Your data
import './home.css'; // Make sure to import the CSS file

function Home() {
  return (
    <div className="home-page">
      <h1>Mobile Products</h1>
      <div className="product-list">
        {data.map((product) => (
          <div key={product.mobileId} className="product-item">
            <Link to={`/product/${product.mobileId}`} className="product-link">
              <img src={product.mobileImage} alt={product.mobileName} />
              <h2>{product.mobileName}</h2>
              <p>{product.mobileDescription}</p>
              <div className="price">${product.mobilePrice}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { data } from '../../constant/constant'; // Your data
// import './home.css'; // Make sure to import the CSS file

// function Home() {
//   return (
//     <div className="home-page">
//       <h1>Mobile Products</h1>
//       <div className="product-list">
//         {data.map((product) => (
//           <div key={product.mobileId} className="product-item">
//             <Link to={`/product/${product.mobileId}`} className="product-link">
//               <img src={product.mobileImage} alt={product.mobileName} className="product-image"/>
//               <h2>{product.mobileName}</h2>
//               <p><strong>Color:</strong> {product.mobileColor}</p>
//               <p><strong>RAM:</strong> {product.mobileRAM}</p>
//               <p><strong>Storage:</strong> {product.mobileStorage}</p>
//               <p>{product.mobileDescription}</p>
//               <div className="price">${product.mobilePrice}</div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;


