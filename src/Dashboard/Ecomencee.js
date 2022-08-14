import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faWindowRestore, faBell, faGear, faBlog, faBox, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import Profile from './Profile';
import Grap2Third from './Grap2Third';
import GrapScond from './GrapScond';
import GrapFirst from './GrapFirst';

const Ecomencee = () => {
    const [data, setData] = useState([])
   
    useEffect(() => {
        axios.get("month.json")        
        .then(res => setData(res.data))       

    }, [])
    const MonthData = (
        <BarChart
            width={300}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
            <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
    )
   

   
    return (
        <div className='emr-part'>
            <div className='emr-header' >
                <div><h3>Dashboard</h3></div>
                <div>
                    <ul>
                        <li><FontAwesomeIcon className='emr-font-icon' icon={faMagnifyingGlass} /></li>
                        <li><img src="https://image.shutterstock.com/image-vector/vector-illustration-usa-flag-260nw-572934400.jpg" alt="" /></li>
                        <li><FontAwesomeIcon className='emr-font-icon' icon={faWindowRestore} /></li>
                        <li><FontAwesomeIcon className='emr-font-icon' icon={faBell} /></li>
                        <li><FontAwesomeIcon className='emr-font-icon' icon={faGear} /></li>
                        <li><img src="https://images.unsplash.com/photo-1548637724-cbc39e0c8d3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" /></li>
                    </ul>
                </div>
            </div>
            <div className="emr-data-body">
                <div className='emr-data-part '>
                    <div className="card-data-part">
                        <div className="card-part">
                            <div className='card-componet d-flex justify-content-between align-items-end'>
                                <div className='d-flex align-items-center'> <p className='pero-icon'><FontAwesomeIcon className='emr-font-icon' icon={faBlog} /></p> <div className='ms-2'> <p> Revenue</p> <h5> $2510 </h5> </div> </div>
                                <div><span className='cart-part-percentance'>+250%</span></div>
                            </div>
                        </div>
                        <div className="card-part">
                            <div className='card-componet d-flex justify-content-between align-items-end'>
                                <div className='d-flex align-items-center'> <p className='pero-icon'><FontAwesomeIcon className='emr-font-icon' icon={faBox} /></p> <div className='ms-2'> <p> Orders</p> <h5> 5641 </h5> </div> </div>
                                <div><span className='cart-part-percentance'>-8.002</span></div>
                            </div>
                        </div>
                        <div className="card-part">
                            <div className='card-componet d-flex justify-content-between align-items-end'>
                                <div className='d-flex align-items-center'> <p className='pero-icon'><FontAwesomeIcon className='emr-font-icon' icon={faUserGroup} /></p> <div className='ms-2'> <p> Customers</p> <h5> 45224 </h5> </div> </div>
                                <div><span className='cart-part-percentance'>-1.042</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='grap-part'>
                        <div className='grap-header d-flex justify-content-between'>
                            <h5>Overview</h5>
                            <div>
                                <label className='me-2' htmlFor=""> <b>Sort By :</b> </label>
                                <select >
                                    <option>Yearly</option>
                                    <option>Monthly</option>
                                    <option>day</option>
                                </select>
                            </div>
                        </div>
                        <div className='grap-middle-body d-lg-flex   align-items-center p-3 '>
                            <div>
                                <h4 className='mt-3 lead'>This Months</h4>
                                <div className='d-flex'>
                                    <h2>$24510 </h2>  <span className='per-bg grap-middle-spa'>+2.250</span>
                                </div>
                                <div className='d-flex  ms-5 ms-md-0 my-3'>
                                    <ul>
                                        <li className="month-details">
                                            <p className='m-0 text-secondary'>Orders</p>
                                            <h6>54124</h6>
                                        </li>
                                        <li className="month-details">
                                            <p className='m-0 text-secondary'>Orders value</p>
                                            <h6>12.02%</h6>
                                        </li>
                                        <li className="month-details">
                                            <p className='m-0 text-secondary'>Income</p>
                                            <h6>$3952.36</h6>
                                        </li>

                                    </ul>
                                    <ul>
                                        <li className="month-details left-border-month-details ">
                                            <p className='m-0 text-secondary'>Sales</p>
                                            <h6>34124</h6>
                                        </li>
                                        <li className="month-details left-border-month-details ">
                                            <p className='m-0 text-secondary'>Customers</p>
                                            <h6>124124</h6>
                                        </li>
                                        <li className="month-details left-border-month-details ">
                                            <p className='m-0 text-secondary'>Expensive</p>
                                            <h6>$254124</h6>
                                        </li >

                                    </ul>
                                </div>
                            </div>
                            <div className='grap-righ-main'>
                                <div className='mt-3 mt-md-0 text-start'>{MonthData}</div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    {/* Second part start */}
                    <div className='my-3 d-lg-flex'>
                        <div className='grap2-first-box'>
                            <GrapFirst/>
                        </div>
                        <div className='grap2-first-box'>                        
                            <GrapScond/>
                        </div>
                        <div className='grap2-first-box'>
                            <Grap2Third/>
                        </div>                        
                    </div>
                </div>
                <div className='emr-data-profile'>                    
                    <Profile/>
                </div>
            </div>
        </div>
    );
};

export default Ecomencee;