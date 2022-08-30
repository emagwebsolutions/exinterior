export default {
  name: 'teamsection',
  title: 'Team Section',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'mainimage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}