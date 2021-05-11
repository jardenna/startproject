import {
   GET_SHOWS,
   GET_EPISODES,
   GET_CAST,
   SEARCH_SHOWS,
   SET_NOT_FOUND,
   SET_LOADING,
   SET_ERROR

} from './movieTypes';

const movieReducer = (state, action) => {
   switch (action.type) {
      case GET_SHOWS:
         return {
            ...state,
            shows: action.payload,
            loading: false
         };
      case SEARCH_SHOWS:
         return {
            ...state,
            shows: action.payload,
            notFound: [],
            loading: false
         };

      case GET_EPISODES:
         return {
            ...state,
            episodes: action.payload,
            loading: false
         };

      case GET_CAST:
         return {
            ...state,
            cast: action.payload,
            loading: false
         };
      case SET_LOADING:
         return {
            ...state,
            loading: true
         };
      case SET_NOT_FOUND:
         return {
            ...state,
            loading: false,
            notFound: action.payload
         };
      case SET_ERROR:
         return {
            ...state,
            error: action.payload,
            loading: false
         };


      default: return state;
   }
};

export default movieReducer;
