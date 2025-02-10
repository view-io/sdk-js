const { ViewLexiSdk } = require('view-sdk');

const api = new ViewLexiSdk(
  'default', //tenant Id
  'default', //access token
  'http://view.homedns.org:8601/' //endpoint
);

const retrieveCollections = async () => {
  try {
    const data = await api.retrieveCollections();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const useSDK = () => {
  retrieveCollections();
};

useSDK();
