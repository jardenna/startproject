import React from 'react';

import MovieState from '../context/MovieState';
import Movies from './Movies';


function App() {
   return (
      <MovieState>
         <main className="container">
            <Movies />
         </main>

      </MovieState>
   );
}

export default App;
