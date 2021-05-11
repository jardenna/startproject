import { IS_LOADING, FETCH_SUCCESS, FETCH_ERROR } from './types';

const movieReducer = (state, action) => {

   switch (action.type) {
      case IS_LOADING:
         return {
            ...state,
            isLoading: true
         };
      case FETCH_SUCCESS:
         return {
            ...state,
            shows: action.payload,
            isLoading: false
         };
      case FETCH_ERROR:
         return {
            ...state,
            hasError: action.payload,
            shows: [],
            isLoading: false
         };

      default: return state;
   }
};

export default movieReducer;