import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnName,LocalCoumnTreeNo,LocalCoumnLatitude,LocalCoumnLongitude}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnName,LocalCoumnTreeNo,LocalCoumnLatitude,LocalCoumnLongitude});

    return LocalFromDal;
};

export {
    postDefaultFunc
};