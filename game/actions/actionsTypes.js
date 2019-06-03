const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const requestTypes = [REQUEST, SUCCESS, FAILURE];

function createRequestTypes(base, types = defaultTypes) {
	const res = {};
	types.forEach(type => (res[type] = `${ base }_${ type }`));
	return res;
}

export const AUTHPANEL = createRequestTypes('AUTHPANEL', [
	...defaultTypes,
	'SHOW_PANEL',
	'HIDE_PANEL'
]);