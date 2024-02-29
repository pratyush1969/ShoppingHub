import React, { useContext } from 'react'
import './Track.css'
import myContext from '../../context/myContext'
const Track = () => {
    const context=useContext(myContext)
    const {mode}=context
    return (

        <div className="track-cards" style={{color:mode==='light'?'black':'white'}}>
            <div className="track-record" style={{background:mode==='dark'?'#484848':'white'}}>
                <i class="fa-solid fa-bag-shopping"></i>
                <h5>Premium Jackets</h5>
                <p>Our jackets are 100% made in India</p>

            </div>
            <div className="track-record"style={{background:mode==='dark'?'#484848':'white'}}>
                <i class="fa-solid fa-truck"></i>
                <h5>Free Shipping</h5>
                <p>We ship all over India for FREE</p>

            </div>
            <div className="track-record"style={{background:mode==='dark'?'#484848':'white'}}>
                <i class="fa-solid fa-tag"></i>
                <h5>Exciting Offers</h5>
                <p>Amazing offers and discounts</p>

            </div>
        </div>

    )
}

export default Track