import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnDateTime,LocalCoumnTreeName,LocalCoumnLatitude,LocalCoumnLongitude,LocalCoumnUserName,LocalCoumnpk}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnDateTime,LocalCoumnTreeName,LocalCoumnLatitude,LocalCoumnLongitude,LocalCoumnUserName,LocalCoumnpk});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};