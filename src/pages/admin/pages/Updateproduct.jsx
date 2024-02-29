import React, { useContext } from 'react'
import Layout from '../../../components/layout/Layout'
import myContext from '../../../context/myContext'
const Updateproduct = () => {
    const context=useContext(myContext)
    const {mode,products, setProducts,updateproduct}=context
  return (
    <Layout>
        <>
        <div className="add-container" style={{width:'100%',height:'100vh',display:'flex',alignContent:'center',justifyContent:'center',color:mode==='dark'?'grey':'black'}}>
            <div className="add-body" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',border:'2px solid grey',width:'30%',height:'60%',marginTop:'30px'}}>
                <h2>Update Product</h2>
               
                <input type="text" name='title' placeholder='Product Name' style={{ width: '80%', height: '5vh', marginBottom: '20px' }} value={products.title} onChange={(e) => setProducts({ ...products, title: e.target.value })} />
            <input type="text" name='price' placeholder='Product price' style={{ width: '80%', height: '5vh', marginBottom: '20px' }} value={products.price} onChange={(e) => setProducts({ ...products, price: e.target.value })} />
            <input type="text" name='imageurl' placeholder='Product image URL' style={{ width: '80%', height: '5vh', marginBottom: '20px' }} value={products.imageUrl} onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })} />
            <input type="text" name='category' placeholder='Product category' style={{ width: '80%', height: '5vh', marginBottom: '20px' }} value={products.category} onChange={(e) => setProducts({ ...products, category: e.target.value })} />
               <button style={{ width: '80%', height: '5vh', backgroundColor: 'dodgerblue', marginBottom: '10px', marginTop: '10px' }} onClick={updateproduct}>Update Product</button>

            </div>
        </div>
        </>
    </Layout>
  )
}

export default Updateproduct