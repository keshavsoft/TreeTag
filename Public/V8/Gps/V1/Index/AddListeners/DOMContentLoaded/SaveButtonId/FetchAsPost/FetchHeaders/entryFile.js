import KeysJson from './keys.json' with { type: 'json' };

let StartFunc = ({ inLatitude, inLongitude, inTreeName }) => {
    let jVarLocalBody = {};

    jVarLocalBody.Longitude = inLongitude;
    jVarLocalBody.Latitude = inLatitude;
    jVarLocalBody.TreeName = inTreeName;
    jVarLocalBody.DateTime = new Date();

    KeysJson.body = JSON.stringify(jVarLocalBody);

    return KeysJson;
};

const jFLocalTodayDate = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
};

export { StartFunc };
