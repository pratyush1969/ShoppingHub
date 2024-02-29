import React, { useEffect } from 'react'
import './ProductCard.css'
import { useContext } from 'react'
import myContext from '../../context/myContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/CreateSlice'
const ProductCard = () => {
  const context = useContext(myContext)
  const { mode, product, searchkey, filterType, filterPrice } = context
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)

  const addcart = (product) => {
    dispatch(addToCart(product))
    alert("added to cart successfully")
  }
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])
  return (
    <div className='card-container' style={{ color: mode === 'light' ? 'black' : 'white' }}>
      <h2 >Our Latest Collection</h2>
      <div className="card-body">
        {
        product.filter((obj) => obj.title.toLowerCase().includes(searchkey))
        .filter((obj) => obj.price.includes(filterPrice))
            .map((item, index) => {
              return (
                <div className="cards" key={index}onClick={()=> window.location.href = `/productinfo/${item.id}`} >
                  <img src={item.imageUrl} alt="" />
                  <h4>{item.title}</h4>
                  <p>{item.price}</p>
                  <button onClick={() => addcart(item)}>Add to Cart</button>
                </div>
              )
            })
        }


      </div>
    </div>
  )
}

export default ProductCard