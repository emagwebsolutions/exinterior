import { useContext, createContext, useReducer } from 'react';
import { getCookie } from 'cookies-next';
import { setCookie } from 'cookies-next';
import client from './client';
import ImageUrlBuilder from '@sanity/image-url';

const builder = ImageUrlBuilder(client);

export const fetchPost = async (dispatch) => {
  const post = await client.fetch(`*[_type == 'post']{
    title,
    body,
    mainImage{
      asset->{
        url
      }
    },
    "cat_title": categories[]->title,
    "slug": slug.current,
  }`);
  const data = post.map((v) => {
    return {
      ...v,
      mainImage: builder.image(v.mainImage).url(),
    };
  });
  dispatch({
    type: 'GET_POST',
    payload: data,
  });
  setCookie('getpost', JSON.stringify(data));
};

export const fetchProduct = async (dispatch) => {
  const post = await client.fetch(`*[_type == 'product']{
    mainImage{
      asset->{
        url
      }
    },
    "cat_title": categories[]->title,
  }`);
  const data = post.map((v) => {
    return {
      ...v,
      mainImage: builder.image(v.mainImage).url(),
    };
  });
  dispatch({
    type: 'GET_PRODUCT',
    payload: data,
  });
  setCookie('getproduct', JSON.stringify(data));
};

const initialState = {
  getPost: getCookie('getpost') ? JSON.parse(getCookie('getpost')) : '',
  getProduct: getCookie('getproduct')
    ? JSON.parse(getCookie('getproduct'))
    : '',
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET_POST':
      return {
        ...state,
        getPost: state.getPost ? state.getPost : payload,
      };
    case 'GET_PRODUCT':
      return {
        ...state,
        getProduct: state.getProduct ? state.getProduct : payload,
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
