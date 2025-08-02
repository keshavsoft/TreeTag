import getUrlJson from './getUrl.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchUrl = getUrlJson.GetEndPoint;
    const jVarLocalUserName = jFLocalFromUrl();
    let response = await fetch(`${jVarLocalFetchUrl}/${jVarLocalUserName}`);

    return await response;
};

const jFLocalFromUrl = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const jVarLocalUserName = searchParams.get("UserName");

    return jVarLocalUserName;
};

export { StartFunc };

