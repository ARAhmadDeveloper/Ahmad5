"use client"
import { useState } from "react";
import "../globals.css"

export default function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const signup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setSuccess("Form submitted successfully");
    }

    setName("");
    setAge("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
    setSuccess("");
    console.log(name, age, email, password, confirmPassword);
    console.log(error, success);
    console.log(e);
    console.log(e.target);

  };
  return (
    <div className="container">
        <form onSubmit={signup} className="form" placeholder="Enter your name">
            <input type="text" className="input" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" className="input" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} />
            <input type="email" className="input" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="input" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" className="input" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button type="submit" className="button">Submit</button>
            <p className="error">Error: {error}</p>
            <p className="success">Success: {success}</p>
            <p className="name">Name: {name}</p>
            <p className="age">Age: {age}</p>
            <p className="email">Email: {email}</p>
            <p className="password">Password: {password}</p>
            <p className="confirmPassword">Confirm Password: {confirmPassword}</p>
            
        </form>
    </div>
  );
}

