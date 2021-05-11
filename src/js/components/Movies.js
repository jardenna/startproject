import { useContext, useEffect } from 'react';
import MovieContext from '../context/MovieContext';

const Movies = () => {

   const result = useContext(MovieContext);

   const { shows, loading, error, setMovies } = result;

   useEffect(() => {
      setMovies();
   }, []);

   console.log(shows);
   return (
      <div>
         hello
      </div>
   );
};

export default Movies;
