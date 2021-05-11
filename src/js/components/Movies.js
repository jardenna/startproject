import { useContext, useEffect } from 'react';

import MovieContext from '../context/MovieContext';


const Movies = () => {

   const result = useContext(MovieContext);

   const { shows, loading, error, setMovies, setCast, cast } = result;

   useEffect(() => {
      setMovies();
   }, []);

   console.log(cast);

   const getFullCats = (id) => {
      setCast(id);
   };
   return (
      <div>

         {loading && 'Loading...'}
         {error.length > 0 && 'ERROR!!!'}

         {shows.map(show => (
            <div key={show.id}>
               {show.name}
               <button onClick={() => getFullCats(show.id)}>See full cast</button>
            </div>
         ))}

      </div>
   );
};

export default Movies;
