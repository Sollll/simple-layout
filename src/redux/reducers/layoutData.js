import {UPDATE_DATA} from "../actionTypes";

const initialState = {
  layoutData: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_DATA: {
      return {
        layoutData: Object.assign({}, action.newLayoutData),
      };
    }
    default:
      return state;
  }
}
