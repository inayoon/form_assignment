"use client";
import { useEffect, useState } from "react";

export default function History() {
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  return (
    <section className="history_section">
      <div>
        <h2 className="history_title">Trial Request History</h2>
        <ul className="history_container">
          {formData.map((data, index) => (
            <li className="history_card" key={index}>
              <h3>Form {index + 1}</h3>
              <small>Name: {data.name}</small>
              <small>Email: {data.email}</small>
              <small>Product Name: {data.productName}</small>
              <small>Product Size: {data.productSize}</small>
              <small>Street Name: {data.streetName}</small>
              <small>Unit: {data.unit}</small>
              <small>Postal Code: {data.postalCode}</small>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
