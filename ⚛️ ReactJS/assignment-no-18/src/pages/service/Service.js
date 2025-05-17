import { useState } from  "react"
import { Button } from "@mui/material";
import Card from "../../component/card/Card"



export default function Service() {
  const [flag, setFlag] = useState(true);
  const [email, setEmail] = useState("test@test.com");






  return (
    <div>
  <Card data={flag} email={email} />
    <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
      <h1>Hello, Next.js!</h1>
      <Button variant="contained" onClick={()=>setFlag(!flag)} color="success">
  Success
</Button>
    </div>
  );
}