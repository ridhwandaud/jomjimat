import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Budget extends Component{
	static navigationOptions = {
    title: 'Budget',
    tabBarLabel: 'Budget',
    tabBarIcon: () => (<Icon size={24} color="white" name="account-balance-wallet" />)
  }

	render(){
		return(
			<View>
				<Text>
					Budget
				</Text>
			</View>		
		)
	}
}

export default Budget;