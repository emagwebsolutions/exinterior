import React from 'react'

type Page = {
    page: string
    parent: string 
    child: string
}
const Pageheader = ({page,parent,child}: Page) => {
  return (
    <div className="pageheader">

        <h3>{page}</h3>
        <p>{parent} / {child}</p>

    </div>
  )
}

export default Pageheader
