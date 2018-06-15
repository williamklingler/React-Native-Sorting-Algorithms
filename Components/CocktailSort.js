import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bar from './Bar';


/*forward = true;
sortedRight = xArray.length;
sortedLeft = -1;
var sortedBool = false;*/

Array.prototype._swap = function (a, b){
    if (a === b)
        return;

    var temp = this[a];
    this[a] = this[b];
    this[b] = temp;
}

export default class CocktailSort extends React.Component {
  constructor(props){
    super(props);
    xArray = [];
    for (var i = 0; i < 200; i++){
      xArray.push(Math.random() * 100);
    }
    o  = 0;
    i, left = 0, right = xArray.length - 1;
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
    setTimeout(function(){
      if (left < right)
      o++;
      for (i = left; i < right; i++)
            if (xArray[i] > xArray[i + 1]) {
                xArray._swap(i, i+1);
            }

        right--;
        for (i = right; i > left; i--)
            if (xArray[i - 1] > xArray[i]) {
                xArray._swap(i-1, i);
            }

        left++;
        self.setState((state) => ({
          x:xArray
        }));

    },0);

  }
  render() {
    rows = [];
    for (var i =0; i < xArray.length; i++){
      if (i >= right|| i <= left)
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
/*  if (forward){
    for ( o = sortedLeft; o < sortedRight; o++)
    {
      if(xArray[o] > xArray[o+1])
      {
        var temp = xArray[o];
        xArray[o] = xArray[o+1];
        xArray[o+1] = temp;
      }
    }
    sortedRight--;
    forward = false;
  }
  else if (!forward){
    for (o = sortedRight; o > sortedLeft; o-- )
    {
    if (xArray[o] < xArray[o-1]){
      var temp = xArray[o];
      xArray[o] = xArray[o-1];
      xArray[o-1] = temp;
    }
  }
  sortedLeft++;
  forward = true;
  }
/*  if (o == sortedRight && forward)
  {
    forward = false;
    //alert('okay');
  }
  else if (o == sortedLeft && !forward){
    sortedLeft++;
    forward =  true;
    //alert('sup');
  }*/
  /*self.setState((state) => ({
    x:xArray
  }));*/
