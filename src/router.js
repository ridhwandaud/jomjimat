import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

const RouterComponent = () => {
	return(
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth" initial>
					<Scene key="login" component={LoginForm} title="Please Login" />
				</Scene>
				<Scene key="main" hideNavBar>
					<Scene key="dashboard" component={Dashboard} />
				</Scene>
			</Scene>
		</Router>	
	);
};

export default RouterComponent;