import { useNavigate } from "react-router-dom";
import Products from "../../components/products/Products";
import Navbar from "../../components/navbar/Navbar"
import { useState } from "react";


function Home(){
      const [isLoading, setIsLoading] = useState(true);
// console.log("isLoading",isLoading)
    const navigate = useNavigate();
    const Token = localStorage.getItem("token")
    // console.log("Token ========== <><><><><><><><><>",Token)
    try {
        if(Token === null){
            setTimeout(() => {
                setIsLoading(true)
                navigate("/login");
              }, 2000); 
        }else{
            
        return( 
            <div>
                <Navbar/>
                <Products />
            </div>
        )
    } 
    } catch (error) {
        console.log("Error",error)
        setIsLoading(false)
    }
 
}

export default Home;




