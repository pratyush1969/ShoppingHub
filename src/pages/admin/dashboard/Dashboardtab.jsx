import React, { useContext } from 'react'
import '../../../App.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import myContext from '../../../context/myContext';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { FaUser, FaCartPlus } from 'react-icons/fa';
import { AiFillShopping, AiFillPlusCircle, AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const Dashboardtab = () => {
  const context = useContext(myContext)
  const { mode, product, edithandle, updateproduct, deleteproduct, order, userdata, setUserdata } = context
  console.log(product)
  return (
    <>
      <div className="container">
        <div className="tab container">
          <Tabs defaultIndex={0}  >
            <TabList style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Tab style={{ listStyleType: 'none' }}>
                <button type="button" style={{ width: '200px', height: '5vh', margin: '20px', boxShadow: '2px 2px 2px 2px green inset', padding: '10px' }}>
                  <div style={{ fontSize: 'larger' }}>
                    <MdOutlineProductionQuantityLimits />Products
                  </div>
                </button>
              </Tab>
              <Tab style={{ listStyleType: 'none' }}>
                <button type="button" style={{ width: '200px', height: '5vh', margin: '20px', boxShadow: '2px 2px 2px 2px violet inset', padding: '10px' }}>
                  <div style={{ fontSize: 'larger' }}>
                    <AiFillShopping /> Order
                  </div>
                </button>
              </Tab>
              <Tab style={{ listStyleType: 'none' }}>
                <button type="button" style={{ width: '200px', height: '5vh', margin: '20px', boxShadow: '2px 2px 2px 2px red inset', padding: '10px' }}>
                  <div className="flex gap-2 items-center" style={{ fontSize: 'larger' }}>
                    <FaUser /> Users
                  </div>
                </button>
              </Tab>
            </TabList>
            {/* product  */}
            <TabPanel>
              <div className='  px-4 md:px-0 mb-16'>
                <h1 className=' text-center mb-5 text-3xl font-semibold underline' style={{ color: mode === 'dark' ? 'white' : '', textAlign: 'center' }}>Product Details</h1>
                <div className=" flex justify-end">
                  <Link to="/addproduct">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-pink-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border hover:bg-pink-700 outline-0 font-medium rounded-lg text-sm px-5 py-2.5 mb-2" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', width: '200px', height: '5vh', margin: '20px', boxShadow: '2px 2px 2px 2px green inset', padding: '10px' }}>
                      <div className="flex gap-2 items-center">
                        Add Product <FaCartPlus size={20} />
                      </div></button>
                  </Link>
                </div>
                <div className="relative overflow-x-auto " style={{ width: '100%' }}>
                  {/* <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  "style={{width:'100%'}}>
                    <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                      <tr>
                        <th scope="col" className="px-6 py-3" style={{marginLeft:'50px'}}>
                          S.No
                        </th>
                        <th scope="col" className="px-6 py-3" style={{marginLeft:'50px'}}>
                          Image
                        </th>
                        <th scope="col" className="px-6 py-3" style={{marginLeft:'50px'}}>
                          Title
                        </th>
                        <th scope="col" className="px-6 py-3" style={{marginLeft:'50px'}}>
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3" style={{marginLeft:'50px'}}>
                          Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3" style={{marginLeft:'50px'}}>
                          Action
                        </th>
                      </tr>
                    </thead>
                {
                  product.map((item,index)=>{
                    return( 
                    <tbody className=''>
                    <tr className="bg-gray-50 border-b  dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                      <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '',marginLeft:'20px' }}>
                       {index+1}
                      </td>
                      <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                        <img className='w-16' src={item.imageUrl} style={{width:'50px',marginLeft:'10px'}}alt="img" />
                      </th>
                      <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                        {item.title}
                      </td>
                      <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                       {item.price}
                      </td>
                      <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                        {item.category}
                      </td>
                      <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                        {item.date}
                      </td>
                      <td className="px-6 py-4">
                        <div className=" flex gap-2">
                          <div className=" flex gap-2 cursor-pointer text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                            <div  >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6" style={{width:'30px'}}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                              </svg>
                            </div>
                            <div  >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"style={{width:'30px'}}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>

                  </tbody>)
                  })
                }
                  </table>
              */}
                  <div className="table-container" style={{ width: '100%', backgroundColor: 'pink' }}>

                    <Table striped bordered hover style={{ width: '100%', textAlign: 'center' }}>
                      <thead>
                        <tr>
                          <th>S.No</th>
                          <th>Image</th>
                          <th> Title</th>
                          <th>Category</th>
                          <th> Price</th>
                          <th> Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      {
                        product.map((item, index) => {
                          return (
                            <tbody>
                              <tr>
                                <td >{index + 1}</td>
                                <td ><img src={item.imageUrl} alt="" style={{ width: '50px' }} /></td>
                                <td>{item.title}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>{item.date}</td>
                                <td className="px-6 py-4">
                                  <div className=" flex gap-2">
                                    <div className=" flex gap-2 cursor-pointer text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                      <div  >

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6" style={{ width: '30px' }} onClick={() => deleteproduct(item)}>
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>

                                      </div>
                                      <div  >
                                        <Link to="/updateproduct">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{ width: '30px' }} onClick={() => edithandle(item)}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                          </svg>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </td>

                              </tr>
                            </tbody>
                          )
                        })
                      }
                    </Table>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              {/* <Order order={order} setOrder={setOrder} setLoading={setLoading} /> */}
              <div className="relative overflow-x-auto mb-16">
                <h1 className=' text-center mb-5 text-3xl font-semibold underline' style={{ color: mode === 'dark' ? 'white' : '', textAlign: 'center' }}>Order Details</h1>
                {/*
                  order.map((allorder, index) => {
                    return (
                      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" style={{ width: '100%', textAlign: 'center' }}>
                        <thead className="text-xs text-black uppercase bg-gray-200 " style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                          <tr>
                            <th scope="col" className="px-6 py-3">
                              Sl no.
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Payment Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Pincode
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Phone Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Date
                            </th>
                          </tr>
                        </thead>
                        <tbody>


                          {
                            allorder.cartItems.map((item, index) => {
                              return (
                                <div key={index}>
                                  <tr className="bg-gray-50 border-b  dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                    <td >{index + 1}</td>
                                    <td>{allorder.paymentId}</td>
                                    <td ><img src={item.imageUrl} alt="" style={{ width: '50px' }} /></td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category}</td>
                                    <td>{allorder.addressInfo.name}</td>
                                    <td>{allorder.addressInfo.address}</td>
                                    <td>{allorder.addressInfo.pincode}</td>
                                    <td>{allorder.addressInfo.phoneNumber}</td>
                                    <td>{allorder.email}</td>
                                    <td>{allorder.date}</td>

                                  </tr>
                                </div>
                              )
                            })
                          }

                        </tbody>
                      </table>
                    )
                  })
                */}
                {
                  order.map((allorder, index) => {
                    return (
                      <div className="table-container" style={{ width: '100%', backgroundColor: 'pink' }}>

                        <Table striped bordered hover style={{ width: '100%', textAlign: 'center' }}>
                          <thead>
                            <tr>
                              <th>S.No</th>
                              <th> Payment Id</th>
                              <th> Image</th>
                              <th>Title</th>
                              <th>Price</th>
                              <th>Category</th>
                              <th>Name</th>
                              <th> Address</th>
                              <th> Pincode</th>
                              <th>Phone Number</th>
                              <th>  Email</th>
                              <th>Date</th>


                            </tr>
                          </thead>
                          {
                            allorder.cartItems.map((item, index) => {
                              return (
                                <tbody>
                                  <tr className="bg-gray-50 border-b  dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                    <td >{index + 1}</td>
                                    <td>{allorder.paymentId}</td>
                                    <td ><img src={item.imageUrl} alt="" style={{ width: '50px' }} /></td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category}</td>
                                    <td>{allorder.addressInfo.name}</td>
                                    <td>{allorder.addressInfo.address}</td>
                                    <td>{allorder.addressInfo.pincode}</td>
                                    <td>{allorder.addressInfo.phoneNumber}</td>
                                    <td>{allorder.email}</td>
                                    <td>{allorder.date}</td>

                                  </tr>
                                </tbody>
                              )
                            })
                          }
                        </Table>
                      </div>
                    )
                  })
                }

              </div>
            </TabPanel>
            <TabPanel>
              {/* <User addressInfo={addressInfo} setAddressInfo={setAddressInfo} setLoading={setLoading} /> */}
              <div className="relative overflow-x-auto mb-10">
                <h1 className=' text-center mb-5 text-3xl font-semibold underline' style={{ color: mode === 'dark' ? 'white' : '', textAlign: 'center' }}>User Details</h1>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400" style={{ width: '100%', textAlign: 'center', backgroundColor: 'green' }} >
                  <thead className="text-xs text-black uppercase bg-gray-200 " style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }} >
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        S.No
                      </th>

                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Uid
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr className="bg-gray-50 border-b  dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >

                      {
                        userdata.map((item, index) => {
                          return (
                            <div key={index}>
                              <td >{index + 1}</td>
                              <td>{item.name}</td>
                              <td>{item.email}</td>
                              <td>{item.uid}</td>
                              <td>{item.date}</td>

                            </div>
                          )
                        })
                      }

                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>

          </Tabs>
        </div>
      </div>
    </>
  )
}

export default Dashboardtab