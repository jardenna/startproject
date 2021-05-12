import { useContext, useEffect } from 'react';

import MovieContext from '../../context/MovieContext';
import SearchShows from './SearchShows';

import { removeTags } from '../../utils/removeTags';

const Shows = () => {
   const result = useContext(MovieContext);
   const { shows, loading, error, setMovies, setCast, cast } = result;

   useEffect(() => {
      setMovies();
   }, []);



   const getFullCats = (id) => {
      setCast(id);
   };
   return (
      <div>
         <SearchShows />
         {loading && 'Loading...'}
         {error.length > 0 && 'ERROR!!!'}

         {shows.map(show => {

            return (
               <div key={show.id}>
                  <h2>{show.name}</h2>
                  {removeTags(show.summary)}
                  <a href={show.officialSite}>officialSite</a>
                  <img src={show.image.medium} alt={show.name} />
                  <button onClick={() => getFullCats(show.id)}>See full cast</button>
               </div>
            );
         })}

      </div>
   );
};

export default Shows;
