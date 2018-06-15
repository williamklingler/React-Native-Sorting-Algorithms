import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bar from './Bar';

//m =0;

export default class BubbleSort extends React.Component {
  constructor(props){
    super(props);
    o = 0;
    xArray = [];
    for (var i = 0; i < 200; i++){
      xArray.push(Math.random() * 100);
    }
    this.state = {x: xArray, h: 6, s:1};
    self = this;
   /*setInterval(function(){
     for (var i =0; i < xArray.length; i++){
       xArray[i] += 5;
     }
      self.setState((state)=>({
        x: xArray
      }));
    },50)*/
  }
  componentDidMount(){
    xArray[1] = 100;
    self.setState((state) => ({
      x:xArray
    }));
  /*  var sorted = false;
    var sortCounter = 0;
    let funcSortLine = sortLine.bind(this);
  //  while (!sorted){
      sortCounter = 0;
      for(var j = 0; j < xArray.length; j++){
    for (var i =0; i < xArray.length; i++){
      if (xArray[i] > xArray[i+1]){
        alert(xArray[i]);
        var temp = xArray[i];
        xArray[i] = xArray[i+1];
        xArray[i+1] = temp;
        sorted = false;
        alert(xArray[i]);
      }
      if (xArray[i] < xArray[i+1]){
        sortCounter ++;
        if(sortCounter == xArray.length){
          sorted = true;
          alert('sorted');
        }
      }
    self.setState((state) => ({
      x:xArray
    }));
    this.forceUpdate();
  //  }
}
}*/

}
componentDidUpdate(prevProps, prevState){
/*setTimeout(function(){
    Math.random();
  },5);*/
 setTimeout(function(){
    if (xArray[o] > xArray[o+1]){
    //  alert(xArray[o]);
      var temp = xArray[o];
      xArray[o] = xArray[o+1];
      xArray[o+1] = temp;
    self.setState((state) => ({
      x:xArray
    }));
  }
 else {
    //alert('hellO')
    self.setState((state) => ({
      s: state.s +1
    }));
    //self.forceUpdate();
  }
  o++;
},0);
  if (o+1 == xArray.length -1){
    //m++
    //o = m;
    o = 0;
  }
}
  render() {
    rows = [];
    for (var i =0; i < xArray.length; i++){
    //  rows.push(<Box x = {this.state.x[i]} key={i} sumting = {this.state.s}/>)
    rows.push(<Bar key={i} height = {this.state.x[i]} sumting = {this.state.s} />);
    }
    return (
    //  <View style={{flex:1, flexDirection:'column', justifyContent: 'space-evenly'}}>
        <View style ={{flex:1, flexDirection:'row', alignItems:'flex-end',justifyContent:'space-between'}} >
        {rows}
      </View>
    );
  }
}
