import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnDateTime,LocalCoumnTreeName,LocalCoumnLatitude,LocalCoumnLongitude,LocalCoumnUserName}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnDateTime,LocalCoumnTreeName,LocalCoumnLatitude,LocalCoumnLongitude,LocalCoumnUserName});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};