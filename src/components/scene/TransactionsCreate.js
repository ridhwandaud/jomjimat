import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
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

	onButtonPress() {
		const { value, note, date } = this.props;

		this.props.transactionCreate( { value, note, date });

		Actions.dashboard({type: 'reset'});
	}

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
	            <Title style={{ color: 'black'}}>Add</Title>
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
	              />
	            </Item>
	            <Item floatingLabel>
	            	<Label>Note</Label>
	              <Input 
	              	value={this.props.note}
	              	onChangeText={value => this.props.transactionUpdate({ prop: 'note', value })}  
	              />
	            </Item>
	            <DatePicker
			        style={{width: 200}}
			        date={this.props.date}
			        // date={this.state.date}
			        mode="date"
			        placeholder="select date"
			        format="DD-MM-YYYY"
			        minDate={moment().format('DD-MM-YYYY')}
			        maxDate={moment().add(2, 'months').format('DD-MM-YYYY')}
			        confirmBtnText="Confirm"
			        cancelBtnText="Cancel"
			        customStyles={{
			          dateIcon: {
			            position: 'absolute',
			            left: 0,
			            top: 4,
			            marginLeft: 0
			          },
			          dateInput: {
			            marginLeft: 36
			          }
			          // ... You can check the source to find the other keys.
			        }}
			        onDateChange={value => this.props.transactionUpdate({ prop: 'date', value })}
			        // onDateChange={(date) => {this.setState({date: date})}}
			      />
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