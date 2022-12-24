import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import './styleform.css'


function FormUser() {
  
    const [userName, setUserName] = useState();

  let params = useParams();
  useEffect(() => {
    getUser(params.id);
  }, []);

  const getUser = (userId: string | undefined) => {
    let url =
      "https://634ea20a4af5fdff3a62aa66.mockapi.io/Ex/api/v1/users/" + userId;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserName(data?.name)
      
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("submit", userName);
    let data = {
      name: userName,
  
    };
    if(params.id){
      updateUser(data, params.id)
    }else{
      postUser(data)
    }
    
  };

  const updateUser = (data : any, userId : string) => {
   
    let url = "https://634ea20a4af5fdff3a62aa66.mockapi.io/Ex/api/v1/users/" + userId;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const postUser = (data : any) => {
   
    let url = "https://634ea20a4af5fdff3a62aa66.mockapi.io/Ex/api/v1/users";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const handleChange = (event: any) => {
    switch (event.target.name) {
      case "name":
        setUserName(event.target.value);
        break;
   

      default:
        break;
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>THÀNH VIÊN</h2>
      <p>
        <label>Tên truy cập (*):</label> <br />
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={userName ? userName : ""}
          onChange={handleChange}
        />
      </p>
      <p>
        <input type="submit" />
      </p>
    </form>
  );
}

export default FormUser;
