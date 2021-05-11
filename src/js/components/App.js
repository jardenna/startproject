
import MovieState from '../state/MovieContext/MovieState';
import Movies from './Movies/Movies';

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
