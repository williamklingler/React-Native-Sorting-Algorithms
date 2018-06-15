import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class Bar extends Component {
  render() {
    //alert(this.props.height);
    //alert(String(this.props.height)+'%')
      let gg = 255-this.props.height/100 * 155;
      let cc;
      if (this.props.sorted){
        cc = 'rgba(51,204,51,1.0)';
      }
      else
      cc = 'rgba(' + [gg, gg, 255, 1.0].join(',') + ')';
      return (
        <View style={{height:String(this.props.height)+'%',width:'0.5%',backgroundColor:cc}} key = {this.props.height}/>
    );
  }
}
