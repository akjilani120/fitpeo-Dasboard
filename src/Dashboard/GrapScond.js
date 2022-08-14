import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Pie, Cell, PieChart, } from 'recharts';

const GrapScond = () => {
  
    const [data, setData] = useState([])
    useEffect(() => {

        axios.get("round.json")
            .then(res => setData(res.data))
    }, [])
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const RoundChart = (
        <PieChart width={300} height={400} >
            <Pie
                data={data}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    )
    return (
        <div>
            <div className='grap-header d-md-flex justify-content-between'>
                <h6>Order Status</h6>
                <div>
                    <p>...</p>
                </div>
            </div>
            <div>
                <div>
                    {RoundChart}
                </div>
            </div>

        </div>
    );
};

export default GrapScond;