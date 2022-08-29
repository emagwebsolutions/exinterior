import { useContext, createContext, useReducer } from 'react';
import { getCookie } from 'cookies-next';
import { setCookie } from 'cookies-next';
import client from './client';
import ImageUrlBuilder from '@sanity/image-url';

const builder = ImageUrlBuilder(client);

export const fetchContacts = async (dispatch) => {
  const post = await client.fetch(`*[_type == 'contacts']`);
  dispatch({
    type: 'GET_CONTACTS',
    payload: post,
  });
  setCookie('getcontacts', JSON.stringify(post));
};

export const fetchClientele = async (dispatch) => {
  const post = await client.fetch(`*[_type == 'clientele']{
    title,
    mainImage{
      asset->{
        url
      }
    },
  }`);
  const data = post.map((v) => {
    return {
      ...v,
      mainImage: builder.image(v.mainImage).url(),
    };
  });
  dispatch({
    type: 'GET_CLIENTELE',
    payload: data,
  });
  setCookie('getclientele', JSON.stringify(data));
};

export const fetchPromotion = async (dispatch) => {
  const post = await client.fetch(`*[_type == 'promotion']{
    title,
    body
  }`);

  const data = post.map((v) => {
    return {
      ...v,
    };
  });

  dispatch({
    type: 'GET_PROMOTION',
    payload: data,
  });
  setCookie('getpromotion', JSON.stringify(data));
};

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
  getPromotion: getCookie('getpromotion')
    ? JSON.parse(getCookie('getpromotion'))
    : '',
  getClientele: getCookie('getclientele')
    ? JSON.parse(getCookie('getclientele'))
    : '',
  getContacts: getCookie('getcontacts')
    ? JSON.parse(getCookie('getcontacts'))
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
    case 'GET_CLIENTELE':
      return {
        ...state,
        getClientele: state.getClientele ? state.getClientele : payload,
      };
    case 'GET_PROMOTION':
      return {
        ...state,
        getPromotion: state.getPromotion ? state.getPromotion : payload,
      };
    case 'GET_CONTACTS':
      return {
        ...state,
        getContacts: state.getContacts ? state.getContacts : payload,
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
