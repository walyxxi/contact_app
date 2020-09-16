import React from "react";
import "./style.css";
import { MdSearch, MdModeEdit, MdDelete } from "react-icons/md";
import styled from "styled-components";

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

const noImageURL =
  "https://digitalfinger.id/wp-content/uploads/2019/12/no-image-available-icon-6-600x375.png";

const Content = (props) => {
  const { datas, handleShowFormEdit, setDataEdit, deleteData } = props;

  const handleDeleteData = (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      deleteData(id).then((res) => {
        if (res.message === "contact unavailable") {
          alert("Bad request, " + res.message + "!");
        }
      });
    }
  };

  return (
    <div className="Content">
      <div className="InputBox">
        <IconSearch size="20px" color="#cf7500" />
        <input className="InputSearch" />
      </div>
      {datas &&
        datas.map((data, idx) => (
          <div className="ContactList" key={idx}>
            <img
              height="75px"
              width="38%"
              src={data.photo === "N/A" ? noImageURL : data.photo}
              alt=""
            />
            <div className="ContactCaption">
              <div className="ContactName">
                {data.firstName} {data.lastName}
              </div>
              <div className="ContactAge">Age {data.age} years</div>
            </div>
            <div className="ContactEdit">
              <IconEdit
                onClick={() => {
                  setDataEdit(data);
                  handleShowFormEdit();
                }}
                size="18px"
                color="#cf7500"
              />
              <IconDelete
                onClick={() => handleDeleteData(data.id)}
                size="18px"
                color="#cf7500"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Content;
