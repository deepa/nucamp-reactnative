import { ScrollView, Text } from 'react-native';
import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {
  state = {};
  render() {
    return (
      <ScrollView>
        <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
          <Card title='Contact us' wrapperStyle={{ margin: 20 }}>
            <Text>
              1 Nucamp Way{'\n'}Seattle, WA 98001{'\n'}U.S.A. {'\n\n'}Phone:
              1-206-555-1234{'\n'}Email: campsites@nucamp.co
            </Text>
          </Card>
        </Animatable.View>
      </ScrollView>
    );
  }

  static navigationOptions = {
    title: 'About us'
  };
}

export default Contact;
