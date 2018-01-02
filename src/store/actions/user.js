import { GOT_USERS, ADDUSER, UPDATEUSER, DELETEUSER } from "../types";
import axios from "axios";
const getUser = () => dispatch => {
  axios.get("http://localhost:3001/users").then(response => {
    dispatch(gotUsers(response.data));
  });
};

const addUser = data => dispatch => {
  axios.post("http://localhost:3001/users", data).then(response => {
    dispatch(userAdded(response.data));
  });
};

const updateUser = data => dispatch => {
  axios.patch("http://localhost:3001/users/" + data.id, data).then(response => {
    dispatch(userUpdated(response.data));
  });
};

const removeUser = id => dispatch => {
  axios.delete("http://localhost:3001/users/" + id).then(response => {
    dispatch(userDeleted(id));
  });
};

const gotUsers = users => ({
  type: GOT_USERS,
  payload: users
});

const userAdded = data => ({
  type: ADDUSER,
  payload: data
});

const userUpdated = data => ({
  type: UPDATEUSER,
  payload: data
});

const userDeleted = data => ({
  type: DELETEUSER,
  payload: data
});

export { getUser, addUser, updateUser, removeUser };
