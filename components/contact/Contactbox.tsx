import React from 'react'

type Cont = {
    icon: string 
    title: string 
    text: string 
}
export const Contactbox = ({icon,title,text}: Cont) => {
    const classn = `fa ${icon}`
  return (
    <div className="col-2">
    <div>
      <i className={classn}></i>
      <h3>{title}</h3>
      <h4>{text}</h4>
    </div>
  </div>
  )
}

export default Contactbox