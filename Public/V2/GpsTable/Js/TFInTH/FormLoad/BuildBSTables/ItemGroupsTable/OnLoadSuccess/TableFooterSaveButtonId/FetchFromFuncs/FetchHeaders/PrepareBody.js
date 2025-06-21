const StartFunc = () => {
    let jVarLocalItemName = jFLocalTableFooterItemNameInputId();
    let jVarLocalItemCategory = jVarLocalTableFooterItemCategoryInputId();
    let jVarLocalItemGroup = jFLocalTableFooterItemGroupInputId();
    let jvarlocalfield = jFLocalToInputTableFooterFarmerFieldInputId();

    let jVarLocalIsValid = true;

    if (jVarLocalItemName === "") {
        document.getElementById("TableFooterItemNameInputId").classList.add("is-invalid");
        jVarLocalIsValid = false;
    };

    if (jVarLocalItemCategory === "") {
        document.getElementById("TableFooterItemCategoryInputId").classList.add("is-invalid");
        jVarLocalIsValid = false;
    };

    if (jVarLocalItemGroup === "") {
        document.getElementById("TableFooterItemGroupInputId").classList.add("is-invalid");
        jVarLocalIsValid = false;
    };

    if (jvarlocalfield === "") {
        document.getElementById("TableFooterFarmerFieldInputId").classList.add("is-invalid");
        jVarLocalIsValid = false;
    };

    if (jVarLocalIsValid === false) {
        return;
    };

    let LocalObj = {};
    LocalObj.FARMERNAME = jVarLocalItemName;
    LocalObj.FARMERMOBILE = jVarLocalItemCategory;
    LocalObj.FARMERCITY = jVarLocalItemGroup;
    LocalObj.FARMERFIELD = jvarlocalfield;

    return LocalObj;
};

let jFLocalTableFooterItemNameInputId = () => {
    let jVarLocalTableFooterRateInputId = 'TableFooterItemNameInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterRateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jVarLocalTableFooterItemCategoryInputId = () => {
    let jVarLocalTableFooterItemCategoryInputId = 'TableFooterItemCategoryInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterItemCategoryInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalTableFooterItemGroupInputId = () => {
    let jVarLocalTableFooterItemGroupInputId = 'TableFooterItemGroupInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterItemGroupInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalToInputTableFooterFarmerFieldInputId = () => {
    let jVarLocalHtmlId = 'TableFooterFarmerFieldInputId';
    let jVarLocalTableFooterFarmerFieldInputId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTableFooterFarmerFieldInputId === null === false) {
        return jVarLocalTableFooterFarmerFieldInputId.value.trim();
    };
};

export { StartFunc };