import React, { useEffect, useState } from "react";
import "./style.css";
import { MdEdit } from "react-icons/md";

const FormEdit = (props) => {
  const { data, editData, handleShowFormEdit } = props;
  const [dataEdit, setDataEdit] = useState({
    id: "",
    firstName: "",
    lastName: "",
    age: 0,
    photo: "",
  });

  useEffect(() => {
    setDataEdit({
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
      photo: data.photo,
    });
  }, [data]);

  const { id, firstName, lastName, age, photo } = dataEdit;

  const handleInputChange = (e) => {
    setDataEdit({ ...dataEdit, [e.target.name]: e.target.value });
  };

  const handleSubmitData = (e) => {
    e.preventDefault();
    editData({
      id: dataEdit.id,
      firstName: dataEdit.firstName,
      lastName: dataEdit.lastName,
      age: parseInt(dataEdit.age),
      photo: dataEdit.photo,
    }).then((res) => {
      handleShowFormEdit();
    });
  };

  return (
    <div className="FormEl">
      <div className="FormTitle">
        <MdEdit color="#fff" size="20px" />
        &nbsp;Edit Contact
      </div>
      <div className="FormEdit">
        <div className="InputGroup">
          <input
            className="Input"
            onChange={handleInputChange}
            name="id"
            placeholder="ID"
            type="text"
            value={id}
            disabled
          />
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
          <div onClick={handleShowFormEdit} className="ButtonCancel">
            Cancel
          </div>
          <div onClick={handleSubmitData} className="ButtonSubmit">
            Update
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEdit;
