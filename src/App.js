import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as DataActions from "./actions";
import FormAdd from "./components/FormAdd";
import FormEdit from "./components/FormEdit";
import { CSSTransition } from "react-transition-group";

const App = (props) => {
  const { datas, actions } = props;

  useEffect(() => {
    actions.loadData();
  }, [actions]);

  const [showFormAdd, setShowFormAdd] = useState(false);
  const [showFormEdit, setShowFormEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState();

  const handleShowFormAdd = () => {
    setShowFormAdd(!showFormAdd);
  };

  const handleShowFormEdit = () => {
    setShowFormEdit(!showFormEdit);
  };

  return (
    <div className="Container">
      {/* Navbar */}
      <Navbar handleShowFormAdd={handleShowFormAdd} />

      {/* Content */}
      <Content
        datas={datas}
        setDataEdit={setDataEdit}
        handleShowFormEdit={handleShowFormEdit}
        deleteData={actions.deleteData}
      />

      {/* FormAdd */}
      <CSSTransition
        in={showFormAdd}
        timeout={500}
        classNames="transition"
        unmountOnExit
      >
        <FormAdd
          addData={actions.addData}
          handleShowFormAdd={handleShowFormAdd}
        />
      </CSSTransition>

      {/* FormEdit */}

      <CSSTransition
        in={showFormEdit}
        timeout={500}
        classNames="transition"
        unmountOnExit
      >
        <FormEdit
          data={dataEdit}
          editData={actions.editData}
          handleShowFormEdit={handleShowFormEdit}
        />
      </CSSTransition>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    datas: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(DataActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
