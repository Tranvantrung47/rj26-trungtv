import React, { useState } from 'react'

function Bt4() {
    const [inputNumber, setInputNumber] = useState<number>();
    const [resultchuc, setResultchuc] = useState<number | undefined>();
    const [resultdonvi, setResultdonvi] = useState<number | undefined>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setInputNumber(parseInt(e.target.value));
        console.log(typeof inputNumber);
    }
    const handleClick = () => {
        if (inputNumber) {
            let temp = inputNumber / 10
            let chuc = parseInt(temp.toString())
            let donvi = inputNumber % 10;

            setResultchuc(chuc);
            setResultdonvi(donvi)
        }

    }


    return (
        <div>
            <input
                value={inputNumber ? inputNumber : ""}
                onChange={(e) => handleChange(e)}
                type="text"
            />
            <button onClick={handleClick}>Run</button>
            <p> {resultchuc}</p>
            <p> {resultdonvi}</p>

        </div>
    )
}

export default Bt4
