require('dotenv').config();
const client = require('@sanity/client');

module.exports = client({
  projectId: process.env.SANITY_ID,
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: process.env.NODE_ENV === 'production',
});
