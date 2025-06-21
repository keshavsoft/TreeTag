// import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";
import { StartFunc as StartFuncOnLoadSuccess } from "./OnLoadSuccess/EntryFile.js";

const StartFunc = () => {

    var $table = $('#table');

    $table.bootstrapTable({
        data: [],
        toolbar: "#toolbar",
        search: true,
        searchable: true,
        onPostBody: function () {
            StartFuncOnLoadSuccess();
            $("#TableFooterItemNameInputId").focus();
        },
        // onClickRow: StartFuncOnClickRowFunc
    });
};

export { StartFunc };
