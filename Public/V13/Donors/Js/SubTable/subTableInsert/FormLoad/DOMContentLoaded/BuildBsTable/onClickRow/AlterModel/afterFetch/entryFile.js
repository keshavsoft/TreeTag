import { StartFunc as Status200 } from "./status200.js";
import { StartFunc as Status500 } from "./status409.js";

let StartFunc = async ({ inResponse }) => {
    let jVarLocalResponse = await inResponse;

    if (jVarLocalResponse.status === 200) {
        let jVarLocalDataAsJson = await jVarLocalResponse.json();
        Status200({ inData: jVarLocalDataAsJson[0] });
    };

    if (jVarLocalResponse.status === 500) {
        let jVarLocalSavedPk = await jVarLocalResponse.text();
        Status500({ inResponse: jVarLocalSavedPk });
    };
};

export { StartFunc };