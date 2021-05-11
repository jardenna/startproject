import { useReducer } from 'react';
import { IS_LOADING, FETCH_SUCCESS, FETCH_CAST, FETCH_ERROR } from './types';
import movieReducer from './movieReducer';
import MovieContext from './MovieContext';

const MAIN_API = 'https://api.tvmaze.com/';
const MOVIEAPIS = {
   shows: `${MAIN_API}shows`,
   searchShows: `${MAIN_API}/search/shows?=`,
   episodes: `${MAIN_API}seasons/`

};

//Cast https://api.tvmaze.com/shows/1/cast

const MovieState = (props) => {

   const initialState = {
      isLoading: false,
      shows: [],
      cast: [],
      hasError: ''
   };


   const [state, dispatch] = useReducer(movieReducer, initialState);
   const loading = () => dispatch({ type: IS_LOADING });


   const setMovies = async () => {
      loading();
      try {
         const data = await fetch(MOVIEAPIS.shows);
         const shows = await data.json();
         dispatch({ type: FETCH_SUCCESS, payload: shows });
      } catch (err) {
         dispatch({ type: FETCH_ERROR, payload: err.message });
      }
   };

   const setCast = async (id) => {
      loading();
      try {
         const url = `${MOVIEAPIS.shows}/${id}/cast`;
         const data = await fetch(url);
         const cast = await data.json();
         dispatch({ type: FETCH_CAST, payload: cast });
      } catch (err) {
         dispatch({ type: FETCH_ERROR, payload: err.message });
      }

   };

   const { shows } = state;
   const value = {
      shows,
      cast: state.cast,
      loading: state.isLoading,
      error: state.hasError,
      setMovies,
      setCast


   };
   return (
      <MovieContext.Provider value={value}>
         {props.children}
      </MovieContext.Provider>
   );
};

export default MovieState;