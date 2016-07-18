/**
 * WhereCare App - Damascus Edge - The Forge
 * https://github.com/facebook/react-native
 * @flow
 *
 *  <MapView
 *    style={styles.map}
 *    showsUserLocation = {true}
 *  />
 */

'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Text,
  TextInput,
  MapView,
  WebView,
  Image,
  Dimensions,
  View
} from 'react-native';

import Communications from 'react-native-communications';

var {height, width} = Dimensions.get('window');

class UrgentCare extends Component {
  
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.headerwrapper}>

          <View style={styles.headernavigation}>
            
            <View style={styles.headernavigationA}>
              
              <TouchableHighlight onPress={ this.navigate.bind(this, 'UrgentCare') } style={styles.button}>
                <Image
                  style = {styles.icon}
                  source = {require('./images/assets/urgent_care_icon.png')}
                />
              </TouchableHighlight>
            
            </View>
            <View style={styles.headernavigationB}>
              
              <TouchableHighlight onPress={ this.navigate.bind(this, 'Hospital') } style={styles.button}>
                <Image style={styles.icon}
                  source={require('./images/assets/hospital_icon_off.png')}
                />
              </TouchableHighlight>
            
            </View>
            <View style={styles.headernavigationC}>
              
              <TouchableHighlight onPress={ this.navigate.bind(this, 'Cvs') } style={styles.button}>
                <Image style={styles.icon}
                  source={require('./images/assets/cvs_icon_off.png')}
                />
              </TouchableHighlight>
            
            </View>
            <View style={styles.headernavigationD}>
              
              <TouchableHighlight onPress={ this.navigate.bind(this, 'More') } style={styles.button}>
                <Image style={styles.icon}
                  source={require('./images/assets/more_icon_off.png')}
                />
              </TouchableHighlight>
            
            </View>
          </View>
        </View>
      
        <View style={styles.contentwrapper}>
      
          <WebView
            automaticallyAdjustContentInsets={false}
            style={styles.web}
            source={{uri: 'https://www.google.com/maps/search/Urgent+Care/'}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate="normal"
            startInLoadingState={true}
            scalesPageToFit={true}
          />
        
        </View>

        <View style={styles.footerwrapper}>
          
          <View style={styles.footernavigation}>
            <View style={styles.footernavigationA}>
              
              <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.buttonbottom}>
                <Image style={styles.bottomicon}
                  source={require('./images/assets/search_icon.png')}
                />
              </TouchableHighlight>
            
            </View>
            <View style={styles.footernavigationB}>
              
              <TouchableHighlight onPress={() => Communications.phonecall('911', true)} style={styles.buttonbottom}>
                <Image style={styles.bottomicon0}
                  source={require('./images/assets/call911_icon.png')}
                />
              </TouchableHighlight>
            
            </View>
            <View style={styles.footernavigationC}>
              
              <TouchableHighlight onPress={ this.navigate.bind(this, 'Emergency') } style={styles.buttonbottom}>
                <Image style={styles.bottomicon}
                  source={require('./images/assets/emergiq_icon.png')}
                />
              </TouchableHighlight>
            
            </View>
          </View>
          
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFF5F7',
  },
  headersearch: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 25,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  textinput: {
    height: 30, 
    borderColor: 'grey', 
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CCC',
    textAlign: 'center',
    width: 275,
    marginRight: 10,
  },
  headernavigation: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    flexWrap: 'wrap',
    paddingTop: 0,
    paddingBottom: 5,
    marginTop: 25,
  },
  headernavigationA: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headernavigationB: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headernavigationC: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headernavigationD: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 90,
    height: 44,
  },
  bottomicon: {
    width: 125,
    height: 100
  },
  bottomicon0: {
    width: 125,
    height: 100
  },
  iconsearch: {
    width: 20,
    height: 18,
  },
  contentwrapper: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  map: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  web: {
    width: width,
    height: height,
  },
  footerwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -27,
  },
  footernavigation: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  footernavigationA: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footernavigationB: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footernavigationC: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    height: 50,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonbottom: {
    height: 100,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
});

export default UrgentCare
