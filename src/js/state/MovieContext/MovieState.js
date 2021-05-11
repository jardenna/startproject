import { useReducer } from 'react';
import { FETCH_POSTS, SET_LOADING } from './types';
import Context from '../Context';

import reducer from './reducer';

const initialState = {
   loading: false,
   posts: []
};

const MAIN_API = 'https://api.tvmaze.com/';
const MOVIEAPIS = {
   shows: `${MAIN_API}shows`,
   searchShows: `${MAIN_API}/search/shows?=`
};

const MovieState = (props) => {

   const [state, dispatch] = useReducer(reducer, initialState);

   //Set Loading
   const setLoading = () => dispatch({ type: SET_LOADING });

   //Set Posts

   const setPosts = async () => {
      const url = MOVIEAPIS.shows;
      setLoading();
      try {
         const data = await fetch(url);

         const result = await data.json();
         dispatch({
            type: FETCH_POSTS,
            payload: result
         });
      } catch (e) {
         console.error(e);
      }
   };


   return (
      <Context.Provider value={{
         loading: state.loading,
         posts: state.posts,
         setPosts
      }}>
         {props.children}
      </Context.Provider>

   );
};

export default MovieState;