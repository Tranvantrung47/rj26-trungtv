import React, { useState } from 'react'

function Bt6() {
    const [Number1, setNumber1] = useState<number>();
    const [Number2, setNumber2] = useState<number>();
    const [result, setResult] = useState<number | string>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case "name1":
                setNumber1(parseInt(e.target.value));
                break;
            case "name2":
                setNumber2(parseInt(e.target.value));
                break;
            default:
                break;
        }
    }
    const handleClick = () => {
        if (Number1 && Number2) {
            let giatri = 1
            for (let i = 1; i <= Number1 && i <= Number2; i++) {
                if (Number1 % i === 0 && Number2 % i === 0)
                    giatri = i
            }
            setResult(giatri);
        } else {
            setResult("Vui lòng nhập đủ 2 số");
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
            <button onClick={handleClick}>Run</button>
            <p>Ước chung lớn nhất :  {result}</p>

        </div>
    )
}

export default Bt6
