import firebase from 'firebase';

import {	
	TRANSACTION_UPDATE,
	TRANSACTION_CREATE,
} from './types';

export const transactionUpdate = ({ prop, value }) => {
	console.log(value);
	return{
		type: EMPLOYEE_UPDATE,
		payload: { prop, value }

	};
};

// // save to firebase
// export const transactionCreate = ({ name, phone, shift }) => {
// 	const { currentUser } = firebase.auth();

// 	return (dispatch) => {
// 		firebase.database().ref(`/users/${currentUser.uid}/employees`)
// 			.push({ name, phone, shift })
// 			.then(() => { 
// 				dispatch({ type:EMPLOYEE_CREATE })
// 				Actions.employeeList({ type: 'reset' }) 
// 			});
// 	}	

// };
