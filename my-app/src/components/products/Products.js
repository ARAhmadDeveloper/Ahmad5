import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/productSlice";
import { useEffect } from "react";
import { store } from "../../store/store";



function Products() {
  const dispatch = useDispatch();
  const products = useSelector(store => store?.products?.products);
  console.log(store)
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
     <h1>Hello World ggj</h1>
     <div>
  {products.map((product) => {
    return <div key={product.id}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
    </div>
  })}
</div>

    </div>
  );
}

export default Products;



//displaying products in this page