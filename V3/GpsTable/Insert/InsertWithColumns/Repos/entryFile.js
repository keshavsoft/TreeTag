import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnDateTime,LocalCoumnTreeName,LocalCoumnLatitude,LocalCoumnLongitude,LocalCoumnUserName}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnDateTime,LocalCoumnTreeName,LocalCoumnLatitude,LocalCoumnLongitude,LocalCoumnUserName});

    return LocalFromDal;
};

export {
    postDefaultFunc
};