import firebase from 'firebase';
import {	
	TRANSACTION_UPDATE,
	TRANSACTION_CREATE,
	TRANSACTIONS_FETCH_START,
	TRANSACTIONS_FETCH_SUCCESS
} from './types';


export const transactionUpdate = ({ prop, value }) => {
	return{
		type: TRANSACTION_UPDATE,
		payload: { prop, value }

	};
};

// save to firebase
export const transactionCreate = ({ value, note, date }) => {
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/transaction`)
			.push({ value, note, date })
			.then(() => { 
				dispatch({ type:TRANSACTION_CREATE })
			});
	}	
};

const requestFetchTransactionStart = () => ({ type: TRANSACTIONS_FETCH_START });
const requestFetchTransactionSuccess = payload => ({ type: TRANSACTIONS_FETCH_SUCCESS, payload });

export const transactionsFetch = (dispatch) => {
	const { currentUser } = firebase.auth();

	//dispatch(requestFetchTransactionStart());

	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/transaction`)
			.on('value',snapshot => {
				//dispatch(requestFetchTransactionSuccess({payload: snapshot.val()}));
				dispatch({ type: TRANSACTIONS_FETCH_SUCCESS, payload: snapshot.val() });
			});
	}
};

