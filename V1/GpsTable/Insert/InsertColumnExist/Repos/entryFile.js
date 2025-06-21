import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnDateTime,LocalCoumnTreeName,LocalCoumnLatitude,LocalCoumnLongitude}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnDateTime,LocalCoumnTreeName,LocalCoumnLatitude,LocalCoumnLongitude});

    return LocalFromDal;
};

export {
    postDefaultFunc
};