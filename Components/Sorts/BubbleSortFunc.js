import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class BubbleSortFun extends React.Component{
  constructor (props){
    bArray = [];
    for (var i=0; i < num.length; i++){
      bArray.push(num[i]);
    }
    super(props);
  }
  render(){
    var start = Date.now();
  bubbleSort(bArray);
   var elapsed = (Date.now() - start)/1000;
    return (
      <View>
      <Text> it took {elapsed} seconds to run </Text>
      </View>

    );
  }
}
function bubbleSort(a)
{
    var swapped;
    sortedIndex = a.length;
    do {
        swapped = false;
        for (var i=0; i < sortedIndex -1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
        sortedIndex --;
    } while (swapped);
}
