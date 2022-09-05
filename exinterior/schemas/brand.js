export default {
  name: 'brand',
  title: 'Brand',
  type: 'document',
  fields: [
    {
      name: 'companyname',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
