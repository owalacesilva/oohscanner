/*
 * GetListaMidiasReducer
 *
 */

import produce from 'immer';
import { 
  GET_LISTA_MIDIAS, 
  GET_LISTA_MIDIAS_SUCCESS, 
  GET_LISTA_MIDIAS_FAILURE 
} from 'redux/constants/GetListaMidias';

// The initial state of the App
export const initialState = {
  mediasList: [],
  fetching: false,
  error: null
};

/* eslint-disable default-case, no-param-reassign */
const getListaMidiasReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {

      case GET_LISTA_MIDIAS:
        draft.fetching = true;
        draft.mediasList = [];
        draft.error = null;
        break;

      case GET_LISTA_MIDIAS_SUCCESS:
        draft.fetching = false;
        draft.mediasList = action.mediasList;
        draft.error = null;
        break;

      case GET_LISTA_MIDIAS_FAILURE:
        draft.fetching = false;
        draft.mediasList = [];
        draft.error = action.error;
        break;
    }
  });

export default getListaMidiasReducer;
