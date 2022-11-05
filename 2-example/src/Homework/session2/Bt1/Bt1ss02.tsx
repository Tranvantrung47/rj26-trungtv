import React from 'react'
import './styles1.css'



function Bt1ss02() {

  const shirt = {
    image : 'https://bizweb.dktcdn.net/100/337/030/products/be9cb90dcda22afc73b3.jpg?v=1569481561697://raw.githubusercontent.com/ngothanhtung/reactjs-tutorials/master/3-Homeworks/Session02/basic-1.jpg',
    title: "Clothing & Apparel",
    p1: "Accessories",
    p2: "Bags",
    p3: "Kid's Fashion",
    p4: "Mens",
  };

  return (
    <div className='wrapper'>
      <div className="left">
      <img src={shirt.image} alt=''></img>
      </div>
      <div className="content">
        <h2>{shirt.title}</h2>
        <div className="color">
          <p>{shirt.p1}</p>
          <p >{shirt.p2}</p>
          <p >{shirt.p3}</p>
          <p >{shirt.p4}</p>
        </div>
      </div>
    </div>
  )
}

export default Bt1ss02
