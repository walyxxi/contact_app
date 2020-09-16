import * as types from "../constants/ActionTypes";

const API_URL = "https://simple-contact-crud.herokuapp.com/contact";

const loadDataSuccess = (datas) => {
  return { type: types.LOAD_DATA_SUCCESS, datas };
};

const loadDataFailure = () => {
  return { type: types.LOAD_DATA_FAILURE };
};

export const loadData = () => {
  return (dispatch) => {
    return fetch(API_URL)
      .then((res) => res.json())
      .then((result) => {
        dispatch(loadDataSuccess(result.data));
      })
      .catch((err) => {
        dispatch(loadDataFailure());
      });
  };
};

const addDataSuccess = (data) => {
  return { type: types.ADD_DATA_SUCCESS, data };
};

const addDataFailure = () => {
  return { type: types.ADD_DATA_FAILURE };
};

export const addData = (data) => {
  return (dispatch) => {
    return fetch(API_URL, {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "contact saved") {
          dispatch(addDataSuccess(data));
        } else {
          dispatch(addDataFailure());
        }
        return result;
      })
      .catch((err) => {
        dispatch(addDataFailure());
      });
  };
};

const deleteDataSuccess = (id) => {
  return { type: types.DELETE_DATA_SUCCESS, id };
};

const deleteDataFailure = () => {
  return { type: types.DELETE_DATA_FAILURE };
};

export const deleteData = (id) => {
  return (dispatch) => {
    return fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "contact unavailable") {
          dispatch(deleteDataFailure());
        } else {
          dispatch(deleteDataSuccess(id));
        }
        return result;
      })
      .catch((err) => {
        dispatch(deleteDataFailure());
      });
  };
};

const editDataSuccess = (data) => {
  return { type: types.EDIT_DATA_SUCCESS, data };
};

const editDataFailure = () => {
  return { type: types.EDIT_DATA_FAILURE };
};

export const editData = (data) => {
  return (dispatch) => {
    return fetch(`${API_URL}/${data.id}`, {
      method: "PUT",
      "Content-Type": "application/json",
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
        photo: data.photo,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "Contact edited") {
          dispatch(editDataSuccess(result.data));
        } else {
          dispatch(editDataFailure());
        }
        return result;
      })
      .catch((err) => {
        dispatch(editDataFailure());
      });
  };
};
