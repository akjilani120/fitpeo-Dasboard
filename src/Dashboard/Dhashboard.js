import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar , faMessage , faFileLines , faBusinessTime , faEnvelope , faInbox , faProjectDiagram , faWifi , faUserLock , faAtlas, faBreadSlice , faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import './Dashboard.css'
import { Link, Outlet } from 'react-router-dom';
const Dhashboard = () => {
    return (
        <div className='dashboard-header d-lg-flex'>
            <div className='navbar-side'> 
               <div>
                  <p>Menu</p>
                  <ul>
                    <p>Dashboard</p>
                    <li><Link className='dash-item' to="/">Ecommerce</Link></li>
                    <li>Sass</li>
                    <li>Crypto </li>
                  </ul>
                  <p className='nav-item-pera'>Application
                   <div className='sub-nav-item'> 
                   <ul >
                    <li><FontAwesomeIcon className='font-icon' icon={faCalendar} /> Calendar</li>
                    <li><FontAwesomeIcon className='font-icon' icon={faMessage} /> Chat</li>
                    <li> <FontAwesomeIcon className='font-icon' icon={faFileLines} /> File Manager</li>
                    <li><FontAwesomeIcon className='font-icon' icon={faBusinessTime} /> Ecommerce</li>
                    <li className='d-none d-lg-block'><FontAwesomeIcon className='font-icon' icon={faEnvelope} /> Email</li>
                    <li className='d-none d-lg-block'><FontAwesomeIcon className='font-icon' icon={faInbox} /> Invoices</li>
                    <li className='d-none d-lg-block'><FontAwesomeIcon className='font-icon' icon={faProjectDiagram} /> Projects</li>
                    <li className='d-none d-lg-block'><FontAwesomeIcon className='font-icon' icon={faWifi} /> Contact</li>
                  </ul>
                   </div>
                  </p>
                  <p className='d-lg-blog d-none'>Layouts</p>
                  <p className='nav-item-pera'>Pages
                   <div className='sub-nav-item'>
                   <ul >
                    <li> <FontAwesomeIcon className='font-icon' icon={faUserLock} /> Authentication</li>
                    <li> <FontAwesomeIcon className='font-icon' icon={faAtlas} /> Utility</li>
                  </ul>
                   </div>
                  </p>
                  <p className='nav-item-pera'>Components
                   <div className='sub-nav-item'>
                   <ul >
                    <li> <FontAwesomeIcon className='font-icon' icon={faBreadSlice} /> UI Elements</li>
                    <li><FontAwesomeIcon className='font-icon' icon={ faCheckCircle} />Forms</li>
                  </ul>
                   </div>
                  </p>
               </div>
            </div>
            <div className='show-dashboard'>
                    <Outlet/>
            </div>
        </div>
    );
};

export default Dhashboard;