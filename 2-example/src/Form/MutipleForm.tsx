import React from 'react'
interface IUser {
    userName: string;
    age: number;
    address: string;
}

const defaultUser: IUser = {
    userName: "Trung",
    age: 25,
    address: "Đà Nẵng",

};

function MutipleForm() {
    const [inputs, setInputs] = React.useState(defaultUser);

    const handleChange = (e: any) => {
   
          setInputs((values) => ({ ...values, [e.target?.name]: e.target?.value }));
        
      };

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(inputs);
      };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="userName"
                    placeholder="User Name"
                    value={inputs.userName}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={inputs.age}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={inputs.address}
                    onChange={handleChange}
                />



                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default MutipleForm
