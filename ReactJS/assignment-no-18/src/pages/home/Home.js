import { useState } from "react";
import TableItem from "../../component/tableItem/TableItem";
import AddStudent from "../../component/addStudent/AddStudent";
import "./home.css";

export default function Home() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Ali",
      rollNo: "56",
      email: "Ali56@gmail.com",
    },
    {
      id: 2,
      name: "John",
      rollNo: "67",
      email: "John67@gmail.com",
    },
    {
      id: 3,
      name: "David",
      rollNo: "78",
      email: "David78@gmail.com",
    },
    {
      id: 4,
      name: "Emma",
      rollNo: "89",
      email: "Emma89@gmail.com",
    },
  ]);

  const [currentStudent, setCurrentStudent] = useState({});

  const onClickUpdateHandler = (Student) => {
    // console.log("onClickDeleteHandler", Student)
    setCurrentStudent(Student);
  };

  const onUpDateHandler = (student, id) => {
    console.log("onUpDateHandler", student, id);
    let newData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          name: student.name,
          email: student.email,
          rollNo: student.rollNo,
        };
      }
      return item;
    });
    setData(newData);
    setCurrentStudent(null);
  };

  console.log("Student in Home 1 ====>", currentStudent);

  const onClickDeleteHandler = (id) => {
    console.log("ID in Parent", id);
    let newdata = data.filter((item) => item.id !== id);
    setData(newdata);
  };

  const onAddStudent = (Student) => {
    // console.log("Student in  Home", Student)
    setData([
      ...data,
      {
        id: data.length + 1,
        name: Student.name,
        rollNo: Student.rollNo,
        email: Student.email,
      },
    ]);
  };

  console.log("Student in Home ====>", currentStudent);

  return (
    <div>
      <AddStudent
        onUpDateHandler={onUpDateHandler}
        currentStudent={currentStudent}
        onAddStudent={onAddStudent}
      />
      <table>
        <div>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>RollNo</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>

          {data.map((item) => {
            return (
              <TableItem
                item={item}
                onClickUpdateHandler={onClickUpdateHandler}
                onClickDeleteHandler={onClickDeleteHandler}
              />
            );
          })}
        </div>
      </table>
    </div>
  );
}
