import { useEffect } from "react";
import { useContext } from "react";
import { Link, Route } from "react-router-dom";
import AddStudent from "../AddStudent/AddStudent";
import studentContext from "../Store/Context";

import ViewStudent from "../ViewStudent/ViewStudent";
import "./Dashboard.css";
let initial = true;
const Dashboard = (props) => {
  const ctx = useContext(studentContext);
  useEffect(() => {
    if (initial) {
      const getRequest = async () => {
        const response = await fetch(
          "https://studentproject-d7e8a-default-rtdb.firebaseio.com/students.json"
        );
        let data = await response.json();
        if (!data) {
          data = [];
        }
        ctx.replaceStudents(data);
      };
      getRequest();
      initial = false;
    }
  }, [ctx]);
  useEffect(() => {
    postHttpRequest(ctx.students);
  }, [ctx.students]);
  const postHttpRequest = async (data) => {
    const response = await fetch(
      "https://studentproject-d7e8a-default-rtdb.firebaseio.com/students.json",
      { method: "PUT", body: JSON.stringify(data) }
    );
    console.log(response);
  };
  return (
    <div className="Dashboard">
      <div className="">
        <ul class="nav flex-column">
          <li class="nav-item">
            <Link class="nav-link active" to="/addStudents">
              Add Student
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/viewStudents">
              View Students
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/editStudents">
              Edit Students
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link " to="/deleteStudents">
              Delete Students
            </Link>
          </li>
          <li
            class="nav-item"
            onClick={(event) => {
              event.preventDefault();
              props.logout();
            }}
          >
            <Link class="nav-link " to="/">
              Logout
            </Link>
          </li>
        </ul>
      </div>
      <div className="matter me-3">
        <Route path="/" exact>
          <ViewStudent></ViewStudent>
        </Route>
        <Route path="/addStudents">
          <AddStudent></AddStudent>
        </Route>
        <Route path="/viewStudents">
          <ViewStudent></ViewStudent>
        </Route>
        <Route path="/editStudents">
          <ViewStudent></ViewStudent>
        </Route>
        <Route path="/deleteStudents">
          <ViewStudent></ViewStudent>
        </Route>
      </div>
    </div>
  );
};

export default Dashboard;
