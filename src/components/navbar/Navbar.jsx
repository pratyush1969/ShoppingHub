import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import myContext from '../../context/myContext'
import { Link } from 'react-router-dom'
import { FiSun } from 'react-icons/fi'
import { BsFillCloudSunFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const context = useContext(myContext)
  const { mode, togglemode } = context

  const user = JSON.parse(localStorage.getItem('user'))
  const cartItems=useSelector((state)=>state.cart)

  console.log(user)
  return (
    <div className='navbar' style={{ backgroundColor: mode === 'light' ? 'white' : 'black' }}>

      <div className="logo">
        <img src={logo} alt="" />
        <h4 style={{ color: mode === 'light' ? 'black' : 'white' }}><Link to='/'>ShoppingHub</Link></h4>
      </div>
      <div className="links">
        {
          user?.user?.email !== 'xyz@gmail.com' ? <Link to="/order" style={{ color: mode === 'light' ? 'black' : 'white' }}>Order</Link> : ""
        }
        {
          user?.user?.email === 'xyz@gmail.com' ? <Link to='/dashboard' style={{ color: mode === 'light' ? 'black' : 'white' }}>Admin</Link> : ""
        }
        {
          user?.user?.email ?<Link to='/login' style={{ color:'yellowgreen'}}>Logout</Link>: <Link to='/login' style={{ color: mode === 'light' ? 'black' : 'white' }}>LogIn</Link>
            
        }        {
          user?.user?.email !== 'xyz@gmail.com' ? <Link to='/cart' style={{ color: 'green' }}><i class="fa-solid fa-cart-shopping">{cartItems.length}</i></Link>
            : ""
        }
      </div>
      <div className="btn">
        <button onClick={togglemode} style={{ background: 'transparent', color: mode === 'light' ? 'black' : 'white', border: 'none', outline: 'none', cursor: 'pointer' }}>
          {mode === 'light' ?
            (<FiSun className='' size={30} />
            ) : 'dark' ?
              (<BsFillCloudSunFill size={30} />
              ) : ''
          }
        </button>
      </div>


    </div>
  )
}

export default Navbar