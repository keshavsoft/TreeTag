import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnDonorName,LocalCoumnDonorMobile}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnDonorName,LocalCoumnDonorMobile});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};