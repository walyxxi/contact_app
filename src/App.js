import React, { useState } from "react";
import "./App.css";
import { MdMenu, MdAdd, MdSearch, MdModeEdit, MdDelete } from "react-icons/md";
import styled from "styled-components";

const IconMenu = styled(MdMenu)`
  cursor: pointer;
`;

const IconAdd = styled(MdAdd)`
  cursor: pointer;
`;

const IconSearch = styled(MdSearch)`
  margin-left: 6px;
  position: absolute;
  top: 8px;
`;

const IconEdit = styled(MdModeEdit)`
  cursor: pointer;
  margin: 4px;
`;

const IconDelete = styled(MdDelete)`
  cursor: pointer;
  margin: 4px;
`;

const App = () => {
  const [showFormAdd, setShowFormAdd] = useState(false);
  const [dataEdit, setDataEdit] = useState();

  const contact = [
    {
      id: "93ad6070-c92b-11e8b02f",
      first_name: "Bilbao",
      last_name: "Baggins",
      age: 110,
      photo:
        "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
    },
    {
      id: "36rd833d-4fsd-fst43d33",
      first_name: "Salman",
      last_name: "Khan",
      age: 57,
      photo:
        "https://www.kashmirpen.com/wp-content/uploads/2020/09/download-44-289x174.jpg",
    },
  ];

  const handleShowFormAdd = () => {
    setShowFormAdd(!showFormAdd);
  };

  const handleShowFormEdit = (data) => {
    setDataEdit(data);
  };

  const handleCloseFormEdit = () => {
    setDataEdit();
  };

  return (
    <div className="Container">
      {/* Navbar */}
      <nav className="Navbar">
        <IconMenu size="20px" />
        Contact Apps
        <IconAdd onClick={handleShowFormAdd} size="20px" />
      </nav>

      {/* Content */}
      <div className="Content">
        <div className="InputBox">
          <IconSearch size="20px" color="#cf7500" />
          <input className="InputSearch" />
        </div>
        {contact &&
          contact.map((con, idx) => (
            <div className="ContactList" key={idx}>
              <img height="70px" src={con.photo} alt="" />
              <div className="ContactCaption">
                <div className="ContactName">
                  {con.first_name} {con.last_name}
                </div>
                <div className="ContactAge">Age {con.age} years</div>
                <div className="ContactAge">ID {con.id}</div>
              </div>
              <div className="ContactEdit">
                <IconEdit
                  onClick={() => handleShowFormEdit(con)}
                  size="18px"
                  color="#cf7500"
                />
                <IconDelete size="18px" color="#cf7500" />
              </div>
            </div>
          ))}
      </div>

      {/* AddBox */}
      {showFormAdd && (
        <div className="FormEl">
          <div className="FormTitle">
            <MdAdd color="#fff" size="20px" />
            &nbsp;Add Contact
          </div>
          <div className="FormAdd">
            <div className="InputGroup">
              <input className="Input" placeholder="First Name" type="text" />
              <input className="Input" placeholder="Last Name" type="text" />
              <input className="Input" placeholder="Age" type="number" />
              <input className="Input" placeholder="Photo" type="text" />
            </div>
            <div className="ButtonGroup">
              <div onClick={handleShowFormAdd} className="ButtonCancel">
                Cancel
              </div>
              <div className="ButtonSubmit">Submit</div>
            </div>
          </div>
        </div>
      )}

      {/* EditBox */}
      {dataEdit && (
        <div className="FormEl">
          <div className="FormTitle">
            <MdAdd color="#fff" size="20px" />
            &nbsp;Edit Contact
          </div>
          <div className="FormAdd">
            <div className="InputGroup">
              <input
                className="Input"
                placeholder="First Name"
                type="text"
                value={dataEdit.first_name}
              />
              <input
                className="Input"
                placeholder="Last Name"
                type="text"
                value={dataEdit.last_name}
              />
              <input
                className="Input"
                placeholder="Age"
                type="number"
                value={dataEdit.age}
              />
              <input
                className="Input"
                placeholder="Photo"
                type="text"
                value={dataEdit.photo}
              />
            </div>
            <div className="ButtonGroup">
              <div onClick={handleCloseFormEdit} className="ButtonCancel">
                Cancel
              </div>
              <div className="ButtonSubmit">Update</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
