import React from 'react'
import Details from './Details'

type Obj = {
  obj: {
    size: string
    colour: string
    material: string
    producttype: string
    availability: string
  }
}

const Productdetails = ({obj}: Obj) => {
  return (
    <div>
      <Details title="Size:" desc={obj.size} />
      <Details title="Colour:" desc={obj.colour} />
      <Details title="Material:" desc={obj.material} />
      <Details title="Product Type:" desc={obj.producttype} />
      <Details title="Availability:" desc={obj.availability} />
    </div>
  )
}

export default Productdetails