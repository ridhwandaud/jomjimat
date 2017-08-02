import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

class Dashboard extends Component{
	render(){
		return(
			<Container>
        <Header>
        	<Left />
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
				<Footer>
          <FooterTab>
            <Button vertical active>
              <Icon name="apps"/>
              <Text>Apps</Text>
            </Button>
            <Button vertical onPress={() => console.log('Camera')}>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
		);
	}
}

export default Dashboard;