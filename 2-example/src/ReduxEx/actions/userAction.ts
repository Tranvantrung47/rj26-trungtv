import { Dispatch,useState } from "react";
interface IUser {
  avatar: string,
  id: string,
  name: string
  address : string
}
interface IAction {
  type: string;
  payload?: any;
}

export const getUsersAsync = (): any => {
  return (dispatch: Dispatch<any>) => {
    dispatch(getUsers_Pendding());
    const URL_USER = "https://634ea20a4af5fdff3a62aa66.mockapi.io/Ex/api/v1/users";
    fetch(URL_USER, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(getUsers_Success(data));
      })
      .catch((error) => {
        dispatch(getUsers_Error(error));
      });
  };
};

const getUsers_Pendding = (data?: object): IAction => ({
  type: "GET_PENDDING", // ACTION TYPE
  payload: data, // PARAMETER
});

const getUsers_Success = (data?: object): IAction => ({
  type: "GET_SUCCESS", // ACTION TYPE
  payload: data, // PARAMETER
});

const getUsers_Error = (data?: object): IAction => ({
  type: "GET_ERROR", // ACTION TYPE
  payload: data, // PARAMETER
});


export const deleteUsersAsync = (userId: string | number): any => {
  return (dispatch: Dispatch<any>) => {
    dispatch(deleteUsers_Pendding());
    const URL_USER = "https://634ea20a4af5fdff3a62aa66.mockapi.io/Ex/api/v1/users/" + userId;
    fetch(URL_USER, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(deleteUsers_Success(data));
      })
      .catch((error) => {
        dispatch(deleteUsers_Error(error));
      });
      
  };
};

// export const DetailAsync = (userId: string | number): any => {
//   const [user, setUser] = useState<IUser>();
//   return (dispatch: Dispatch<any>) => {
//     dispatch(deleteUsers_Pendding());
//     const URL_USER = "https://634ea20a4af5fdff3a62aa66.mockapi.io/Ex/api/v1/users/" + userId;
//     fetch(URL_USER, {
//       method: "GET",
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setUser(data)
        
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
      
//   };
  
// };


  // const [user, setUser] = useState<IUser>();

  // const getUser = (userId: string | undefined) => {

  //     let url = "https://634ea20a4af5fdff3a62aa66.mockapi.io/Ex/api/v1/users/" + userId;
  //     fetch(url, {
  //         method: "GET",
  //     })
  //         .then((response) => response.json())
  //         .then((data) => {
  //             setUser(data)

  //         })
  //         .catch((error) => {
  //             console.error("Error:", error);
  //         });
  // }
  // return (
  //     <>
  //         <div className="card" style={{width: '18rem',margin:'30px'}}>
  //             <img src = {user?.avatar} className="card-img-top" alt="..."/>
  //                 <div className="card-body">
  //                     <h5 className="card-title">{user?.name}</h5>
  //                     <p>Country : {user?.address}</p>
  //                     <Link to={'/form/' + user?.id} className="btn btn-primary">
  //                         UPDATE
  //                     </Link>
  //                 </div>
  //         </div>

  //     </>
  
  // )

const deleteUsers_Pendding = (data?: object): IAction => ({
  type: "DELETE_PENDDING", // ACTION TYPE
  payload: data, // PARAMETER
});

const deleteUsers_Success = (data?: object): IAction => ({
  type: "DELETE_SUCCESS", // ACTION TYPE
  payload: data, // PARAMETER
});

const deleteUsers_Error = (data?: object): IAction => ({
  type: "DELETE_ERROR", // ACTION TYPE
  payload: data, // PARAMETER
});








// https://634ea20a4af5fdff3a62aa66.mockapi.io/Ex/api/v1/users