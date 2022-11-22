import React,{useState} from 'react'

function Bt10() {
    const [inputNumber, setInputNumber] = useState<any>();
    const [result,setResult] = useState<any>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setInputNumber(parseInt(e.target.value));
        console.log(typeof inputNumber);
    }


    const handleClick = () => {
        if(inputNumber){
            let a = 1;
            let b = 1;
            if (a < b/2) {
                setResult(inputNumber * a);
              } else {
                if (inputNumber % 2 === 0) {
                    let temp1 = (inputNumber / 2) * b
                    setResult(temp1.toString());
                } else {
                    let temp2 = (inputNumber / 2) * b + a
                    setResult(parseInt(temp2.toString()));
                }
              }
        }
    }
    
    return (
        <div>
            <input
                value={inputNumber}
                onChange={(e) => handleChange(e)}
                type="text"
            />
            <button onClick={handleClick}>Run</button>
          
            <p>Kết quả : {result}</p>

        </div>
    )
}

export default Bt10
