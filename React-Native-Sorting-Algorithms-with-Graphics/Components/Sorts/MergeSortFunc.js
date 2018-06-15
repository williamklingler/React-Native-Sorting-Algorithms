import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class BubbleSortFun extends React.Component{
  constructor (props){
    super(props);
    bArray = [];
    for (var i=0; i < num.length; i++){
      bArray.push(num[i]);
    }
  }
  render(){
    var start = Date.now();
    mergesort(bArray);
   var elapsed = (Date.now() - start)/1000;;
    return (
      <View>
      <Text> it took {elapsed} seconds to run </Text>
      </View>

    );
  }
}
function merge(leftArr, rightArr) {
var sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr[0]);
      leftArr = leftArr.slice(1)
   } else {
      sortedArr.push(rightArr[0]);
      rightArr = rightArr.slice(1)
     }
   }
  while (leftArr.length)
    sortedArr.push(leftArr.shift());
  while (rightArr.length)
    sortedArr.push(rightArr.shift());
  return sortedArr;
}
function mergesort(arr) {
  if (arr.length < 2) {
    return arr; }
  else {
    var midpoint = parseInt(arr.length / 2);
    var leftArr   = arr.slice(0, midpoint);
    var rightArr  = arr.slice(midpoint, arr.length);
    return merge(mergesort(leftArr), mergesort(rightArr));
  }
}
