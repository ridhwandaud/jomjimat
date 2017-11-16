import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Form, Item, Input, Label, Card, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import { transactionUpdate, transactionCreate } from  '../../actions';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';

class Transactions extends Component{

	constructor(props){
    super(props)
	    this.state = {date:"2016-05-15"}
	}

	// componentDidMount(){
	// 	console.log('componentDidMount');
	// 	Actions.refresh({ right: this.renderRightButton });
	// }

	onButtonPress() {
		const { value, note, date } = this.props;

		this.props.transactionCreate( { value, note, date });

		Actions.dashboard({type: 'reset'});
	}

	// renderRightButton = () => {
 //    return(
 //        <TouchableOpacity onPress={this.onButtonPress.bind(this)} >
 //            <Text style={{ color: 'black' }}> Save </Text>
 //        </TouchableOpacity>
 //    );
	// };

	render(){
		return(
				<Container>
	        <Header androidStatusBarColor="#ffffff" style={{ backgroundColor: 'white' }}>
	        	<Left>
	        		<Button transparent onPress={()=> Actions.pop()}>
	          		<Icon name='md-close' style={{fontSize: 25}}/>
	          	</Button>
	          </Left>
	          <Body>
	            <Title style={{ color: 'black'}}>Add Transaction</Title>
	          </Body>
	          <Right>
	          	<Button transparent onPress={this.onButtonPress.bind(this)}>
	          		<Text> Save </Text>
	          	</Button>
	          </Right>
	        </Header>
	        <Content>
	          <Form>
	            <Item floatingLabel>
	            	<Label>Value</Label>
	              <Input
	              	value={this.props.value}
	              	onChangeText={value => this.props.transactionUpdate({ prop: 'value', value })}
	              	style={{ fontSize: 20, fontWeight: 'bold', color: 'green'}}
	              />
	            </Item>
	            <Item floatingLabel>
	            	<Label>Note</Label>
	              <Input 
	              	value={this.props.note}
	              	onChangeText={value => this.props.transactionUpdate({ prop: 'note', value })}  
	              />
	            </Item>
	            <Item floatingLabel>
	            	<Label>Date</Label>
	              <Input 
	              	value={this.props.date}
	              	onChangeText={value => this.props.transactionUpdate({ prop: 'date', value })}  
	              />
	            </Item>
	          </Form>
	        </Content>
		     </Container>
		)
	}
}

const mapStateToProps = (state) => {
	const { value, note, date } = state.transactionForm;
	return { value, note, date };
};

export default connect(mapStateToProps,{ transactionUpdate, transactionCreate })(Transactions);