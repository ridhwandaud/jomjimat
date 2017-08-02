import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View, Text } from 'react-native';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Header } from './components/common';
import Router from './router';
import { Actions } from 'react-native-router-flux';

class App extends Component{

	componentWillMount(){
	  const config = {
	    apiKey: "AIzaSyBLQtvOoCv89nWNx7zkGmlUaoOLuWhtVm4",
	    authDomain: "jom-jimat.firebaseapp.com",
	    databaseURL: "https://jom-jimat.firebaseio.com",
	    projectId: "jom-jimat",
	    storageBucket: "jom-jimat.appspot.com",
	    messagingSenderId: "165175587052"
	  };

	  firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
    	if (user) {
      	Actions.main();
    	} 
    });
	}

	render(){

		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return(
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;