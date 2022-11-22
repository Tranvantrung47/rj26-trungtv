import React, { useState } from 'react'

function PostUser() {
    const [name, setName] = useState<string>("Trung")
    const [avatar, setAvatar] = useState<string>("38 Yên Bái")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let data = {
            Name: name,
            Avatar: avatar
        }
        console.log(data)
        post(data)

    }

    const post = (data: any) => {
        fetch("https://634ea20a4af5fdff3a62aa66.mockapi.io/Ex/api/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((data) => {
          
        })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Name"
                    type="text"
                    value={name??''}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <hr />

                <input
                    placeholder="Avatar"
                    type="text"
                    value={avatar??''}
                    onChange={(e) => {
                        setAvatar(e.target.value);
                    }}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PostUser