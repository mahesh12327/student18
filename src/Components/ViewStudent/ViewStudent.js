import { useContext, useState } from "react";
import studentContext from "../Store/Context";
import "./ViewStudent.css";

const ViewStudent = () => {
  const ctx = useContext(studentContext);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [address, setAddress] = useState("");

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
                {isEdit && student.id === id ? (
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={student.name}
                      onChange={(event) => setName(event.target.value)}
                    ></input>
                  </td>
                ) : (
                  <td>{student.name}</td>
                )}
                {isEdit && student.id === id ? (
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      defaultValue={student.rollNo}
                      onChange={(event) => setRollNo(event.target.value)}
                    ></input>
                  </td>
                ) : (
                  <td>{student.rollNo}</td>
                )}
                {isEdit && student.id === id ? (
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={student.studentClass}
                      onChange={(event) => setStudentClass(event.target.value)}
                    ></input>
                  </td>
                ) : (
                  <td>{student.studentClass}</td>
                )}
                {isEdit && student.id === id ? (
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={student.address}
                      onChange={(event) => setAddress(event.target.value)}
                    ></input>
                  </td>
                ) : (
                  <td>{student.address}</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewStudent;
