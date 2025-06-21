import { StartFunc as StartFuncFor200Res } from "./For200Res/entryFile.js";

let StartFunc = ({ inResponseAsJson }) => {
    
    let jVarLocalModifiedArray = [...inResponseAsJson].reverse();

    StartFuncFor200Res({ inResponseAsJson: jVarLocalModifiedArray });
};

export { StartFunc };
