import React, { useContext, useEffect, useState } from 'react'
import './Productinfo.css'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/myContext'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/CreateSlice';
import { DB } from '../../firebase/FirebaseConfig';
const Productinfo = () => {
    const context = useContext(myContext)
    const { mode } = context

    const [products, setProducts] = useState('')
    const params = useParams()
    // console.log(products.title)

    const getProductData = async () => {
        try {
            const productTemp = await getDoc(doc(DB, "products", params.id))
            // console.log(productTemp)
            setProducts(productTemp.data());
            // console.log(productTemp.data())
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getProductData()

    }, [])



    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    // console.log(cartItems)

    // add to cart
    const addCart = (products) => {
        dispatch(addToCart(products))
        toast.success('add to cart');
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
    return (
        <Layout>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: mode === 'light' ? 'black' : 'white' }}>

                {
                    products &&
                    <div className="details" >
                        <div className="image">
                            <img src={products.imageUrl} alt="" />
                        </div>
                        <div className="description">
                            <p>BRAND NAME</p>
                            <h2>{products.title}</h2>
                            <p>
{
    products.description
}                            </p>
                            <hr />
                            <div className="price">
                                <h3>${products.price}</h3>
                                <button  onClick={()=>addCart(products)}>ADD to Cart</button>
                            </div>
                        </div>

                    </div>
                }
            </div>
        </Layout>
    )
}

export default Productinfo