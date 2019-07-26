import { LIVE_UPDATE_FIELD } from "../actionTypes";

const initialState = {
  liveLayoutData: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LIVE_UPDATE_FIELD: {
      return {
        liveLayoutData: {
          ...state.liveLayoutData,
          [action.fieldId]: action.fieldValue
        }
      };
    }
    default:
      return state;
  }
}
