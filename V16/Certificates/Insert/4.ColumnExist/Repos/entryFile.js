import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnusername,LocalCoumnpassword,LocalCoumnname,LocalCoumndate,LocalCoumnplantNo,LocalCoumnlat,LocalCoumnlng}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnusername,LocalCoumnpassword,LocalCoumnname,LocalCoumndate,LocalCoumnplantNo,LocalCoumnlat,LocalCoumnlng});

    return LocalFromDal;
};

export {
    postDefaultFunc
};