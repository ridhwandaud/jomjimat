import React from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import { Scene, Router, Actions } from 'react-native-router-flux';

const RouterComponent = () => {
	return(
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth" initial>
					<Scene key="login" component={LoginForm} title="Please Login" />
				</Scene>
				<Scene key="main" >
					<Scene
						component={Dashboard} 
						title="Dashboard" 
						intial
					/>
			</Scene>
			</Scene>
		</Router>	
	);
};

export default RouterComponent;