import React, {useRef} from 'react'
import Carts from './Carts'

const Form = ({getUserInfo}) => {

  const nameRef = useRef();
  const liveRef = useRef();
  const emailRef = useRef();



  const handler = (e) => {
    e.preventDefault();

    if(nameRef.current.value.trim().length === 0 || liveRef.current.value.trim().length === 0 || emailRef.current.value.trim().length ===0) {
        alert("Please enter all of the box.")
        return;
    }

    const data = {
      name : nameRef.current.value,
      live : liveRef.current.value,
      email : emailRef.current.value
    }
    getUserInfo(data);
    nameRef.current.value = "";
    liveRef.current.value = "";
    emailRef.current.value = "";
  }


  return (
    <Carts >
        <form onSubmit={handler}  >
          <div className='form-in'>
          <label htmlFor="name" >Name</label>
          <input type="text"  id='name' ref={nameRef} placeholder="Name"></input>
          </div>
          <div className='form-in'>
          <label htmlFor="name" >Live</label>
          <input type="text" id='live' ref={liveRef} placeholder="Live"/>
          </div>
          <div className='form-in'>
          <label htmlFor="name" >Email</label>
          <input type="email" id='email' ref={emailRef} placeholder="Email" ></input>
          </div>
          <button className='submit-btn'>Add Users</button>
        </form>
    </Carts>
  )
}

export default Form