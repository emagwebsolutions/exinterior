import React from 'react'

const Productsort = () => {
  return (
    <div className="sort-wrapper">
    <div>
      <h3>Sort by</h3>
    </div>
    <div className="7">
      <select className="sort">
        <option value="">Featured</option>
        <option value="">Price, low to high</option>
        <option value="">Price, high to low</option>
        <option value="">A-Z</option>
        <option value="">Z-A</option>
        <option value="">Date, old to new</option>
        <option value="">Date, new to old</option>
        <option value="">Best Selling</option>
      </select>
    </div>
  </div>
  )
}

export default Productsort
