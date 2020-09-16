import React from "react";
import "./style.css";
import { MdMenu, MdAdd } from "react-icons/md";
import styled from "styled-components";

const IconMenu = styled(MdMenu)`
  cursor: pointer;
`;

const IconAdd = styled(MdAdd)`
  cursor: pointer;
`;

const Navbar = (props) => {
  const { handleShowFormAdd } = props;

  return (
    <nav className="Navbar">
      <IconMenu size="20px" />
      Contact Apps
      <IconAdd onClick={handleShowFormAdd} size="20px" />
    </nav>
  );
};

export default Navbar;
