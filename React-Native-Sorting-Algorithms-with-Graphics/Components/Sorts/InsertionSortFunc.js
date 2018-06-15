import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class InsertionSortFun extends React.Component{
  constructor (props){
    bArray = [];
    for (var i = 0; i < num.length; i++){
      bArray.push(num[i]);
    }
    super(props);
  }
  render(){
    var start = Date.now();
    insertionsort1(bArray);
  var elapsed = (Date.now() - start)/1000;;
    return (
      <View>
      <Text> it took {elapsed} seconds to run </Text>
      </View>

    );
  }
}
function insertionsort1 (initArray) {
  for (var i = 0; i < initArray.length; i++) {
    let value = initArray[i];
    for (var j = i - 1; j > -1 && initArray[j] > value; j--) {
      initArray[j + 1] = initArray[j];

    }
    // the last item we've reached should now hold the value of the currently sorted item
    initArray[j + 1] = value;
  }
}
