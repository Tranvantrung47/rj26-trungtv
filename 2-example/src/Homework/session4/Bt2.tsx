import React, { useState } from 'react'

function Bt2() {
    const [Number1, setNumber1] = useState<number>();
    const [Number2, setNumber2] = useState<number>();
    const [Number3, setNumber3] = useState<number>();
    const [Number4, setNumber4] = useState<number>();
    const [result, setResult] = useState<number | string>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        switch (e.target.name) {
            case "name1":
                setNumber1(parseInt(e.target.value));
                break;
            case "name2":
                setNumber2(parseInt(e.target.value));
                break;
            case "name3":
                setNumber3(parseInt(e.target.value));
                break;
            case "name4":
                setNumber4(parseInt(e.target.value));
                break;
            default:
                break;
        }
    }
    const handleClick = () => {
        if (Number1 && Number2 && Number3 && Number4) {
            let min = Number1
            if (min > Number2) {
                min = Number2;
            }
            if (min > Number3) {
                min = Number3;
            }
            if (min > Number4) {
                min = Number4;
            }
            setResult(min);
        } else {
            setResult("Vui lòng nhập đủ 4 số");
        }


    }

    return (
        <div>
            <input
                name="name1"
                value={Number1 ? Number1 : ""}
                onChange={(e) => handleChange(e)}
                type="text"
            />

            <input
                name="name2"
                value={Number2 ? Number2 : ""}
                onChange={(e) => handleChange(e)}
                type="text"
            />
            <input
                name="name3"
                value={Number3 ? Number3 : ""}
                onChange={(e) => handleChange(e)}
                type="text"
            />
            <input
                name="name4"
                value={Number4 ? Number4 : ""}
                onChange={(e) => handleChange(e)}
                type="text"
            />
            <button onClick={handleClick}>Run</button>
           <p> {result}</p>

        </div>
    )
}

export default Bt2
