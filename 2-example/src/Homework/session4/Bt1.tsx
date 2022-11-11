import React, { useState } from 'react'

function Bt1() {
    const [inputNumber, setInputNumber] = useState<number>();
    const [result, setResult] = useState<number | undefined>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setInputNumber(parseInt(e.target.value));
        console.log(typeof inputNumber);
    }
    const handleClick = () => {
        console.log('click');
        // let res = bt1(inputNumber)
        let res = bt1(inputNumber)
        inputNumber && setResult(res);
    }


    const bt1 = (_inputNumber: number | undefined) => {
        return _inputNumber ? _inputNumber * 2 : undefined
    }

 

    return (
        <div>
            <input
                value={inputNumber}
                onChange={(e) => handleChange(e)}
                type="text"
            />
            <button onClick={handleClick}>Run</button>
            {result}

        </div>
    )
}

export default Bt1
