import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

class Search extends Component{

  onPressSearch(){
    Actions.search();
  }

  onPressCamera(){
    Actions.search();
  }
	render(){
		return(
			<Container>
        <Header>
        	<Left />
          <Body>
            <Title>Search</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Seatch Section
          </Text>
        </Content>
				<Footer>
          <FooterTab>
            <Button vertical active onPress={this.onPressCamera.bind(this)}>
              <Icon name="home"/>
              <Text>Home</Text>
            </Button>
            <Button vertical onPress={this.onPressSearch.bind(this)}>
              <Icon name="search" />
              <Text>search</Text>
            </Button>
            <Button vertical onPress={this.onPressCamera.bind(this)}>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical onPress={this.onPressCamera.bind(this)}>
              <Icon name="person" />
              <Text>Account</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
		);
	}
}

export default Search;