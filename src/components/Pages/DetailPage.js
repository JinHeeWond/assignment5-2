import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Shared/Header";

function DetailPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const student = location.state?.student;

  if (!student) {
    // 학생 데이터가 없으면 리스트 페이지로 리디렉션
    navigate("/list");
    return null;
  }

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h1>Student Details</h1>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Age:</strong> {student.age}</p>
        <p><strong>City:</strong> {student.city}</p>
        <p><strong>Job:</strong> {student.job}</p>
      </div>
    </div>
  );
}

export default DetailPage;
