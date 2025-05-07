import axios from "axios";
import { useState, useEffect } from "react";
import {
  BarChart, Bar,
  LineChart, Line,
  XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import bookData from "../../MyData"; // Your local books array

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((res) => {
      const productList = res.data.products;
      setProducts(productList);
      setOriginalProducts(productList);
      const uniqueCategories = [...new Set(productList.map((item) => item.category))];
      setCategories(uniqueCategories);
    });
  }, []);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    if (value === "-1") {
      setProducts(originalProducts); // Reset to all
    } else {
      const filtered = originalProducts.filter((item) => item.category === value);
      setProducts(filtered);
    }
  };

  return (
    <>
      <div style={{ width: '100%',height: '100%', overflowY: 'auto' }}>
        {/* Product Chart from API */}
        <div style={{ width: '100%', height: 400 }} className="p-4">
          <h5>Product Prices by Category (from API)</h5>
          <select className="form-select w-auto mb-3" onChange={handleFilterChange}>
            <option value="-1">All Categories</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>

          <ResponsiveContainer>
            <LineChart data={products}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Local Book Chart */}
        <div className="container mt-5 p-4">
          <h5 className="mb-4">Book Price Overview (Local Data)</h5>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={bookData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="title" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="price" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
