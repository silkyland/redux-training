import React from "react";

const FormLayout = props => (
  <div className="card-body">
    <form onSubmit={props.handleSubmit}>
      <div className="from-group">
        <label htmlFor="inputName">Name :</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={props.input.name}
          onChange={e => props.handleKeyUp(e)}
        />
      </div>
      <div className="from-group">
        <label htmlFor="inputName">Email :</label>
        <input
          name="email"
          type="email"
          className="form-control"
          value={props.input.email}
          onChange={e => props.handleKeyUp(e)}
        />
      </div>
      <div className="from-group">
        <label htmlFor="inputName">Age :</label>
        <input
          name="age"
          type="number"
          className="form-control"
          value={props.input.age}
          onChange={e => props.handleKeyUp(e)}
        />
      </div>
      <div className="form-group mt-md-3">
        <button type="submit" className="btn btn-primary">
          บันทึก
        </button>
      </div>
    </form>
  </div>
);

export default FormLayout;
