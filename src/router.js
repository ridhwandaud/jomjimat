import React from 'react';
import LoginForm from './components/LoginForm';
import TransactionsList from './components/scene/TransactionsList';
import { Scene, Router, Actions } from 'react-native-router-flux';

const RouterComponent = () => {
	return(
		<Router sceneStyle={{ paddingTop:65 }}>
			<Scene key="auth">
				<Scene key="login" component={LoginForm} title="Please Login" />
				<Scene
					key="dashboard"
					component={TransactionsList} 
					title="Dashboard" 
					intial
				/>
			</Scene>
		</Router>	
	);
};

export default RouterComponent;