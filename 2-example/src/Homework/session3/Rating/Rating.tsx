import React from 'react'
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const MAX_STAR = 5;

function Rating() {
    const [star, setStar] = useState(3);
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
    return (
      <div>
        {arrStar?.map((index) => {
          return index <= star ? (
            <AiFillStar key={index} onClick={()=>setStar(index)}/>
          ) : (
            <AiOutlineStar key={index} onClick={()=>setStar(index)}/>
          );
        })}
        
      </div>
    );
}

export default Rating
