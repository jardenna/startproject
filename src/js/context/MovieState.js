import { useReducer } from 'react';
import { IS_LOADING, FETCH_SUCCESS, FETCH_CAST, SEARCH_SHOWS, FETCH_ERROR } from './types';
import movieReducer from './movieReducer';
import MovieContext from './MovieContext';

const MAIN_API = 'https://api.tvmaze.com/';
const MOVIEAPIS = {
   shows: `${MAIN_API}shows`,
   searchShows: `${MAIN_API}search/shows?q=`,
   episodes: `${MAIN_API}seasons/`

};


const MovieState = (props) => {

   const initialState = {
      isLoading: false,
      shows: [],
      cast: [],
      search: [],
      hasError: ''
   };


   const [state, dispatch] = useReducer(movieReducer, initialState);
   const loading = () => dispatch({ type: IS_LOADING });
   const error = () => dispatch({ type: FETCH_ERROR });

   const setMovies = async () => {
      loading();
      try {
         const data = await fetch(MOVIEAPIS.shows);
         const shows = await data.json();
         dispatch({ type: FETCH_SUCCESS, payload: shows });
      } catch (err) {
         error(err.message);
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

   const setSearch = async (searchTerm) => {
      loading();
      try {
         const url = `${MOVIEAPIS.searchShows}${searchTerm}`;
         const data = await fetch(url);
         const showsFound = await data.json();
         dispatch({ type: SEARCH_SHOWS, payload: showsFound });
      } catch (err) {
         error(err.message);
      }
   };

   const { shows, search, cast } = state;
   const value = {
      shows,
      search,
      cast,
      loading: state.isLoading,
      error: state.hasError,
      setMovies,
      setCast,
      setSearch
   };
   return (
      <MovieContext.Provider value={value}>
         {props.children}
      </MovieContext.Provider>
   );
};

export default MovieState;