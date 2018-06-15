import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bar from './Bar';


export default class CocktailSort extends React.Component {
  constructor(props){
    super(props);
    k = 0;
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

   setTimeout(function(){
     if (k < xArray.length){
       let value = xArray[k];
       // store the current item value so it can be placed right
       for (j = k - 1; j > -1 && xArray[j] > value; j--) {
         // loop through the items in the sorted array (the items from the current to the beginning)
         // copy each item to the next one
         xArray[j + 1] = xArray[j];
       }
       // the last item we've reached should now hold the value of the currently sorted item
       xArray[j + 1] = value;
       k++;
       self.setState((state) => ({
         x:xArray
       }));
     }
},0);

}
  render() {
    rows = [];
    for (var i =0; i < xArray.length; i++){
      if (i <= k)
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


//xArray = insertionSort(xArray);
function insertionSort (items) {
  for (var i = 0; i < items.length; i++) {
    let value = items[i]
    // store the current item value so it can be placed right
    for (var j = i - 1; j > -1 && items[j] > value; j--) {
      // loop through the items in the sorted array (the items from the current to the beginning)
      // copy each item to the next one
      items[j + 1] = items[j]
    }
    // the last item we've reached should now hold the value of the currently sorted item
    items[j + 1] = value
  }

  return items;
}

//const list = [54, 26, 93, 17, 77, 31, 44, 55, 20]
//console.log(insertionSort(list)) // [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]
