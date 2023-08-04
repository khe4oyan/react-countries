const initState = {
	oceania: [],
	americas: [],
	africa: [],
	europe: [],
	asia: [],
	antarctic: [],
};

export default function countriesReducer(state = initState, action) {
	switch(action.type) {
		case 'oceania': return {
			...state,
			oceania : action.payload
		}
		case 'americas': return {
			...state,
			americas : action.payload
		}
		case 'africa': return {
			...state,
			africa : action.payload
		}
		case 'europe': return {
			...state,
			europe : action.payload
		}
		case 'asia': return {
			...state,
			asia : action.payload
		}
		case 'antarctic': return {
			...state,
			antarctic : action.payload
		}
		default: return state;
	}
}

const regions = Object.keys(initState);
export { regions };