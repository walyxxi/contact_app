import * as types from "../constants/ActionTypes";

export default function data(state = [], action) {
  switch (action.type) {
    case types.LOAD_DATA_SUCCESS:
      return action.datas;

    case types.LOAD_DATA_FAILURE:
      return state;

    case types.ADD_DATA_SUCCESS:
      return [
        {
          firstName: action.data.firstName,
          lastName: action.data.lastName,
          age: action.data.age,
          photo: action.data.photo,
        },
        ...state,
      ];

    case types.ADD_DATA_FAILURE:
      return state;

    case types.EDIT_DATA_SUCCESS:
      let editData = state;
      let edit = editData.map((x) => {
        if (x.id === action.data.id) {
          x.firstName = action.data.firstName;
          x.lastName = action.data.lastName;
          x.age = action.data.age;
          x.photo = action.data.photo;
        }
        return x;
      });
      return edit;

    case types.EDIT_DATA_FAILURE:
      return state;

    case types.DELETE_DATA_SUCCESS:
      return state.filter((data) => data.id !== action.id);

    case types.DELETE_DATA_FAILURE:
      return state;

    default:
      return state;
  }
}
