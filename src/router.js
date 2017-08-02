import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Search from './components/Search';

const RouterComponent = () => {
	return(
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth" initial>
					<Scene key="login" component={LoginForm} title="Please Login" />
				</Scene>
				<Scene key="main" hideNavBar>
					<Scene key="dashboard" component={Dashboard} />
					<Scene key="search" component={Search} />
				</Scene>
			</Scene>
		</Router>	
	);
};

export default RouterComponent;