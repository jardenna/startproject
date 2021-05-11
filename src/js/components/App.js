import React from 'react';

import MovieState from '../context/MovieState';
import Movies from './Movies';


function App() {
   return (
      <MovieState>
         <Movies />
      </MovieState>
   );
}

export default App;
