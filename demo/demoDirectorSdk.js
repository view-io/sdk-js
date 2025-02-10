const { ViewDirectorSdk } = require('view-sdk');

const api = new ViewDirectorSdk(
  'default', //tenant Id
  'default', //access token
  'http://view.homedns.org:8000/' //endpoint
);

const generateEmbedding = async () => {
  try {
    const data = await api.generateEmbedding({
      Model: 'all-MiniLM-L6-v2',
      ApiKey: '',
      Contents: [
        'This is a sample chunk of text, hello!',
        "Oh wow, here's another chunk of text",
        'And yet again, a third chunk of text',
      ],
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const retrieveConnections = async () => {
  try {
    const data = await api.retrieveConnections(
      'mXCNtMWDsW0/pr+IwRFUjeDO2cbVr5o4WlPplku8dbpYzqXbeV0c5ofMbX/YiOhMzPSr1DRg/PyE25KpaGzto0+uchyYY2jGJvlj7I/nSFmqlMEsXYy73LsvYjG4tSlimGN60Hj51mmvdaieE8BOVStYfehip+tEXiELfP7tXX6N6EIFAyCQZRWtRoKkXK+DZoY265roa6TwGehPTz4n4vrKb3XwrWzAWOl/pb6G+t3+P/oa52JqKojKT1wB+sLJ8sjzJpalYuQzLEOcK5Nwyw=='
    );
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const useSDK = () => {
    generateEmbedding();
  retrieveConnections();
};

useSDK();
