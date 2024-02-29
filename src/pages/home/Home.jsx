import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/myContext'
import Herosection from '../../components/herosection/Herosection'
import Filter from '../../components/Filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/Track/Track'
import Testimonal from '../../components/Testimonal/Testimonal'

const Home = () => {
  
  return (
    <Layout>
     
      <Herosection/>
      <Filter/>
      <ProductCard/>
      <Track/>
      <Testimonal/>
    </Layout>
  )
}

export default Home