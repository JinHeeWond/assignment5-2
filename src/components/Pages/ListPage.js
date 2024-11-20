import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Shared/Header";

function ListPage() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const fetchStudents = async () => {
    const response = await fetch("https://672a2983976a834dd0226279.mockapi.io/api/vi/data");
    const data = await response.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`https://672a2983976a834dd0226279.mockapi.io/api/vi/data/${id}`, {
      method: "DELETE",
    });
    fetchStudents();
  };

  const handleView = (student) => {
    navigate("/detail", { state: { student } }); // 학생 데이터를 상태로 전달
  };

  const handleEdit = (student) => {
    navigate("/update", { state: { student } }); // 학생 데이터를 상태로 전달
  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h1>Student List</h1>
        <ul className="list-group mt-3">
          {students.map((student) => (
            <li key={student.id} className="list-group-item d-flex justify-content-between">
              {student.name} ({student.age}, {student.city}, {student.job})
              <div>
                <button className="btn btn-info me-2" onClick={() => handleView(student)}>
                  View
                </button>
                <button className="btn btn-secondary me-2" onClick={() => handleEdit(student)}>
                  Edit
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(student.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListPage;
