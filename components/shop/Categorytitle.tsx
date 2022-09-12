import React from 'react'

type Data = {
    data: string
}
const Categorytitle = ({data}: Data) => {
  return (
    <div className="category">{data}</div>
  )
}

export default Categorytitle
