import React from 'react';

import MovieState from '../context/MovieState';
import Shows from './shows/Shows';

function App() {
   return (
      <MovieState>
         <main className="container">
            <Shows />
         </main>
      </MovieState>
   );
}

export default App;
