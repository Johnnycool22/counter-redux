import * as actionTypes from './actionsTypes';

export const savedResult = ( res ) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
}

export const storeResult = ( res ) => {
return dispatch => {
  setTimeout( () => {
      dispatch(savedResult(res));
  }, 2000 );
}
};

export const deleteResult = (resElId) => {
return {
    type: actionTypes.DELETE_RESULT,
    resultElId: resElId
};
};