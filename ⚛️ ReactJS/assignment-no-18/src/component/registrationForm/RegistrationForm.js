import { useState } from 'react';
import { Button } from '@mui/material';
// import { green } from '@mui/material/colors';




export default function RegistrationForm(props) {
  
  const [userId, setuserId] = useState("");

  const [userPassword, setuserPassword] = useState("");

  const [userName, setUserName] = useState("");

  const [userAdress, setUserAdress] = useState("");

  const [email, setemail] = useState("");

  const [gender, setGender] = useState("")

  const [language, setLanguage] = useState("")

  const[zipCode, setzipCode] = useState("");

  const [aboutuser, setAboutUser] = useState("")





  
    const onClickChange = ()=>{
      if(userId == ''){
        alert("Please enter User ID")
        return;
      }
      if(userPassword == ''){
        alert("Please enter your Password")
        return;
      }
      const userData = {
        userId: userId,
        password: userPassword,
        userName: userName,
        Adress: userAdress,
        email: email,
        Gender: gender,
        Language: language,
        ZipCode: zipCode,
        AboutUser: aboutuser
    
      }
      
  
    }
    const userIdFunc = (e) => {
      
      setuserId(e.target.value);
      console.log("Changed",e.target.value)
      
    }

    const userPasswordFunc = (e) => {
      
      setuserPassword(e.target.value)
      
    }

    const userNameFunc = (e) => {
      
      setUserName(e.target.value)
      
    }

    const userAdressFunc = (e) => {
      setUserAdress(e.target.value)
    }

    const emailFunc = (e) => {
      setemail(e.target.value)
    }

    const genderFunc = (e) => {
      setGender(e.target.value)
    }

    const languageFunc = (e) => {
      setLanguage(e.target.value)
    }

    const zipCodeFunc = (e) => {
      setzipCode(e.target.value)
    }

    const aboutUserFunc = (e) => {
      setAboutUser(e.target.value)
    }
    




    // const allUserData = () => {
    //   <h1>Entered User ID is : {userId}</h1> 
    // }
    





 
    // console.log("userPassword in Component" , userId)
  return (
    <div className="container" style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
        <div className="container2">
        <h1>Registration Form</h1>
        <label for='user'>User ID : </label>
        <input type="text" style={{border: `2px solid ${userId.length <= 5 || userId.length > 12 ? 'red' : 'green'}`}} onChange={userIdFunc} placeholder="Enter User ID" id="user" name="user" required />
        {/* <h1>Entered User ID is : {userId}</h1> */}
        <br />
        <label for="password">Password : </label>
        <input type="password" onChange={userPasswordFunc} id="password" placeholder="Enter Password" name="password" required />
        {/* <h1>Entered Password is : {userPassword}</h1> */}
        <br />
        <label for='name'>Name : </label>
        <input type="text" onChange={userNameFunc} placeholder="Enter your Name" id="name" name="name" required />
        {/* <h1>Entered userName is : {userName}</h1> */}

        <br />
        <label for='adress'>Adress : </label>
        <input type="adress" onChange={userAdressFunc} placeholder="Enter your Adress" id="adress" name="adress"  />
        {/* <h1>Entered UserAdress is : {userAdress}</h1> */}
        <br />
{/* Country */}

        <label for='email'>Email : </label>
        <input type="email" onChange={emailFunc} placeholder="Enter your Email" id="email" name="email" required />
        {/* <h1>Entered userEmail is : {email}</h1> */}
        <br />
        <span>Sex : </span>
        
        <input type="radio" onChange={genderFunc} id="male" name="sex" value="male" required />
        <label for='male'>Male</label>
        <input type="radio" onChange={genderFunc} id="female" name="sex" value="female" required />
        <label for='female'>Female</label>
        {/* <div>User Gender is: {gender}</div> */}
        <br/>
        <span>Language</span>
        <input type="checkbox" onChange={languageFunc} name="checkbox" value="English" id="checkbox" />
        <label for='checkbox'>English</label>
        <input type='checkbox' onChange={languageFunc} name="checkbox1" value="Non English" id="checkbox1" />
        <label for="checkbox1">Non English</label>
        {/* <div>User Languages are: {language}</div> */}
<br/>

        <label for='email'>Zip Code : </label>
        <input type="number" id="email" onChange={zipCodeFunc} placeholder="Enter Zip Code" name="email" required />
        {/* <h3>user ZipCode is : {zipCode}</h3> */}
        <br />
        <label for='about'>About : </label>
        <textarea id="about" onChange={aboutUserFunc} name="about" rows="4" cols="30" ></textarea>
          {/* <h3>UserAbout is : {aboutuser} </h3> */}
<br/>





<Button variant="contained" onClick={onClickChange} color="success">
        Submit
      </Button>
        </div>
    </div>
  );
}