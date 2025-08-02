import { StartFunc as StartFuncFromFetchAsGet } from './FetchAsGet/EntryFile.js';

let StartFunc = () => {
	StartFuncFromFetchAsGet();
};

export { StartFunc };