import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnName,LocalCoumnTreeNo,LocalCoumnLatitude,LocalCoumnLongitude}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnName,LocalCoumnTreeNo,LocalCoumnLatitude,LocalCoumnLongitude});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};