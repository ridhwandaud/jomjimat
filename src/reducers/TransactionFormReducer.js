import { 
	TRANSACTION_UPDATE,
	TRANSACTION_CREATE
} from '../actions/types';


const INITIAL_STATE = {
	value: '',
	note: '',
	date: ''
};


export default (state = INITIAL_STATE, action) => {
	switch (action.type) {	
		case TRANSACTION_UPDATE:
			return { ...state, [action.payload.prop]: action.payload.value };
		case TRANSACTION_CREATE:
			return INITIAL_STATE;	
		default:
		  return state;
	}
}
