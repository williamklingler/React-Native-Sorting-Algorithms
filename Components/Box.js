import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Box extends React.Component {
  render() {
    return (
      <View style={{width:50, height:'0.2%', marginLeft:this.props.x, backgroundColor: 'steelblue'}} >
      </View>
    );
  }
}
