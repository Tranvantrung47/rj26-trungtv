import React, { useState } from 'react'
import { AiFillLike, AiOutlineLike } from "react-icons/ai";


function BtnLike() {
    const [isLike,setIslike] = useState (true);
    const handleClick = () => {
        setIslike(!isLike);
    }
  return (
    <div onClick={handleClick}>
        { isLike ?  <AiFillLike /> : <AiOutlineLike/> }
     
    </div>
  )
}

export default BtnLike
