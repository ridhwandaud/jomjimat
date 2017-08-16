import firebase from 'firebase';

import {	
	TRANSACTION_UPDATE,
	TRANSACTION_CREATE,
	TRANSACTIONS_FETCH_SUCCESS,
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

export const transactionsFetch = () => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/transaction`)
			.on('value',snapshot => {
				dispatch({ type: TRANSACTIONS_FETCH_SUCCESS, payload: snapshot.val() });
			});
	}
};
