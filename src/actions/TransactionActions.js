import firebase from 'firebase';
import { 
	TRANSACTION_CREATE,
	TRANSACTION_UPDATE
} from './types';
import { NavigationActions } from 'react-navigation';

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
		firebase.database().ref(`/users/${currentUser.uid}/transactions`)
			.push({ value, note, date })
			.then(() => { 
				dispatch({ type:TRANSACTION_CREATE })
				//Actions.employeeList({ type: 'reset' }) 
			});
	}	

};