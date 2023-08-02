const types = {
	SET_SHOWED_COUNTRIES: 'SET_SHOWED_COUNTRIES',
	TEXT_UPDATE: 'TEXT_UPDATE',
};

const reducer = (state, action) => {
	switch(action.type) {
		case types.SET_SHOWED_COUNTRIES: {
			return {
				...state,
				countries: action.payload.filter(item => item.name.common !== 'Azerbaijan' && item.name.common !== 'Turkey'),
			}
		}
		case types.TEXT_UPDATE: return {
			...state,
			text: action.payload,
		}
		default: return state
	}
};

export default reducer;
export { types };