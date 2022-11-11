  import { useState } from 'react'
  import { AiFillStar, AiOutlineStar } from "react-icons/ai";

  function Rating() {
    const [star, setStar] = useState(0)
    const arrStar = [1, 2, 3, 4, 5]
    const handleClick = (item: number) => {
      setStar(item);
    }
    return (
      <div>

        {arrStar?.map((item) => {
          return (
            <span onClick={() => handleClick(item)}>
              {item <= star ? <AiFillStar /> : <AiOutlineStar />}
            </span>
          )
        })}

      </div>
    )
  }

  export default Rating

