import axios from "axios";
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const [datas,setdatas]= useState([]);
  const [dync,setdync]=useState([]);

  const myApi = () => {
    axios.get('https://dummyjson.com/products').then((res) => {
      setUser(res.data.products);
      setdync(res.data.products);
      const product = res.data.products;
        setdatas([...new Set(product.map((c)=>{
            return c.category
        }))]);
    });
  };

  const mydatafilter = (e)=>{
    setUser(dync.filter((d)=>{
        return d.category===e.target.value
    }));

}

  useEffect(() => {
    myApi();
  }, []);

  return (
    <div style={{ width: '100%', height: 400 }}>
       <select className="border-1" onChange={mydatafilter}>
       <option value={-1}>select data filter</option>
             {datas.map((d)=>{
                  return <option>{d}</option>
               })}
        </select>
      <ResponsiveContainer>
        <LineChart data={user}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
