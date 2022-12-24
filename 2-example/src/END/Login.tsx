import React, { useState} from "react";
import './styleform.css'
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const USER_NAME = "admin";
  const USER_PASSWORD = "admin";

  const [userName, setUserName] = useState();
  const [userPassword, setUserPassword] = useState();
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (userName === USER_NAME && userPassword === USER_PASSWORD) {
      navigate("/list");
      console.log("Đăng nhập thành công");
    } else {
      console.log("Đăng nhập sai");
    }
    
    
  };



  const handleChange = (event: any) => {
    switch (event.target.name) {
      case "name":
        setUserName(event.target.value);
        break;
        case "password":
          setUserPassword(event.target.value);
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
        <label>Password (*):</label> <br />
        <input
          placeholder="Password"
          type="text"
          name="password"
          value={userPassword ? userPassword : ""}
          onChange={handleChange}
        />
      </p>
      <p>
     
        <input type="submit" value="Login" />
      </p>
    </form>
  );
}

export default Login
