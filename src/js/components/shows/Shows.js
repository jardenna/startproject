import { useContext, useEffect } from 'react';

import MovieContext from '../../context/MovieContext';
import SearchShows from './SearchShows';

import { removeTags } from '../../utils/removeTags';

const Shows = () => {
   const result = useContext(MovieContext);
   const { shows, loading, error, setMovies, setCast, search, cast } = result;

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
         <ul>
            {shows.map(show => {

               return (
                  <li key={show.id}>
                     <section className="card">
                        <h2>{show.name}</h2>
                        <img src={show.image.medium} alt={show.name} />

                        <div className="content">
                           {removeTags(show.summary)}
                           <a href={show.officialSite}>officialSite</a>
                           <button onClick={() => getFullCats(show.id)}>See full cast</button>
                        </div>
                     </section>

                  </li>
               );
            })}

         </ul>

      </div>
   );
};

export default Shows;
