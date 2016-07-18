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
  ScrollView,
  Image,
  Dimensions,
  View,
  Switch,
} from 'react-native'

import Communications from 'react-native-communications';

var ImagePickerManager = require('NativeModules').ImagePickerManager;

var {height, width} = Dimensions.get('window');

class Emergency extends Component {
  
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }
  
  state = {
    avatarSource: null,
  };
  
  selectPhotoTapped() {
    const options = {
      title: 'Take or Choose a Photo',
      takePhotoButtonTitle: 'Take a Photo',
      chooseFromLibraryButtonTitle: 'Choose From Your Library',
      quality: 0.5,
      maxWidth: 300,
      maxHeight: 300,
      storageOptions: {
        skipBackup: true
      },
    allowsEditing: true
    };
    ImagePickerManager.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePickerManager Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        var source;
        if (Platform.OS === 'android') {
          source = {uri: response.uri, isStatic: true};
        } else {
          source = {uri: response.uri.replace('file://', ''), isStatic: true};
        }
        this.setState({
          avatarSource: source
        });
      }
    });
  }
  
  render() {
    return (
      
      <View style={styles.container}>  
        <ScrollView
          automaticallyAdjustContentInsets={false}
          onScroll={() => { console.log('Scrolling...'); }}
          scrollEventThrottle={200}
          style={styles.scrollView}>
          
          <View style={styles.headwrapper}>
            <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.backbutton}>
              <Image
                style = {styles.back}
                source = {require('./images/assets/left-arrow@3x.png')}
              />
            </TouchableHighlight>
            <Text style={styles.majortitle}>Your Emergency IQ</Text>
            <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.savebutton}>
              <Text style = {styles.save}>Save</Text>
            </TouchableHighlight>
          </View>
          
          <View style={styles.titlewrapper}>
            <Text style={styles.title}>Your Personal Info</Text>
          </View>
          
          <View style={styles.addphoto}>
            <TouchableHighlight onPress={this.selectPhotoTapped.bind(this)}>
              <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                { this.state.avatarSource === null ? <Text><Image style = {styles.photo} source = {require('./images/assets/photo_icon.png')}/></Text> :
                  <Image style={styles.avatar} source={this.state.avatarSource} />
                }
              </View>
            </TouchableHighlight>
          </View>
          <Switch
            value={(this.state && this.state.switchValue) || false}
            onValueChange={(value) => {
              this.setState({switchValue: value})
            }}
            // Color props are iOS-only
            // thumbTintColor={'white'} // Removes shadow
            tintColor={"rgba(230,230,230,1)"}
            onTintColor={"rgba(68,219,94,1)"}
          />
          
          <View style={styles.inputRowWrapper}>
            <TextInput
               style = {styles.textinputField}
               onChangeText = {(text) => this.setState({text})}
               placeholder = 'First Name'
               placeholderTextColor = "gray"
               multiline = {false}
               enablesReturnKeyAutomatically = {true}
               keyboardAppearance = {'dark'}
               clearTextOnFocus = {true}
               keyboardType = {'numeric'}
             />
           </View>
           <View style={styles.inputRowWrapper}>
             <TextInput
               style = {styles.textinputField}
               onChangeText = {(text) => this.setState({text})}
               placeholder = 'Last Name'
               placeholderTextColor = "gray"
               multiline = {false}
               enablesReturnKeyAutomatically = {true}
               keyboardAppearance = {'dark'}
               clearTextOnFocus = {true}
               keyboardType = {'numeric'}
             />
          </View>
          <View style={styles.inputRowWrapper}>
            <View style={styles.halfBorder}>
            <TextInput
              style = {styles.textinputField}
              onChangeText = {(text) => this.setState({text})}
              placeholder = 'DOB'
              placeholderTextColor = "gray"
              multiline = {false}
              enablesReturnKeyAutomatically = {true}
              keyboardAppearance = {'dark'}
              clearTextOnFocus = {true}
              keyboardType = {'numeric'}
            />
            </View>
            <View style={styles.half}>
            <TextInput
              style = {styles.textinputField}
              onChangeText = {(text) => this.setState({text})}
              placeholder = 'Gender'
              placeholderTextColor = "gray"
              multiline = {false}
              enablesReturnKeyAutomatically = {true}
              keyboardAppearance = {'dark'}
              clearTextOnFocus = {true}
              keyboardType = {'numeric'}
            />
            </View>
          </View>
          <View style={styles.inputRowWrapper}>
            <View style={styles.halfBorder}>
            <TextInput
              style = {styles.textinputField}
              onChangeText = {(text) => this.setState({text})}
              placeholder = 'Blood Type'
              placeholderTextColor = "gray"
              multiline = {false}
              enablesReturnKeyAutomatically = {true}
              keyboardAppearance = {'dark'}
              clearTextOnFocus = {true}
              keyboardType = {'numeric'}
            />
            </View>
            <View style={styles.half}>
            <TextInput
              style = {styles.textinputField}
              onChangeText = {(text) => this.setState({text})}
              placeholder = 'Organ Donor'
              placeholderTextColor = "gray"
              multiline = {false}
              enablesReturnKeyAutomatically = {true}
              keyboardAppearance = {'dark'}
              clearTextOnFocus = {true}
              keyboardType = {'numeric'}
            />
            </View>
          </View>
          <View style={styles.titlewrapper}>
            <Text style={styles.title}>Emergency Contact</Text>
          </View>
          <View style={styles.inputRowWrapper}>
            <TextInput
               style = {styles.textinputField}
               onChangeText = {(text) => this.setState({text})}
               placeholder = 'First Name'
               placeholderTextColor = "gray"
               multiline = {false}
               enablesReturnKeyAutomatically = {true}
               keyboardAppearance = {'dark'}
               clearTextOnFocus = {true}
               keyboardType = {'numeric'}
             />
           </View>
           <View style={styles.inputRowWrapper}>
             <TextInput
                style = {styles.textinputField}
                onChangeText = {(text) => this.setState({text})}
                placeholder = 'Last Name'
                placeholderTextColor = "gray"
                multiline = {false}
                enablesReturnKeyAutomatically = {true}
                keyboardAppearance = {'dark'}
                clearTextOnFocus = {true}
                keyboardType = {'numeric'}
              />
            </View>
            <View style={styles.inputRowWrapper}>
              <TextInput
                 style = {styles.textinputField}
                 onChangeText = {(text) => this.setState({text})}
                 placeholder = 'Phone Number'
                 placeholderTextColor = "gray"
                 multiline = {false}
                 enablesReturnKeyAutomatically = {true}
                 keyboardAppearance = {'dark'}
                 clearTextOnFocus = {true}
                 keyboardType = {'numeric'}
               />
             </View>
          
          
          
          
        </ScrollView>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  scrollView: {
    backgroundColor: '#FFF',
    height: height,
    width: width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'stretch',
  },
  textinputField: {
    height: 30,
    color:'#8D99AF',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 5,
    textAlign: 'left',
    width: 300,
    marginBottom: 2,
  },
  inputRowWrapper: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'stretch',
    padding:5,
    marginTop: 2,
  },
  half: {
      width: 150,
  },
  halfBorder: {
      width: 150,
      borderRightWidth: 1,
  },
  headwrapper: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'stretch',
    width: width,
    padding:10,
  },
  majortitle: {
    flex: 6,
    fontSize: 18,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  backbutton: {
    flex: 1,
    width: 10,
    height: 17,
    alignSelf: 'stretch',
    marginTop: 33,
  },
  back: {
    width: 10,
    height: 17,
  },
  savebutton: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  save: {
    color: '#FF0000',
    fontSize: 17,
  },
  titlewrapper: {
    backgroundColor: '#EFF5F7',
    borderTopWidth: 1,
    borderTopColor: '#8D99AF',
    borderBottomWidth: 1,
    borderBottomColor: '#8D99AF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'stretch',
    padding:10,
  },
  title: {
    
  },
  addphoto: {
    
  },
  avatar: {
    
  },
  avatarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'stretch',
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  photo: {
    width: 90,
    height: 90,
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
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
});

export default Emergency
