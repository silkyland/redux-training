import React from "react";
import FromLayout from "./users/FormLayout";
import { connect } from "react-redux";
import {
  getUser,
  addUser,
  updateUser,
  removeUser
} from "../store/actions/user";
import UserList from "./users/UserList";

class Users extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      isOpen: false,
      isEdit: false,
      btnMessage: "เพิ่มข้อมูล",
      input: {
        id: "",
        name: "",
        email: "",
        age: 0
      }
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }
  componentDidMount() {
    this.props.getUser();
  }

  toggleForm() {
    this.setState({ isOpen: !this.state.isOpen });
    this.setState({ isEdit: false });
    let blankInput = {
      id: "",
      name: "",
      email: "",
      age: 0
    };
    this.setState({
      input: blankInput
    });
    this.state.isOpen
      ? this.setState({ btnMessage: "เพิ่มข้อมูล" })
      : this.setState({ btnMessage: "ปิดฟอร์ม" });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.isEdit
      ? this.props.updateUser(this.state.input)
      : this.props.addUser(this.state.input);

    this.toggleForm();
  }

  handleEdit(id) {
    this.setState({ isOpen: true });
    this.setState({ isEdit: true });
    this.state.isOpen
      ? this.setState({ btnMessage: "เพิ่มข้อมูล" })
      : this.setState({ btnMessage: "ปิดฟอร์ม" });
    let user = this.props.users.find(user => user.id === id);
    let input = {
      id: user.id,
      name: user.name,
      email: user.email,
      age: user.age
    };
    this.setState({ input: input });
  }

  handleClickDelete(id) {
    this.props.removeUser(id);
  }

  handleKeyUp(e) {
    let oldInput = this.state.input;
    oldInput[e.target.name] = e.target.value;
    this.setState({
      input: oldInput
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <div className="float-right">
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={this.toggleForm}
            >
              {this.state.btnMessage}
            </button>
          </div>
        </div>
        {this.state.isOpen ? (
          <FromLayout
            handleSubmit={this.handleSubmit}
            handleKeyUp={this.handleKeyUp}
            input={this.state.input}
          />
        ) : (
          undefined
        )}
        <UserList
          users={this.props.users}
          handleClickDelete={this.handleClickDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users
});
const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser()),
  addUser: data => dispatch(addUser(data)),
  updateUser: data => dispatch(updateUser(data)),
  removeUser: id => dispatch(removeUser(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(Users);
