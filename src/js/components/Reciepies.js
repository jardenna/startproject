import React from 'react';

function Reciepies() {

   const [state, setState] = React.useState('hello');
   return (
      <>
         {state}
         <button onClick={() => setState('hello again')}>click</button>
      </>
   );
}

export default Reciepies;
