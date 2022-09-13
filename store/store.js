import { useContext, createContext, useReducer } from 'react';
import { getCookie } from 'cookies-next';
import { setCookie } from 'cookies-next';
import client from './client';
import ImageUrlBuilder from '@sanity/image-url';

const builder = ImageUrlBuilder(client);

export const fetchBrand = async (dispatch) => {
  const post = await client.fetch(`*[_type == 'brand']{
    companyname,
    tags,
    mainImage{
      asset->{
        url
      }
    }
  }`);

  const data = post.map((v) => {
    return {
      ...v,
      mainImage: builder.image(v.mainImage).url(),
    };
  });

  const obj = {
    companyname: data[0].companyname,
    tags: data[0].tags,
    logo: data[0].mainImage,
  };

  dispatch({
    type: 'GET_BRAND',
    payload: data,
  });
  setCookie('getbrand', JSON.stringify(data));
};

export const fetchTestimonials = async (dispatch) => {
  const post = await client.fetch(`*[_type == 'testimonial']{
    name,
    title,
    body,
    mainImage{
      asset->{
        url
      }
    }
  }`);
  const data = post.map((v) => {
    return {
      ...v,
      mainImage: builder.image(v.mainImage).url(),
    };
  });
  dispatch({
    type: 'GET_TESTIMONIALS',
    payload: data,
  });
  setCookie('gettestimonials', JSON.stringify(data));
};

export const fetchTeamsection = async (dispatch) => {
  const post = await client.fetch(`*[_type == 'teamsection']{
    name,
    title,
    mainimage{
      asset->{
        url
      }
    }
  }`);
  const data = post.map((v) => {
    return {
      ...v,
      mainImage: builder.image(v.mainimage).url(),
    };
  });
  dispatch({
    type: 'GET_TEAMSECTION',
    payload: data,
  });
  setCookie('getteamsection', JSON.stringify(data));
};

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
    name,
    excerpt,
    size,
    colour,
    material,
    brand,
    "slug": slug.current,
    producttype,
    availability,
    price,
    imagesGallery,
    body,
    rating,
    numReviews,
    countInStock,
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
    type: 'FILTER_PRODUCT',
    payload: '',
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
  getTestimonials: getCookie('gettestimonials')
    ? JSON.parse(getCookie('gettestimonials'))
    : '',
  getTeamsection: getCookie('getteamsection')
    ? JSON.parse(getCookie('getteamsection'))
    : '',
  getBrand: getCookie('getbrand') ? JSON.parse(getCookie('getbrand')) : '',
  filterProduct: ''
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
    case 'GET_TESTIMONIALS':
      return {
        ...state,
        getTestimonials: state.getTestimonials
          ? state.getTestimonials
          : payload,
      };
    case 'GET_TEAMSECTION':
      return {
        ...state,
        getTeamsection: state.getTeamsection ? state.getTeamsection : payload,
      };
    case 'GET_BRAND':
      return {
        ...state,
        getBrand: state.getBrand ? state.getBrand : payload,
      };
    case 'FILTER_PRODUCT':
        return {
          ...state,
          filterProduct: payload,
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
