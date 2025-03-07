import React from "react";
import "./Dashboard.css";
import { FaShareAlt } from "react-icons/fa";
import { CiDollar } from "react-icons/ci";
import { BiSolidLike } from "react-icons/bi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Bar Chart Data
const data = [
  { name: "Jan", year2019: 20, year2020: 40 },
  { name: "Feb", year2019: 30, year2020: 50 },
  { name: "Mar", year2019: 25, year2020: 45 },
  { name: "Apr", year2019: 10, year2020: 35 },
  { name: "May", year2019: 15, year2020: 20 },
  { name: "June", year2019: 30, year2020: 60 },
  { name: "July", year2019: 40, year2020: 25 },
  { name: "Aug", year2019: 30, year2020: 20 },
  { name: "Sep", year2019: 35, year2020: 15 },
];

// Custom Tooltip for Bar Chart
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#002855",
          color: "white",
          padding: "5px 10px",
          borderRadius: "5px",
        }}
      >
        {`${payload[0].value}%`}
      </div>
    );
  }
  return null;
};

// Donut Chart Component
const DonutChart = ({ percentage }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width="100" height="100" viewBox="0 0 100 100">
      {/* Background Circle */}
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="#002855"
        strokeWidth="10"
        fill="none"
      />
      {/* Progress Circle */}
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="#f7931e"
        strokeWidth="10"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 50 50)"
      />
      {/* Center Text */}
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dy=".3em"
        fontSize="16px"
        fontWeight="bold"
        fill="#000"
      >
        {percentage}%
      </text>
    </svg>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile">
            
          <div className="profile-pic"></div>
          <h3> MUNAZA</h3>
          <p>munaza@company.com</p>
        </div>
        <nav>
          <ul>
            <li>🏠 Home</li>
            <li>📂 File</li>
            <li>💬 Messages</li>
            <li>🔔 Notification</li>
            <li>📍 Location</li>
            <li>📊 Graph</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h2>Dashboard User</h2>

        {/* Top Cards */}
        <div className="top-cards">
          <div
            className="card"
            style={{ background: "#1e3a5f", color: "white" }}
          >
            <p>Earning</p>
            <h2>$628</h2>
            <CiDollar />
          </div>
          <div className="card">
            <p>Share</p>
            <h2>2434</h2>
            <FaShareAlt />
          </div>
          <div className="card">
            <p>Likes</p>
            <h2>1259</h2>
            <BiSolidLike />
          </div>
          <div className="card">
            <p>Rating</p>
            <h2>8.5</h2>
            <BiSolidLike />
          </div>
        </div>

        {/* Chart & Stats Section */}
        <div className="chart-section">
          <div className="bar-chart">
            <h3>Result</h3>
            {/* Bar Chart Added Here */}
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "transparent" }}
                />
                <Legend />
                <Bar dataKey="year2019" fill="#f7931e" name="2019" />
                <Bar dataKey="year2020" fill="#002855" name="2020" />
              </BarChart>
            </ResponsiveContainer>
            <button className="check-btn">Check Now</button>
          </div>

          {/* Progress Chart Section with DonutChart */}
          <div className="progress-chart">
            <DonutChart percentage={45} />
            <ul className="legend">
              <li> Lorem Ipsum</li>
              <li> Lorem Ipsum</li>
              <li> Lorem Ipsum</li>
              <li> Lorem Ipsum</li>
             

            </ul>
            <button className="check-btn">Check Now</button>
          </div>
        </div>

        {/* Calendar & Area Chart */}
        {/* <div className="calendar-chart">
          <div className="area-chart">
            <h3>Analysis</h3>
            <div className="chart-placeholder">📈 Area Chart Placeholder</div>
          </div>
        </div> */}


          <div className="bar-chart">
            <h3>Result</h3>
            {/* Bar Chart Added Here */}
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "transparent" }}
                />
                <Legend />
                <Bar dataKey="year2019" fill="#f7931e" name="2019" />
                <Bar dataKey="year2020" fill="#002855" name="2020" />
              </BarChart>
            </ResponsiveContainer>
            <button className="check-btn">Check Now</button>
          </div>
      </main>
    </div>
  );
};

export default Dashboard;
