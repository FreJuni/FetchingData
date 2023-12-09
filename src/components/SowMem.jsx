import React from 'react'
import Carts from './Carts'

const Test = ({item}) => {
  const {email,live,name} = item;

  return (
    <Carts css="showmem">
       <div className='info-con'>
        <p>Name : {name}</p>
        <p>Live : {live}</p>
        <p>Email : {email}</p>
       </div>
    </Carts>
  )
}

export default Test