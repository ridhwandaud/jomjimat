import React, { Component } from 'react';
import { View, Text, Modal, TouchableHighlight } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Form, Item, Input } from 'native-base';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

class TransactionsList extends Component{
	static navigationOptions = {
    title: 'Transactions',
    tabBarLabel: 'Transactions',
    tabBarIcon: () => (<Icon size={24} color="white" name="md-add" />)
  }

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


	render(){
		return(
			<View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Buy" onPress={() => this.setModalVisible(true)}>
            <Icon name="md-cart" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Transfer" onPress={() => {}}>
            <Icon name="md-swap" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <Container>
	        <Header androidStatusBarColor="#ffffff">
	        	<Left>
	        		<Button transparent onPress={()=>{this.setModalVisible(!this.state.modalVisible)}}>
	          		<Icon name='md-close' style={{fontSize: 25}}/>
	          	</Button>
	          </Left>
	          <Body>
	            <Title>Add</Title>
	          </Body>
	          <Right />
	        </Header>
	        <Content>
	          <Form>
	            <Item>
	              <Input placeholder="RM 0" />
	            </Item>
	            <Item>
	              <Input placeholder="Note" />
	            </Item>
	            <Item last>
	              <Input placeholder="Date" />
	            </Item>
	            <Button block success onPress={()=>{this.setModalVisible(!this.state.modalVisible)}}>
	          		<Text>Add</Text>
	          	</Button>
	          </Form>
	        </Content>
		     </Container>
        </Modal>
      </View>	
		)
	}
}

const styles = {
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
};

export default TransactionsList;