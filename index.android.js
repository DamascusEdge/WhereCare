/**
 * WhereCare App - Damascus Edge - The Forge
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

import Main from './Main';
import Emergency from './Emergency';
import UrgentCare from './UrgentCare';
import Hospital from './Hospital';
import Cvs from './Cvs';
import More from './More';
import Details from './Details';

class WhereCare extends Component {
  
  renderScene(route, navigator){
    
    if (route.name == 'Main') {
        return <Main navigator={navigator} />
    }
    if (route.name == 'Emergency') {
        return <Emergency navigator={navigator} />
    }
    if (route.name == 'UrgentCare') {
        return <UrgentCare navigator={navigator} />
    }
    if (route.name == 'Hospital') {
        return <Hospital navigator={navigator} />
    }
    if (route.name == 'Cvs') {
        return <Cvs navigator={navigator} />
    }
    if (route.name == 'More') {
        return <More navigator={navigator} />
    }
    if (route.name == 'Details') {
        return <Details navigator={navigator} />
    }
    
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{name: 'Main'}}
          renderScene={this.renderScene.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('WhereCare', () => WhereCare);
