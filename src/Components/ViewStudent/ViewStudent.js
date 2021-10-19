import { useContext } from "react";
import studentContext from "../Store/Context";
import "./ViewStudent.css";

const ViewStudent = () => {
  const ctx = useContext(studentContext);

  return (
    <div className="ViewStudent">
      <h2 className="text-dark mb-3">Student List</h2>
      <table className="table table-striped ">
        <thead className="myTable">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Rollno</th>
            <th scope="col">Class</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {ctx.students.map((student) => {
            return (
              <tr key={student.id} className="myTable">
                <td>{student.name}</td>
                <td>{student.rollNo}</td>
                <td>{student.studentClass}</td>
                <td>{student.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewStudent;
