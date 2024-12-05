import { useEffect, useState } from "react"





function Card(props){

    const [userName, setUserName] = useState("")

    useEffect(() => {
        console.log("First Inside Card.js");
    }, [])

    useEffect(() => {
        return() => {
            console.log(" Unmount / Card.js")
        }
    },[])

    useEffect(() => {
        console.log("Run when Email is Changed", props.email)
    },[props.email])
 
    useEffect(() => {
        console.log("Run when Data is Changed", props.data)
    },[props.data])

    useEffect(() => {
        console.log("EveryTime when the userName is Changed", userName)
    },[userName, props.email])
    

    console.log("Above The Card.js", props.data)
    return (
        <div>
            <h1 style={{fontSize: "100px"}}>Hello, World!</h1>
            <h1>Email = {props.email}</h1>

            <input type="text" onChange={(e)=>setUserName(e.target.value)} />
        </div>
    )
}

export default Card