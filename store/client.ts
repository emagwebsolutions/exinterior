import sanityClient from '@sanity/client';
import { projectId, dataset } from './config';

const client = sanityClient({
  projectId,
  dataset,
  apiVersion: '2022-08-16', 
  useCdn: true,
});

export default client;
