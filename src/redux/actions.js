import {UPDATE_DATA, LIVE_UPDATE_FIELD} from "./actionTypes";

export const updateData = newLayoutData => ({
  type: UPDATE_DATA,
  newLayoutData: newLayoutData
});
export const liveUpdateField = (fieldId, fieldValue) => ({
  type: LIVE_UPDATE_FIELD,
  fieldId: fieldId,
  fieldValue: fieldValue
});

