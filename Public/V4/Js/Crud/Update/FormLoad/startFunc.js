import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
import { StartFunc as UserDetails } from "./UserDetails/Entry.js";

const StartFunc = async () => {
    StartFuncAddListeners();
    UserDetails();
};

export { StartFunc };
