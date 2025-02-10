const { ViewHealthcheckSdk } = require('view-sdk');

const api = new ViewHealthcheckSdk(
    'default', //tenant Id
    'default', //access token
    'http://view.homedns.org:8000/' //endpoint
);

const checkSwitchboardHealth = async () => {
    try {
        const data = await api.checkSwitchboardHealth();
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const checkConfigHealth = async () => {
    try {
        const data = await api.checkConfigHealth();
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const checkStorageHealth = async () => {
    try {
        const data = await api.checkStorageHealth();
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const checkVectorHealth = async () => {
    try {
        const data = await api.checkVectorHealth();
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const checkProcessorHealth = async () => {
    try {
        const data = await api.checkProcessorHealth();
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};
const checkAssistantHealth = async () => {
    try {
        const data = await api.checkAssistantHealth();
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const checkOrchestratorHealth = async () => {
    try {
        const data = await api.checkOrchestratorHealth();
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const checkCrawlerHealth = async () => {
    try {
        const data = await api.checkCrawlerHealth();
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const checkLexiHealth = async () => {
    try {
        const data = await api.checkLexiHealth();
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const checkEmbeddingsHealth = async () => {
    try {
        const data = await api.checkEmbeddingsHealth();
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};

const checkDirectorHealth = async () => {
    try {
        const data = await api.checkDirectorHealth();
        console.log(data, 'chk data');
    } catch (err) {
        console.log('err:', JSON.stringify(err));
    }
};


const useSDK = () => {
    checkSwitchboardHealth();
    checkConfigHealth();
    checkStorageHealth();
    checkVectorHealth();
    checkProcessorHealth();
    checkAssistantHealth();
    checkOrchestratorHealth();
    checkCrawlerHealth();
    checkLexiHealth();
    checkEmbeddingsHealth();
    checkDirectorHealth();
};

useSDK();
