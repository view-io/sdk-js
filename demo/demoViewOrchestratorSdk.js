const { ViewOrchestratorSdk } = require('view-sdk');

const api = new ViewOrchestratorSdk(
  'default', //tenant Id
  'default', //access token
  'http://view.homedns.org:8501/' //endpoint
);

const createTrigger = async () => {
  try {
    const data = await api.createTrigger({
      GUID: '01010101-0101-0101-0101-010101010103',
      TenantGUID: 'default',
      Name: 'test name',
      TriggerType: 'HTTP',
      HttpMethod: 'POST',
      HttpUrlPrefix: '/v2/test/',
      Notes: 'hello',
      CreatedUtc: '2024-11-21T05:49:57.828Z',
    });
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const retrieveTriggers = async () => {
  try {
    const data = await api.retrieveTriggers();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const retrieveTrigger = async () => {
  try {
    const data = await api.retrieveTrigger('01010101-0101-0101-0101-010101010103');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const retrieveSteps = async () => {
  try {
    const data = await api.retrieveSteps();
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const retrieveStep = async () => {
  try {
    const data = await api.retrieveStep('csharppublicip');
    console.log(data, 'chk data');
  } catch (err) {
    console.log('err:', JSON.stringify(err));
  }
};

const useSDK = () => {
  // createTrigger();
  // retrieveTriggers();
  // retrieveTrigger();
  // retrieveSteps();
  retrieveStep();
};

useSDK();
