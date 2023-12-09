import React, { Children } from 'react'

const Carts = (props) => {
  return (
    <div className={`${props.css} cart-con`}>{props.children}</div>
  )
}

export default Carts