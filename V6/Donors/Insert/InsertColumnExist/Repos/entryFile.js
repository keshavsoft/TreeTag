import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnDonorName,LocalCoumnDonorMobile}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnDonorName,LocalCoumnDonorMobile});

    return LocalFromDal;
};

export {
    postDefaultFunc
};