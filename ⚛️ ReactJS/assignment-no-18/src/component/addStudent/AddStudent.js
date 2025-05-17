import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import * as yup from "yup";
import "./addStudent.css";

export default function AddStudent(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (props.currentStudent) {
      setName(props.currentStudent.name);
      setEmail(props.currentStudent.email);
      setRollNo(props.currentStudent.rollNo);
    }
  }, [props.currentStudent]);

  // console.log("Current Student in AddStudent =====>", props.currentStudent)

  let schema = yup.object({
    name: yup.string().max(12).min(4).required(),
    email: yup.string().email().required().typeError("Email must be a Valid"),
    rollNo: yup.number().required(),
  });

  const handleSubmit = async (Student) => {
    //    console.log("Name", name)
    //    console.log("Email", email)
    //    console.log("rollNo", number)

    let data = {
      name: name,
      email: email,
      rollNo: rollNo,
    };
    // props.onAddStudent(data);
    try {
      let result = await schema.validate(data);
      console.log("Console Result", result);
      setError("");
      props.currentStudent
        ? props.onUpDateHandler(data, props.currentStudent.id)
        : props.onAddStudent(data);
      setName("");
      setEmail("");
      setRollNo("");
    } catch (error) {
      console.log("Error Validation", error.toString());
      setError(error.toString());
    }
  };
  return (
    <div className="container">
<div className="counter">
      <Link
        to="/counterapp"
      >
        Counter App
      </Link>
</div>
      <h1>Student App By Ahmad Raza</h1>
      <div className="div">
        <form>
          <div className="inform">
            <h1>Student App</h1>
            <span style={{ color: "red", marginTop: "0" }}>{error}</span>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your Name"
                name="name"
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                name="email"
              />
            </label>
            <br />
            <label>
              RollNo:
              <input
                type="text"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                placeholder="Enter your Roll No"
                name="number"
              />
            </label>
            <br />
            <Button
              variant="contained"
              className="myBtn"
              onClick={handleSubmit}
            >
              {props.currentStudent ? "Update Student" : "Add Student"} 
            </Button>{" "}
            <br />
          </div>
        </form>
      </div>
    </div>
  );
}
