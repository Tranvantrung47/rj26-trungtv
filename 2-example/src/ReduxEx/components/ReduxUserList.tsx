import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAsync,deleteUsersAsync } from "../actions/userAction";


interface IState {
  userReducers: IUserReducer;
}

interface IUser {
  id: string;
  name: string;
  avatar: string;
  address :string;
 
}

interface IUserReducer {
  users: Array<IUser>;
  loading: boolean;
  error: any;
}

function ReduxUserList() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state: IState) => state.userReducers);

  useEffect(() => {
    dispatch(getUsersAsync());
  }, []);

  const handleDelete = (userId : string | number) =>{
    console.log(userId);
    dispatch(deleteUsersAsync(userId));
  }
  // const gotoDetail = (userId : string | number) =>{
  //   console.log(userId);
  //   dispatch(DetailAsync(userId));
  // }

  return (
    <div className="w-75 m-auto mt-3">
      {loading && <p>Loadding...</p>}
            <table id="table_users" className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">URL avatar</th>
                        <th scope="col">Address</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                {
                 
                  users?.map((user) =>{
                        return (
                            <tr key={`user-${user.id}`}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.avatar}</td>
                                <td>{user.address}</td>
                                <td>
                                    {/* <button style={{backgroundColor:'yellow'}} onClick={() => gotoDetail(user.id)}>Details</button> */}
                                    <button style={{backgroundColor:'pink'}} onClick={(id) => handleDelete(user?.id)}>Delete</button>
                                </td>

                            </tr>
                        )
                    })
                }
                </tbody>
               

            </table>
        </div>
  );
}

export default ReduxUserList;
