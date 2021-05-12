import { useState, useContext } from 'react';
import MovieContext from '../../context/MovieContext';



const SearchShows = () => {
   const result = useContext(MovieContext);

   const [value, setValue] = useState('');

   const onSubmit = (e, id) => {
      e.preventDefault();
      setValue('');
      result.setSearch(id);
   };

   const handleInput = (e) => {
      setValue(e.target.value);
   };

   return (
      <form onSubmit={(e) => onSubmit(e, value)}>
         <input type="text" value={value} onChange={handleInput} />
         <button type="submit">Search shows</button>
      </form>
   );
};

export default SearchShows;
