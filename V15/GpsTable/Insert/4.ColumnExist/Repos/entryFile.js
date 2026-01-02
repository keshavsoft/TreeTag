import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnDateTime,LocalCoumnTreeName,LocalCoumnLatitude,LocalCoumnLongitude,LocalCoumnUserName,LocalCoumnpk}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnDateTime,LocalCoumnTreeName,LocalCoumnLatitude,LocalCoumnLongitude,LocalCoumnUserName,LocalCoumnpk});

    return LocalFromDal;
};

export {
    postDefaultFunc
};