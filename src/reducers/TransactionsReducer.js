import { 
	TRANSACTIONS_FETCH_SUCCESS,
	TRANSACTIONS_FETCH_START
} from '../actions/types';

const INITIAL_STATE = {
	isLoading: false,
};


export default (state = INITIAL_STATE, action) => {
	switch (action.type) {	
		case TRANSACTIONS_FETCH_START:
			console.log('TRANSACTIONS_FETCH_START');
			return {
				...state,
				...payload,
				isLoading: true,
				errorMessage: '',
			};	
		case TRANSACTIONS_FETCH_SUCCESS:
			return action.payload;
		default:
		  return state;
	}
}