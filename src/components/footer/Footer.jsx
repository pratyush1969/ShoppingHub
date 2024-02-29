import React from 'react'
import cardimage from  "../../assets/cardimage.png"
const Footer = () => {
  return (
    <div style={{position:'absolute',width:'100%'}}>
      <div className="footer" style={{display:'flex',alignItems:"center",justifyContent:'space-around',backgroundColor:'grey'}}>
        <div className="category">
          <h3>CATEGORY</h3>
          <li>Home</li>
          <li>Order</li>
          <li>Local for vocal</li>
          <li>Cart</li>
        </div>
        <div className="category">
          <h3>Customer Services</h3>
          <li>Return Policy</li>
          <li>Contact Us</li>
        </div>
        <div className="category">
          <h3>Service</h3>
          <li>Privacy</li>
          
        </div>
        <div className="category">
          <img src={cardimage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer