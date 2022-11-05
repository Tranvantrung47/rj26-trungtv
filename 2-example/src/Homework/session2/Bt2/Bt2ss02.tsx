import React from 'react'
import { useState } from "react";
import './styles2.css'
// import { AiFillStar } from "react-icons/ai";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const MAX_STAR = 5

function Bt2ss02() {
  const [star, setStar] = useState(0);
  const arrStar = [1, 2, 3, 4, 5]; 
  const renderStar = () => {
    let result = [];
   
    for (let index = 0; index < MAX_STAR; index++) {
 
      result.push(
        <span key={index} onClick={() => setStar(index + 1)}>
          <AiFillStar />
        </span>
      );
    }

    for (let index = star; index < MAX_STAR; index++) {
      result.push(
        <span key={index} onClick={() => setStar(index + 1)}>
          <AiOutlineStar />
        </span>
      );
    }
    return result;
  };


  const advertisement = {
    image: 'https://cdn.pixabay.com/photo/2022/09/29/17/15/halloween-7487706_960_720.jpg',
    title: 'YOUNG SHOP',
    description: 'Samsung UHD TV 24inch',
    star: MAX_STAR,
    price: '$599'
  };


  return (
    <div className='wrapper'>
      <img src={advertisement.image} alt=''></img>
      <h4>{advertisement.title}</h4>
      <h5>{advertisement.description}</h5>


      <div style={{color:'yellow'}}>
        {arrStar?.map((index) => {
          return index <= star ? (
            <AiFillStar key={index} onClick={()=>setStar(index)}/>
          ) : (
            <AiOutlineStar key={index} onClick={()=>setStar(index)}/>
          );
        })}
          <span style={{marginLeft:5}}>02</span>
      </div>






      
      {/* <div className="star">{renderStar(advertisement.star)}</div> */}




      <p>{advertisement.price}</p>



    </div>
  )
}

export default Bt2ss02
