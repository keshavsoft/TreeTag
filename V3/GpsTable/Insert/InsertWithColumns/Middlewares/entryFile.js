const CommonColumnsArray = ["DateTime","TreeName","Latitude","Longitude","UserName"];

const StartFunc = (req, res, next) => {
    const LocalBody = req.body;

    if (Array.isArray(LocalBody)) {
        return res.status(400).send("Request body should be Object only.");
    };

    if (typeof LocalBody === 'object' && Object.keys(LocalBody).length === 0) {
        return res.status(400).send("Request body should not be an empty object.");
    };

    if (Object.keys(LocalBody).some(ele => CommonColumnsArray.includes(ele)) === false) {
        return res.status(400).send(`Request body should contain any of the mandate keys: ${CommonColumnsArray}`);
    };

    next();
};

export { StartFunc };