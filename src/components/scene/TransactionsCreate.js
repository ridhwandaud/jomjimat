import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Transactions extends Component{
	render(){
		return(
			<View style={{flex: 1,flexDirection: 'column', alignItems: 'flexEnd'}}>
				<Text>
					Transactions
				</Text>
			</View>		
		)
	}
}

export default Transactions;