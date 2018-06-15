import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bar from './Bar';

export default class BubbleSort extends React.Component {
  constructor(props){
    super(props);
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

    self.setState((state) => ({
      x:xArray
    }));
},0);
}

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
