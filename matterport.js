(async function connectSdk() {
    const sdkKey = 'cq2izzptb9xut1ddc1dy7cz0a'; 
    const iframe = document.getElementById('showcase-iframe');

    // connect the sdk; log an error and stop if there were any connection issues
    try {
        const mpSdk = await window.MP_SDK.connect(
        iframe, // Obtained earlier
        sdkKey, // Your SDK key
        '' // Unused but needs to be a valid string
        );
        onShowcaseConnect(mpSdk);
    } catch (e) {
        console.error(e);
    }
})();

async function onShowcaseConnect(mpSdk) {
    // insert your sdk code here. See the ref https://matterport.github.io/showcase-sdk//docs/reference/current/index.html

    // try retrieving the model data and log the model's sid
    try {
        const modelData = await mpSdk.Model.getData();
        console.log('Model sid:' + modelData.sid);
    } catch (e) {
        console.error(e);
    }
}