import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pie, Cell, PieChart, } from 'recharts';
const Profile = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("round.json")
            .then(res => setData(res.data))
    }, [])
    const RoundChart = (
        <PieChart width={200} height={80} >
            <Pie
                data={data}
                cx={120}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#0088FE"
                paddingAngle={5}
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} />
                ))}
            </Pie>

        </PieChart>
    )
    return (
        <div>
            <div className="profile-header">
                <div className='pro-bg'>
                    <div className='pro-bg-overflow'>

                    </div>
                </div>
                <div className='pro-bg-abst'>
                    <img src="https://cdn.stocksnap.io/img-thumbs/280h/woman-model_CRHFNXOZMG.jpg" alt="Profile Photos" />

                    <h5 className='mt-3'>Jenifa </h5>
                    <h6>Ceo</h6>
                </div>
            </div>
            <div className='d-md-flex justify-content-around pro-follows text-center '>
                <div className='mt-2'>
                    <h5>2546</h5>
                    <p className='text-secondary'>Products</p>
                </div>
                <div className='mt-2'>
                    <h5>5k</h5>
                    <p className='text-secondary'>Follows</p>
                </div>
            </div>
            <hr />
            <div className='d-flex justify-content-between  text-center '>
                <div className='mt-2'>
                    <h5>Earning</h5>

                </div>
                <div className='mt-2'>
                    <h5 > <span className='omg-icon' > !</span> </h5>
                </div>
            </div>
            <div className='pro-chart text-center'>
                <div className=' ms-3'>{RoundChart}</div>
                <h2>75%</h2>
                <h5>$25645</h5>
                <p className='text-secondary mb-1'>Earning this Month</p>
                <p className='text-secondary'><span className='per-bg'>+2.250</span>From Previous Period</p>
            </div>
            <hr />
            <div>
                <div className='card-componet d-flex  align-items-center'>
                    <div className='d-flex align-items-center'> <p className='pero-icon'>12 sep</p> </div>
                    <div className="ms-2"><p >Responsed to need "Virtual Activies"</p></div>
                </div>
                <div className='card-componet d-flex  align-items-center'>
                    <div className='d-flex align-items-center'> <p className='pero-icon'>13 sep</p> </div>
                    <div className="ms-2"><p >Every relious would be desirable </p></div>
                </div>
                <div className='card-componet d-flex  align-items-center'>
                    <div className='d-flex align-items-center'> <p className='pero-icon'>14 sep</p> </div>
                    <div className="ms-2"><p >Joined the group "Bootrap special class"</p></div>
                </div>
            </div>
        </div>
    );
};

export default Profile;