import React, { useState, useEffect } from "react";
import axios from "axios";
import { QRCodeSVG } from 'qrcode.react';
import './App.css'; // Import the CSS file

function App() {
  const [students, setStudents] = useState([]);
  const [filters, setFilters] = useState({ class: "", rollNumber: "", name: "" });
  const [excelFile, setExcelFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState({ loading: false, message: "", error: "" });

  // Fetch student data from your deployed API
  useEffect(() => {
    axios
      .get("https://firebase-excel.onrender.com/students")
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  // Handle Excel file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setExcelFile(file);
    }
  };

  // Submit Excel file to the API
  const handleUploadSubmit = async () => {
    if (!excelFile) return;

    setUploadStatus({ loading: true, message: "", error: "" });

    const formData = new FormData();
    formData.append("file", excelFile);

    try {
      const response = await axios.post(
        "https://firebase-excel.onrender.com/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      // Update state with success message and clear previous errors
      setUploadStatus({ loading: false, message: "Upload successful!", error: "" });

      // Optionally, refetch the updated students list
      axios.get("https://firebase-excel.onrender.com/students")
        .then((res) => setStudents(res.data));

    } catch (error) {
      // Display error message from the server
      const errorMessage = error.response?.data?.message || error.message || "Upload failed";
      setUploadStatus({ loading: false, message: "", error: `Upload failed: ${errorMessage}` });
    }
  };

  // Handle filter inputs
  const handleInputChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Filter students based on class, roll number, and name
  const filteredStudents = students.filter((student) => {
    return (
      (filters.class ? String(student.Class).includes(filters.class) : true) &&
      (filters.rollNumber ? String(student.RollNumber).includes(filters.rollNumber) : true) &&
      (filters.name ? student.Name.toLowerCase().includes(filters.name.toLowerCase()) : true)
    );
  });

  return (
    <div className="App">
      <h1>Student Management System</h1>

      {/* Filter Form */}
      <div className="filter-form">
        <input
          type="text"
          name="class"
          placeholder="Filter by Class"
          value={filters.class}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="rollNumber"
          placeholder="Filter by Roll Number"
          value={filters.rollNumber}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Filter by Name"
          value={filters.name}
          onChange={handleInputChange}
        />
      </div>

      {/* Student List */}
      <div className="student-list">
        <h2>Students List</h2>
        {filteredStudents.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Admission Number</th>
                <th>Name</th>
                <th>Class</th>
                <th>Roll Number</th>
                <th>Section</th>
                <th>QR Code</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.AdmissionNumber}>
                  <td>{student.AdmissionNumber}</td>
                  <td>{student.Name}</td>
                  <td>{student.Class}</td>
                  <td>{student.RollNumber}</td>
                  <td>{student.Section}</td>
                  <td>
                    <QRCodeSVG value={student.AdmissionNumber} size={50} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No students found matching your criteria.</p>
        )}
      </div>

      {/* Excel File Upload */}
      <div className="file-upload">
        <h3>Upload Excel File</h3>
        <input type="file" onChange={handleFileUpload} />
        <button onClick={handleUploadSubmit} disabled={uploadStatus.loading}>
          {uploadStatus.loading ? "Uploading..." : "Upload"}
        </button>

        {/* Show upload status or error message */}
        {uploadStatus.loading && <p>Uploading, please wait...</p>}
        {uploadStatus.message && <p style={{ color: "green" }}>{uploadStatus.message}</p>}
        {uploadStatus.error && <p style={{ color: "red" }}>{uploadStatus.error}</p>}
      </div>
    </div>
  );
}

export default App;
