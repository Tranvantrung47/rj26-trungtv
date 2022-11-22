import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ListUser() {
    const navigate = useNavigate();
    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        getListUser();
    }, [])


    const getListUser = () => {
        let url = "https://634ea20a4af5fdff3a62aa66.mockapi.io/Ex/api/v1/users";
        fetch(url, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setListUser(data);

            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    const deleteRow = (id :  number) => {
        fetch("https://634ea20a4af5fdff3a62aa66.mockapi.io/Ex/api/v1/users/" + id, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                getListUser();
            })
            .catch((error) => {
                console.error("Error:", error);
            });

    }

    const gotoDetail = (userId : number) => {
      
        navigate('/detail/' + userId);
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">URL avatar</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    listUser.map((user: any) => {
                        return (
                            <tr key={`user-${user.id}`}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.avatar}</td>
                                <td>
                                    <button onClick={() => gotoDetail(user.id)}>Details</button>
                                    <button onClick={(id) => deleteRow(user?.id)}>Delete</button>
                                </td>
                              
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default ListUser