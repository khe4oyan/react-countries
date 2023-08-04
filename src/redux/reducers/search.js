const initState = {
	searchText: '',
	searchedCountries: [],
};

export default function searchReducer(state = initState, action) {
	switch(action.type) {
		case 'edit': return {
			searchedCountries: [],
			searchText: action.payload,
		};
		case 'searchedCountries': {
			return {
				...state,
				searchedCountries: action.payload,
			}
		}
		default: return state;
	}
}