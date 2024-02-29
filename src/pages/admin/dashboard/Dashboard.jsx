import React, { useContext } from 'react'
import './Dashboard.css'
import Layout from '../../../components/layout/Layout'
import myContext from '../../../context/myContext'
import Dashboardtab from './Dashboardtab'
const Dashboard = () => {
    const context=useContext(myContext)
    const {mode}=context
    return (
        <Layout>
            <div className="dasboard-container">
                <div className="dash-card">
                    <i class="fa-solid fa-user"></i>
                    <h3 style={{color:mode==='dark'?'white':'black'}}>10</h3>
                    <h5 style={{color:mode==='dark'?'white':'black'}}>Total Products</h5>
                </div>
                <div className="dash-card">
                    <i class="fa-solid fa-user"></i>
                    <h3 style={{color:mode==='dark'?'white':'black'}}>10</h3>
                    <h5 style={{color:mode==='dark'?'white':'black'}}>Total Orders</h5>
                </div>
                <div className="dash-card">
                    <i class="fa-solid fa-user"></i>
                    <h3 style={{color:mode==='dark'?'white':'black'}}>20</h3>
                    <h5 style={{color:mode==='dark'?'white':'black'}}>Total Users</h5>
                </div>
                <div className="dash-card">
                    <i class="fa-solid fa-user"></i>
                    <h3 style={{color:mode==='dark'?'white':'black'}}>20</h3>
                    <h5 style={{color:mode==='dark'?'white':'black'}}>Total Products</h5>
                </div>
            </div>
            <Dashboardtab/>
        </Layout>
    )
}

export default Dashboard