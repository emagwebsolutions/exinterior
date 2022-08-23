import sanityClient from '@sanity/client';
import { projectId, dataset } from './config';

const client = sanityClient({
  projectId,
  dataset,
  apiVersion: '2021-08-31', 
  useCdn: true,
});

export default client;
