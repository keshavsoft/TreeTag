import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnlng = LocalRequestBody.lng;
	let LocalCoumnlat = LocalRequestBody.lat;
	let LocalCoumnplantNo = LocalRequestBody.plantNo;
	let LocalCoumndate = LocalRequestBody.date;
	let LocalCoumnname = LocalRequestBody.name;
	let LocalCoumnpassword = LocalRequestBody.password;
	let LocalCoumnusername = LocalRequestBody.username;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnusername,LocalCoumnpassword,LocalCoumnname,LocalCoumndate,LocalCoumnplantNo,LocalCoumnlat,LocalCoumnlng});

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.SuccessText);
};

export {
    postFilterDataFromBodyFunc
};