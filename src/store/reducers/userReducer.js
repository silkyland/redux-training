import { GOT_USERS, ADDUSER, UPDATEUSER, DELETEUSER } from "../types";
import immutable from "immutability-helper";
const userReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_USERS:
      return immutable(state, { $set: action.payload });
    case ADDUSER:
      return immutable(state, { $push: [action.payload] });
    case UPDATEUSER:
      let index = state.findIndex(user => user.id === action.payload.id);
      return immutable(state, { [index]: { $set: action.payload } });
    case DELETEUSER:
      let indexDelete = state.findIndex(user => user.id === action.payload);
      return immutable(state, { $unset: [indexDelete] });
    default:
      return state;
  }
};

export default userReducer;
