var { ViewLexiSdk } = require('view-sdk');

var api = new ViewLexiSdk(
  'default', //tenant Id
  'default', //access token
  'http://view.homedns.org:8601/' //endpoint
);
var guid = 'default'; // {String}

const retrieveCollections = async () => {
  try {
    var cancelToken = new AbortController();
    const data = await api.retrieveCollections(cancelToken.signal);
    console.log(data, 'check data for retrieveCollections method');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const retrieveCollection = async () => {
  try {
    const data = await api.retrieveCollection(guid);
    console.log(data, 'check data for retrieveCollection method');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const retrieveCollectionStatistics = async () => {
  try {
    const data = await api.retrieveCollectionStatistics(guid);
    console.log(data, 'check data for retrieveCollection method');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const createCollection = async () => {
  try {
    const abortController = new AbortController();
    const request = {
      TenantGUID: 'default',
      Name: 'My second collection',
      AdditionalData: 'Yet another collection',
    };

    const response = await api.createCollection(request, abortController.signal);

    console.log(response, ' response from createCollection method');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const deleteCollection = async () => {
  try {
    const abortController = new AbortController();
    const response = await api.deleteCollection(guid, abortController.signal);

    console.log(response, ' response from createCollection method');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const useSdk = async () => {
  // await retrieveCollections();
  // await retrieveCollection();
  // await createCollection();
  // await deleteCollection();
  // await retrieveCollectionStatistics();
  // await deleteCollection();
};
useSdk();
