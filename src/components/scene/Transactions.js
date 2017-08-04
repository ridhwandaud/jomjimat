import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Transactions extends Component{
	static navigationOptions = {
    title: 'Transactions',
    tabBarLabel: 'Transactions',
    tabBarIcon: () => (<Icon size={24} color="white" name="add-shopping-cart" />)
  }

	render(){
		return(
			<View>
				<Text>
					Transactions
				</Text>
			</View>		
		)
	}
}

export default Transactions;