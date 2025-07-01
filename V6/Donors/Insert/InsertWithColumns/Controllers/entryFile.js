import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnDonorMobile = LocalRequestBody.DonorMobile;
	let LocalCoumnDonorName = LocalRequestBody.DonorName;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnDonorName,LocalCoumnDonorMobile});

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