import React from 'react';
import {
  AppRegistry,  
  StyleSheet,    
  Image
} from 'react-native';

export default class ImageElement extends React.Component {
  render() {
    return (
      <Image source={this.props.imgsource} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
