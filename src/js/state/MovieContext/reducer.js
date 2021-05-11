import { FETCH_POSTS, SET_LOADING } from './types';

const reducer = (state, action) => {
   switch (action.type) {
      case SET_LOADING:
         return {
            ...state,
            loading: true

         };
      case FETCH_POSTS:
         return {
            ...state,
            loading: false,
            posts: action.payload
         };

      default: return state;
   }
};

export default reducer;