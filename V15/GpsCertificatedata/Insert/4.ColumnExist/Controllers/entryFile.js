import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnLongitude = LocalRequestBody.Longitude;
	let LocalCoumnLatitude = LocalRequestBody.Latitude;
	let LocalCoumnTreeNo = LocalRequestBody.TreeNo;
	let LocalCoumnName = LocalRequestBody.Name;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnName,LocalCoumnTreeNo,LocalCoumnLatitude,LocalCoumnLongitude});

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