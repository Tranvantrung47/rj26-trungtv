import React, { useState, useEffect } from 'react'
import { Link,useParams } from 'react-router-dom';

interface IUser {
    avatar: string,
    id: string,
    name: string
}

function DetailUser() {
    let params = useParams();
    const [user, setUser] = useState<IUser>();
    useEffect(() => {
        getUser(params.id)
    }, [])

    const getUser = (userId: string | undefined) => {

        let url = "https://634ea20a4af5fdff3a62aa66.mockapi.io/Ex/api/v1/users/" + userId;
        fetch(url, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setUser(data)

            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    return (
        <>
            <div className="card" style={{width: '18rem',margin:'30px'}}>
                <img src = {user?.avatar} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{user?.name}</h5>
                        <Link to={'/form/' + user?.id} className="btn btn-primary">
                            UPDATE
                        </Link>
                    </div>
            </div>

        </>
    
    )
}

export default DetailUser
