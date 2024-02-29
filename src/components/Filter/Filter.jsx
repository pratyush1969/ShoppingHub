import React, { useContext } from 'react'
import './Filter.css'
import myContext from '../../context/myContext'

const Filter = () => {
  const context = useContext(myContext)
  const { searchkey, setSearchkey,
    filterType, setFilterType,
    filterPrice, setFilterPrice,product } = context
  return (
    <div className="filter-container">

      <div className='filter'>
        <div className="input">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" name="searchkey" id="searchkey" placeholder='Search Your Item' value={searchkey} onChange={(e)=>setSearchkey(e.target.value)} />
        </div>

        <div className="filter-type">
          <h4>Filters</h4>
          <h4>Reset</h4>
        </div>
        <div className="filter-body">
          

          <select value={filterPrice}onChange={(e)=>setFilterPrice(e.target.value)} name="price" id="price">
          {
            product.map((item,index)=>{
              return(
                <option value={item.price}>{item.price}</option>
              )
            })
           }
          </select>

        </div>
      </div>
    </div>
  )
}

export default Filter