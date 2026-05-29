import React from "react";
import "./App.css";

export default function Dashboard() {
  const cards = [
    { title: "Total Students", value: "1200" },
    { title: "Tasks Completed", value: "320" },
    { title: "Active Users", value: "850" },
    { title: "Projects", value: "45" },
  ];

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1>Student Monitoring Dashboard</h1>
        <p>Frontend Deployment & Monitoring System</p>
      </div>

      {/* Cards */}
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <h3>{card.title}</h3>
            <h2>{card.value}</h2>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="chart-section">
        <div className="chart-box">
          <h3>Attendance Analytics</h3>
          <div className="chart-placeholder">
            Attendance Chart
          </div>
        </div>

        <div className="chart-box">
          <h3>Performance Overview</h3>
          <div className="chart-placeholder">
            Performance Chart
          </div>
        </div>
      </div>

      {/* Student Table */}
      <div className="table-section">
        <h2>Student Details</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Kamal</td>
              <td>CSE</td>
              <td className="active">Active</td>
            </tr>

            <tr>
              <td>Reetu</td>
              <td>IT</td>
              <td className="active">Active</td>
            </tr>

            <tr>
              <td>Rahul</td>
              <td>ECE</td>
              <td className="inactive">Inactive</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}