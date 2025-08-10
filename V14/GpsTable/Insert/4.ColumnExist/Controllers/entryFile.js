import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnpk = LocalRequestBody.pk;
	let LocalCoumnUserName = LocalRequestBody.UserName;
	let LocalCoumnLongitude = LocalRequestBody.Longitude;
	let LocalCoumnLatitude = LocalRequestBody.Latitude;
	let LocalCoumnTreeName = LocalRequestBody.TreeName;
	let LocalCoumnDateTime = LocalRequestBody.DateTime;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnDateTime,LocalCoumnTreeName,LocalCoumnLatitude,LocalCoumnLongitude,LocalCoumnUserName,LocalCoumnpk});

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