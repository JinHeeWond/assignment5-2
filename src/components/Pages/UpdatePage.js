import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Shared/Header";

function UpdatePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const student = location.state?.student;

  const [name, setName] = useState(student?.name || "");
  const [age, setAge] = useState(student?.age || "");
  const [city, setCity] = useState(student?.city || "");
  const [job, setJob] = useState(student?.job || "");

  // 각 input 필드에 대한 useRef 생성
  const nameRef = useRef();
  const ageRef = useRef();
  const cityRef = useRef();
  const jobRef = useRef();

  if (!student) {
    // 학생 데이터가 없으면 리스트 페이지로 리디렉션
    navigate("/list");
    return null;
  }

  const handleSave = async () => {
    // 유효성 검사
    if (!name) {
      alert("Name is required!");
      nameRef.current.focus(); // name 필드로 포커스 이동
      return;
    }
    if (!age || isNaN(age)) {
      alert("Age is required and must be a number!");
      ageRef.current.focus(); // age 필드로 포커스 이동
      return;
    }
    if (!city) {
      alert("City is required!");
      cityRef.current.focus(); // city 필드로 포커스 이동
      return;
    }
    if (!job) {
      alert("Job is required!");
      jobRef.current.focus(); // job 필드로 포커스 이동
      return;
    }

    // 데이터를 서버에 저장
    await fetch(`https://672a2983976a834dd0226279.mockapi.io/api/vi/data/${student.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age, city, job }),
    });

    // 리스트 페이지로 이동
    navigate("/list");
  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <h1>Edit Student</h1>
        <input
          ref={nameRef} // ref 연결
          className="form-control mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          ref={ageRef} // ref 연결
          className="form-control mb-3"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />
        <input
          ref={cityRef} // ref 연결
          className="form-control mb-3"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
        />
        <input
          ref={jobRef} // ref 연결
          className="form-control mb-3"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          placeholder="Job"
        />
        <button className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default UpdatePage;
