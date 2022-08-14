import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area, Pie, Cell, PieChart, } from 'recharts';
import axios from 'axios';
const GrapFirst = () => {
    const [grap, setGrap] = useState([])
    useEffect(() => {
        axios.get("secondGrap.json")
            .then(res => setGrap(res.data))

    }, [])
    const GrapChart = (
        <AreaChart
            width={250}
            height={200}
            data={grap}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
    )
    return (
        <div>
            <div className='grap-header d-flex justify-content-between'>
                <h6>User Activities</h6>
                <div>
                    <select >
                        <option>Weekly</option>
                        <option>Yearly</option>
                        <option>Monthly</option>
                        <option>day</option>
                    </select>
                </div>
            </div>
            <h5 className='lead'>This Month</h5>
            <h4 className='mb-3'>16,524</h4>

            <div>
                <div>
                    {GrapChart}
                </div>
            </div>
        </div>
    );
};

export default GrapFirst;