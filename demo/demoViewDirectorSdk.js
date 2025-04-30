import { ViewDirectorSdk } from 'view-sdk';

const director = new ViewDirectorSdk(
  '00000000-0000-0000-0000-000000000000', //tenant Id
  'default', //access token
  'http://localhost:8501/' //endpoint
);

// director.accessToken =
//   "mXCNtMWDsW0/pr+IwRFUjeDO2cbVr5o4WlPplku8dbpYzqXbeV0c5ofMbX/YiOhMzPSr1DRg/PyE25KpaGzto0+uchyYY2jGJvlj7I/nSFmqlMEsXYy73LsvYjG4tSlimGN60Hj51mmvdaieE8BOVStYfehip+tEXiELfP7tXX6N6EIFAyCQZRWtRoKkXK+DZoY265roa6TwGehPTz4n4vrKb3XwrWzAWOl/pb6G+t3+P/oa52JqKojKT1wB+sLJ8sjzJpalYuQzLEOcK5Nwyw==";

// director.timeout = 10000;

const generateEmbedding = async () => {
  try {
    const response = await director.generateEmbedding({
      Model: 'all-MiniLM-L6-v2',
      ApiKey: '',
      Contents: ['This is a sample chunk of text, hello!'],
    });
    console.log(response);
  } catch (error) {
    console.error('Error generating embedding:', error);
  }
};

generateEmbedding();

const listConnections = async () => {
  try {
    const response = await director.retrieveConnections();
    console.log(response);
  } catch (error) {
    console.error('Error listing connections:', error);
  }
};

// listConnections();
