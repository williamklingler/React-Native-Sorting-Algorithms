import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bar from './Bar';
sortedBool = false;
index = 0;

export default class MergeSort extends React.Component {
  constructor(props){
    super(props);
    this.state = {x: xArray, s:1};
    self = this;
  }
  componentDidMount(){
    xArray[1] = 100;
    mergeSort(xArray);
    self.setState((state) => ({
      //
    }));
}
componentDidUpdate(prevProps, prevState){
   /*setTimeout(function(){

    self.setState((state) => ({
      x:xArray
    }));
},0);*/
}

  render() {
    rows = [];
    for (var i =0; i < xArray.length; i++){
    rows.push(<Bar key={i} height = {this.state.x[i]} sumting = {this.state.s} sorted = {sortedBool}/>);
    }
    return (
        <View style ={{flex:1, flexDirection:'row', alignItems:'flex-end',justifyContent:'space-between'}} >
        {rows}
      </View>
    );
  }
}

xArray = [];
for (var i = 0; i < 200; i++){
  xArray.push(Math.random() * 100);
}
var middle = Math.floor(xArray.length/2);
function mergeSort(arr, middle, left)
{
  self.setState((state) =>(){
    if (left){
    for (var i =0; i <= middle; i++)
    {
      x[i]: arr[i]
    }
    else {
      for (var i = middle; i - middle <= arr.length-1){
        x[i]: arr[]

      }
    }
  }
  });
    if (arr.length < 2)
        return arr;

    middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);
    self.setState((state) => ({
        x: left.concat(right)
    }));

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}
