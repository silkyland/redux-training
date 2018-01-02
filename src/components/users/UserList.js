import React from "react";
const UserList = props => (
  <table className="table table-striped table-bordered">
    <thead>
      <tr>
        <th>#</th>
        <th>name</th>
        <th>email</th>
        <th>age</th>
        <th>manage</th>
      </tr>
    </thead>
    <tbody>
      {props.users.map(user => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.age}</td>
          <td>
            <button
              className="btn btn-sm btn-warning mr-md-2"
              onClick={() => props.handleEdit(user.id)}
            >
              แก้ไข
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() =>
                window.confirm("Are you sure want to delete?")
                  ? props.handleClickDelete(user.id)
                  : false
              }
            >
              ลบ
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
export default UserList;
