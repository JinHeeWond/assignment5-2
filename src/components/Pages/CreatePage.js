import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Shared/Header";

function CreatePage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [job, setJob] = useState("");
  const navigate = useNavigate();

  // 각 input 필드에 대한 useRef 생성
  const nameRef = useRef();
  const ageRef = useRef();
  const cityRef = useRef();
  const jobRef = useRef();

  const handleSave = async () => {
    // 유효성 검사
    if (!name) {
      nameRef.current.focus();
      alert("Name is required!");
      return;
    }
    if (!age || isNaN(age)) {
      ageRef.current.focus();
      alert("Age is required and must be a number!");
      return;
    }
    if (!city) {
      cityRef.current.focus();
      alert("City is required!");
      return;
    }
    if (!job) {
      jobRef.current.focus();
      alert("Job is required!");
      return;
    }

    // 데이터를 서버에 저장
    await fetch("https://672a2983976a834dd0226279.mockapi.io/api/vi/data", {
      method: "POST",
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
        <h1>Add Student</h1>
        <input
          ref={nameRef} // ref 연결
          className="form-control mb-3"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          ref={ageRef} // ref 연결
          className="form-control mb-3"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          ref={cityRef} // ref 연결
          className="form-control mb-3"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          ref={jobRef} // ref 연결
          className="form-control mb-3"
          placeholder="Job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreatePage;
