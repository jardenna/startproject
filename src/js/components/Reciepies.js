import React from 'react';

function Reciepies() {

   const [state, setState] = React.useState('');
   return (
      <div>
         <section className="hero" />
         {state}
         <button onClick={() => setState('hello')}>click</button>
         <button onClick={() => setState('hello again')}>Click</button>

      </div>
   );
}

export default Reciepies;
