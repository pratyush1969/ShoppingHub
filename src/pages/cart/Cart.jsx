import React, { useContext, useEffect, useState } from 'react'
import './Cart.css'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/myContext'
import View from '../../components/modal/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart } from '../../redux/CreateSlice'
import { DB } from '../../firebase/FirebaseConfig'
import { addDoc, collection } from 'firebase/firestore'

const Cart = () => {
  const context = useContext(myContext)
  const { mode, product } = context
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)
  const [totalamount, settotalamount] = useState(0)
  useEffect(() => {
    let temp = 0;
    cartItems.forEach((item) => {
      temp = temp + parseInt(item.price)
    })
    settotalamount(temp)
  }, [cartItems])

  let Shipping = parseInt(1)
  let grandtotal = Shipping + totalamount


  const deleteCart = (item) => {
    dispatch(deleteFromCart(item))
    console.log('delete g cart');
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])

  const [name, setName] = useState("")
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const buyNow = async () => {
    // validation 
    if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
      return alert("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString(
        "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
      )
    }
    console.log(addressInfo)

    var options = {
      key: "rzp_test_OddlkSDgzTOWWZ",
      key_secret: "hg2jGq7NDdvwtseJcGQb0oLX",
      amount: parseInt(grandtotal * 100),
      currency: "INR",
      order_receipt: 'order_rcptid_' + name,
      name: "E-Bharat",
      description: "for testing purpose",
      handler: function (response) {
        // console.log(response)
        alert('Payment Successful')
        const paymentId = response.razorpay_payment_id
        // store in firebase 
        const orderInfo = {
          cartItems,
          addressInfo,
          date: new Date().toLocaleString(
            "en-US",
            {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }
          ),
          email: JSON.parse(localStorage.getItem("user")).user.email,
          userid: JSON.parse(localStorage.getItem("user")).user.uid,
          paymentId
        }

        try {
          const result = addDoc(collection(DB, "orders"), orderInfo)
        } catch (error) {
          console.log(error)
        }
      },

      theme: {
        color: "#3399cc"
      }


    };
    var pay = new window.Razorpay(options);
    pay.open();
    console.log(pay)
  }

  return (
    <Layout>
      <div className="cart-container" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
        <h2 style={{ textAlign: 'center' }}>Cart Items</h2>
        <div className='card-body' style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>

          <div className="rounded-lg md:w-2/3 ">

            {cartItems.map((item, index) => {
              return (
                <div className="justify-between mb-6 rounded-lg border  drop-shadow-xl bg-white p-6  sm:flex  sm:justify-start" style={{ backgroundColor: mode === 'dark' ? 'rgb(32 33 34)' : '', color: mode === 'dark' ? 'white' : '', display: 'flex', border: '2px solid grey', marginBottom: '20px', width: '700px', height: '200px' }} key={index}>
                  <img src={item.imageUrl} alt="product-image" className="w-full rounded-lg sm:w-40" style={{ width: '200px', margin: '20px' }} />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.title}</h2>
                      <p className="text-sm  text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.description}</p>
                      <p className="mt-1 text-xs font-semibold text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{item.price}</p>
                    </div>
                    <div onClick={() => deleteCart(item)} className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6" style={{ margin: '10px' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{ width: '50px', cursor: 'pointer' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>

                    </div>
                  </div>
                </div>
              )
            })}

          </div>
          <div className="right-card" style={{ backgroundColor: mode === 'dark' ? '#36454F' : 'aliceblue', position: 'sticky', top: '200px' }}>
            <div className="first">
              <p>Subtotal</p>
              <p>${totalamount}</p>
            </div>
            <div className="second">
              <p>Shipping</p>
              <p>${Shipping}</p>
            </div>
            <hr />
            <div className="second">
              <h3>Total</h3>
              <h3>${grandtotal}</h3>
            </div>
            <div className='fourth'>
              <View name={name} address={address} pincode={pincode} phoneNumber={phoneNumber} setName={setName} setAddress={setAddress} setPincode={setPincode} setPhoneNumber={setPhoneNumber} buyNow={buyNow} />

            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Cart