import { useContext, useEffect } from 'react';

import Context from '../../state/Context';


const Movies = () => {
   const githubContext = useContext(Context);

   useEffect(() => {
      githubContext.setPosts();
   }, []);
   const { posts, loading } = githubContext;
   console.log(posts, loading);
   return (
      <div>
         hello
      </div>
   );
};

export default Movies;
