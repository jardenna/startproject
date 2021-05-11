import { useReducer } from 'react';

import { MOVIETYPES } from './movieTypes';
import movieReducer from './movieReducer';
import Context from './Context';

const MAIN_API = 'https://api.tvmaze.com/';
const MOVIEAPIS = {
   shows: `${MAIN_API}shows`,
   searchShows: `${MAIN_API}/search/shows?=`
};

const initialState = {
   shows: [],
   episodes: [],
   cast: [],
   notFound: [],
   loading: false,
   error: ''
};


const MovieState = (props) => {
   const [state, dispatch] = useReducer(movieReducer, initialState);
   const setLoading = dispatch({ type: MOVIETYPES.SET_LOADING });
   const setError = dispatch({ type: MOVIETYPES.SET_ERROR });
   const setNotFound = dispatch({ type: MOVIETYPES.SET_NOT_FOUND });

   //Initial shows

   const initialShows = async () => {
      setLoading();
      try {
         const data = await fetch(MOVIEAPIS.shows);
         const shows = await data.json();

         if (!shows) {
            setNotFound([]);
         }

         dispatch({ type: MOVIETYPES.GET_SHOWS, payload: shows });

      } catch (err) {
         setError(err);
      }
   };

   //Search shows
   const searchShows = async () => {
      setLoading();
      try {
         const data = await fetch(MOVIEAPIS.searchShows);

         const foundShows = data.json();
         if (!foundShows) {
            setNotFound([]);
         }

         dispatch({ type: MOVIETYPES.SEARCH_SHOWS, payload: foundShows });
      } catch (err) {
         setError(err);
      }
   };

   //Get Episodes
   const getEpisodes = async (id) => {
      const url = `${MAIN_API}seasons/${id}/episodes`;
      try {
         const data = await fetch(url);

         const episodes = await data.json();
         if (!episodes) {
            setNotFound([]);
         }
         dispatch({ type: MOVIETYPES.GET_EPISODES, payload: episodes });
      } catch (err) {
         setError(err);
      }
   };

   //Get Cast

   const getCast = async (id) => {
      const url = `${MAIN_API}/shows/${id}/cast`;
      setLoading();
      try {
         const data = await fetch(url);
         const cast = await data.json;

         dispatch({ type: MOVIETYPES.GET_CAST, payload: cast });
      } catch (err) {
         setError(err);
      }
   };

   const value = {

      episodes: state.episodes,
      cast: state.episodes,
      notFound: state.notFound


   };

   return (
      <Context.Provider value={value}>
         {props.children}
      </Context.Provider>
   );

};

export default MovieState;