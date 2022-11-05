import React from 'react'
import './styles3.css'

function Bt3ss02() {
  const data = {
    image : 'https://images.unsplash.com/photo-1665686310974-2ed1eb7f57ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    description : 'Teachnology',
    title : 'Harman Kandon Onỹ Studio Mini,Reviews & Experiences',
    pulishat : 'Feb 21,2021 by drfurion'
  };
    return (
      <div className='wrapper'>
        <img src={data.image} alt=''></img>
        <p>{data.description}</p>
        <h3>{data.title}</h3>
        <p>{data.pulishat}</p>
      </div>
    )
}

export default Bt3ss02
