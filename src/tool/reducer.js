const types = {
	GET_COUNTRIES: 'GET_COUNTRIES',
	SEARCH_TEXT: 'SEARCH_TEXT',
	SHOW_ALL: 'SHOW_ALL',
};

const reducer = (state, action) => {
	switch(action.type) {
		case types.GET_COUNTRIES: {
			return {
				...state,
				countries: action.payload.filter(item => item.name.common !== 'Azerbaijan' && item.name.common !== 'Turkey'),
			}
		}
		case types.SEARCH_TEXT: return {
			...state,
			text: action.payload,
		}
		case types.SHOW_ALL: return {
			...state,
			text: '',
		}

		default: return state
	}
}

export default reducer;
export { types };