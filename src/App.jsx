import React from "react";
import './app.css'

const data = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 30, email: "bob@example.com" },
  { name: "Charlie", age: 22, email: "charlie@example.com" },
  { name: "David", age: 27, email: "david@example.com" },
  { name: "Eve", age: 28, email: "eve@example.com" },
  { name: "Frank", age: 24, email: "frank@example.com" },
  { name: "Grace", age: 29, email: "grace@example.com" },
  { name: "Hannah", age: 26, email: "hannah@example.com" },
  { name: "Ivy", age: 23, email: "ivy@example.com" },
  { name: "Jack", age: 31, email: "jack@example.com" },
];

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>User Table</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
