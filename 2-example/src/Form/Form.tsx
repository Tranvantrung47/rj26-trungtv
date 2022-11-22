import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState<string>("Trung")
    const [age, setAge] = useState<number>(26)
    const [address, setAddress] = useState<string>("Đà Nẵng")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        console.log("Name:", name);
        console.log("Age:", age);
        console.log("Address:", address);

    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <hr />

                <input
                    placeholder="Age"
                    type="text"
                    value={age}
                    onChange={(e) => {
                        // setAge(e.target.value);
                    }}
                />
                <hr />

                <input
                    placeholder="Address"
                    type="text"
                    value={address}
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}
                />
                <hr />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
