import { useContext, createContext, useReducer } from 'react';
import { getCookie } from 'cookies-next';

const initialState = {
  getPost: getCookie('getpost') ? JSON.parse(getCookie('getpost')) : '',
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET_POST':
      return {
        ...state,
        getPost: state.getPost? state.getPost : payload
      };
    default:
      return state;
  }
};

const storeContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const val = { state, dispatch };
  return <storeContext.Provider value={val}>{children}</storeContext.Provider>;
};

export const useStore = () => useContext(storeContext);
