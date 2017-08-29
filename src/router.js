import React from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import { Scene, Router, Actions } from 'react-native-router-flux';

const RouterComponent = () => {
	return(
		<Router sceneStyle={{ paddingTop:65 }}>
			<Scene key="auth" initial>
				<Scene key="login" component={LoginForm} title="Please Login" />
				<Scene
					key="dashboard"
					component={Dashboard} 
					title="Dashboard" 
					intial
				/>
			</Scene>
		</Router>	
	);
};

export default RouterComponent;