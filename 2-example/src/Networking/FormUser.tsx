import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './styleform.css'

function FormUser() {
  const navigate = useNavigate();

  const USER_NAME = "trantrung";
  const USER_AVATAR = "VietNam";
  const USER_ADDRESS = "Danang";


  const [userName, setUserName] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [userAddress, setUserAddress] = useState();
  // let params = useParams();
  // console.log(params.id)

  // useEffect(() => {
  //   getUser(params.id)
  // }, [])

  const getUser = (userId: string | undefined) => {

    let url = "https://634ea20a4af5fdff3a62aa66.mockapi.io/Ex/api/v1/users/" + userId;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setUserName(data?.name)
        setUserAvatar(data?.avatar)
        setUserAddress(data?.address)

      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (userName === USER_NAME && userAvatar === USER_AVATAR && userAddress === USER_ADDRESS) {
      navigate("/list");
      console.log("Đăng nhập thành công");
    } else {
      console.log("Đăng nhập sai");
    }

    // let data = {
    //   Name: 'trantrung',
    //   Avatar: 'VietNam',
    //   Address: 'Danang',
    // };

    // fetch("https://634ea20a4af5fdff3a62aa66.mockapi.io/Ex/api/v1/users",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // console.log("success", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });



    // event.preventDefault();
    // console.log("submit", userName, userAvatar);
    // let data = {
    //   name: userName,
    //   avatar: userAvatar,
    //   address: userAddress,
    // };
    // if (params.id) {
    //   updateUser(data, params.id)
    // } else {
    //   postUser(data)
    // }

  };

  const updateUser = (data: any, userId: string) => {

    let url = "https://634ea20a4af5fdff3a62aa66.mockapi.io/Ex/api/v1/users/" + userId;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {

      })
      .catch((error) => console.log(error));
  };

  const postUser = (data: any) => {

    let url = "https://634ea20a4af5fdff3a62aa66.mockapi.io/Ex/api/v1/users";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {

      })
      .catch((error) => console.log(error));
  };
  const handleChange = (event: any) => {
    switch (event.target.name) {
      case "name":
        setUserName(event.target.value);
        break;
      case "avatar":
        setUserAvatar(event.target.value);
        break;
      case "address":
        setUserAddress(event.target.value);
        break;

      default:
        break;
    }
  };
  return (

    <form className="form" onSubmit={handleSubmit}>
      <h2>ĐĂNG KÝ THÀNH VIÊN</h2>
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

        <label>Avatar (*):</label> <br />
        <input
          placeholder="Avatar"
          type="text"
          onChange={handleChange}
          value={userAvatar ? userAvatar : ""}
          name="avatar"
        />
      </p>

      <p>

        <label>Address (*):</label> <br />
        <input
          placeholder="Address"
          type="text"
          onChange={handleChange}
          value={userAddress ? userAddress : ""}
          name="address"
        />
      </p>
      <p>
        <input type="submit" />
      </p>
    </form>
    // <form onSubmit={handleSubmit} style={{margin:'30px'}}>
    // <input
    //   type="text"
    //   name="name"
    //   value={userName ? userName : ""}
    //   onChange={handleChange}
    // />
    //   <input
    //     type="text"
    //     onChange={handleChange}
    //     value={userAvatar ? userAvatar : ""}
    //     name="avatar"
    //   />
    //   <input type="submit" />
    // </form>
  );
}

export default FormUser;
