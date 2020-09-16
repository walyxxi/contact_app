import React, { useState } from "react";
import "./style.css";
import { MdAdd } from "react-icons/md";

const FormAdd = (props) => {
  const { addData, handleShowFormAdd } = props;

  const [dataAdd, setDataAdd] = useState({
    firstName: "",
    lastName: "",
    age: null,
    photo: "",
  });

  const { firstName, lastName, age, photo } = dataAdd;

  const handleInputChange = (e) => {
    setDataAdd({ ...dataAdd, [e.target.name]: e.target.value });
  };

  const handleSubmitData = (e) => {
    addData(dataAdd).then((res) => {
      handleShowFormAdd();
      setDataAdd({
        firstName: "",
        lastName: "",
        age: null,
        photo: "",
      });
    });
  };

  return (
    <div className="FormEl">
      <div className="FormTitle">
        <MdAdd color="#fff" size="20px" />
        &nbsp;Add Contact
      </div>
      <div className="FormAdd">
        <div className="InputGroup">
          <input
            className="Input"
            onChange={handleInputChange}
            name="firstName"
            placeholder="First Name"
            type="text"
            value={firstName}
            required
          />
          <input
            className="Input"
            onChange={handleInputChange}
            name="lastName"
            placeholder="Last Name"
            type="text"
            value={lastName}
            required
          />
          <input
            className="Input"
            onChange={handleInputChange}
            name="age"
            placeholder="Age"
            type="number"
            value={age}
            required
          />
          <input
            className="Input"
            onChange={handleInputChange}
            name="photo"
            placeholder="Photo"
            value={photo}
            type="text"
          />
        </div>
        <div className="ButtonGroup">
          <div onClick={handleShowFormAdd} className="ButtonCancel">
            Cancel
          </div>
          <div onClick={handleSubmitData} className="ButtonSubmit">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAdd;
