import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";


export function Counting() {
    let [addNum, setAddNum] = useState(0)

    // let [reverseNum, setReverseNum] = useState(addNum)

    const Counting = () => {
        addNum += 1;
        setAddNum(addNum)
        // console.log("counting = ", addNum)
    }

    const reverseCounting = () => {
      addNum -= 1;
      setAddNum(addNum);
      // console.log("Reverse Counting ====>>>>>>>>>", addNum);
    }



  return (
    <div>
          <Link
        to="/"
      >
       BackToHome
      </Link>
        <h1>
            CounterApp
        </h1>
        <h2>{addNum}</h2>
        
        <Button variant="contained" onClick={Counting} color="success">
 Adding
</Button>
        <Button variant="contained" onClick={reverseCounting} style={{marginLeft: "10px"}} color="success">
  Subtract
</Button>
    </div>
  );
}