import React from 'react'

type Price = {
  price: string
}

const Productprice = ({price}: Price) => {
  return (
    <div className="prod-price">GH₵ {price}</div>
  )
}

export default Productprice