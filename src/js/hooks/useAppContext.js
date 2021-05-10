import { useContext } from 'react';
import Context from '../state/Context';

const useAppContext = () => {
   return useContext(Context);
};

export default useAppContext;
