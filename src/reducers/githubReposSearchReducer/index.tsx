const initialState = {};

export default (state = initialState, action) => {
	const { type } = action;
	switch (type) {
		case 'init': {
			return state;
		}
		default:
			return state;
	}
};
