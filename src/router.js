import React from 'react';
import LoginForm from './components/LoginForm';
import TransactionsList from './components/scene/TransactionsList';
import TransactionsCreate from './components/scene/TransactionsCreate';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { View, Text } from 'react-native';

const RouterComponent = () => {
	return(
		<Router sceneStyle={{ backgroundColor: '#fff'}}>
			<Scene key="auth" 
				navigationBarStyle={{ backgroundColor: '#2289dc' }} 
				titleStyle={{ color: 'white' }}
			>
				<Scene key="login" component={LoginForm} title="Please Login" />
				<Scene
					key="dashboard"
					component={TransactionsList} 
					title="Transactions"
					intial
				/>
				<Scene
					key="add"
					component={TransactionsCreate} 
					intial
					hideNavBar={true}
				/>
			</Scene>
		</Router>	
	);
};

export default RouterComponent;