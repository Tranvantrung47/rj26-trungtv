import { Dispatch } from "react";

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
