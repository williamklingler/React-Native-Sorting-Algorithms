import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bar from './Bar';
import CocktailSort from './CocktailSort';


export default class SelectionSort extends React.Component {
  constructor(props){
    super(props);
    searchedIndex = 0;
    ortedBool = false;
    xArray = [];
    for (var i = 0; i < 200; i++){
      xArray.push(Math.random() * 100);
    }
    this.state = {x: xArray, s:1};
    self = this;
  }
  componentDidMount(){
    xArray[1] = 100;
    self.setState((state) => ({
      x:xArray
    }));
}
componentDidUpdate(prevProps, prevState){
 if (searchedIndex < xArray.length -1)
 {
   setTimeout(function(){
   var smallestIndex=searchedIndex;
    for (var i = searchedIndex;  i<xArray.length; i++){
      if (xArray[smallestIndex] > xArray[i+1]){
        smallestIndex = i+1;
      }
    }
    var temp = xArray[searchedIndex];
    xArray[searchedIndex] = xArray[smallestIndex];
    xArray[smallestIndex] = temp;
    searchedIndex++;
    self.setState((state) => ({
      x:xArray
    }));
/* else {
    self.setState((state) => ({
      s: state.s +1
    }));
  }*/
  //o++;
},0);
}
//  if (o+1 == xArray.length -1)
  //  o = 0;
}
  render() {
    rows = [];
    for (var i =0; i < xArray.length; i++){
      if (i < searchedIndex)
      sortedBool = true;
      else
      sortedBool = false;
    rows.push(<Bar key={i} height = {this.state.x[i]} sumting = {this.state.s} sorted = {sortedBool}/>);
    }
    return (
        <View style ={{flex:1, flexDirection:'row', alignItems:'flex-end',justifyContent:'space-between'}} >
        {rows}
      </View>
    );
  }
}
