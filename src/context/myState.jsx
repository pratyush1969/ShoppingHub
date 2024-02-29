import React, { useState, useEffect } from 'react'
import myContext from './myContext'
import { DB } from '../firebase/FirebaseConfig';
import { Timestamp, addDoc, getDocs, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';

const MyState = (props) => {
  const [mode, setMode] = useState('light')

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17,24,39)'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })

  const addProduct = async () => {
    if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
      alert('Please fill all fields')
    }
    const productRef = collection(DB, "products")
    try {
      await addDoc(productRef, products)
      alert("Product Added successfully")
      window.location.href = "/dashboard"
      setProducts("")
      getProductData()
    } catch (error) {
      console.log(error)
    }
  }

  const [product, setProduct] = useState([]);

  const getProductData = async () => {
    try {
      const q = query(
        collection(DB, "products"),
        orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray)
      });
      return () => data;
    } catch (error) {
      console.log(error)
    }
  }






  //updateproducts
  const edithandle = (item) => {
    setProducts(item)
  }
  const updateproduct = async () => {
    try {
      await setDoc(doc(DB, 'products', products.id), products)
      getProductData();
      alert("Updated item successfully")
      window.location.href = "/dashboard"
    }
    catch (e) {
      console.log(e)
    }
  }

  const deleteproduct = async (item) => {
    try {
      await deleteDoc(doc(DB, 'products', item.id))
      getProductData()
    }
    catch (e) {
      console.log(e)
    }
  }

  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    try {
      const result = await getDocs(collection(DB, "orders"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
      });
      setOrder(ordersArray);
      console.log(ordersArray)
    } catch (error) {
      console.log(error)
    }
  }

  const [userdata, setUserdata] = useState([])

  const getuserdata = async () => {
    try {
      const results = await getDocs(collection(DB, "usercollection"))
      const resultarray = []
      results.forEach((doc) => {
        resultarray.push(doc.data())
      })
      setUserdata(resultarray)
      console.log(resultarray)
    }
    catch (e) {
      alert(e)
    }

  }

  useEffect(() => {
    getProductData();
    getOrderData();
    getuserdata()
  }, []);
  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')

  return (
    <myContext.Provider value={{
      mode,
      edithandle, togglemode,
      products, setProducts,
      addProduct, product,
      updateproduct, deleteproduct, order, 
      setOrder, userdata, setUserdata, 
      searchkey, setSearchkey,
      filterType, setFilterType,
      filterPrice, setFilterPrice
    }}>
      {props.children}
    </myContext.Provider>
  )
}

export default MyState