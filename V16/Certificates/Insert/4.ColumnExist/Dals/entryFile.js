import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnusername,LocalCoumnpassword,LocalCoumnname,LocalCoumndate,LocalCoumnplantNo,LocalCoumnlat,LocalCoumnlng}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnusername,LocalCoumnpassword,LocalCoumnname,LocalCoumndate,LocalCoumnplantNo,LocalCoumnlat,LocalCoumnlng});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};