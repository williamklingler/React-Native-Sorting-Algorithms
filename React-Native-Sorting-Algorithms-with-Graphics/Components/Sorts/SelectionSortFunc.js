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
    selectionSort(bArray);
   var elapsed = (Date.now() - start)/1000;
    return (
      <View>
      <Text> it took {elapsed} seconds to run </Text>
      </View>

    );
  }
}

function selectionSort(items) {
	var length = items.length;
	for (var i = 0; i < length - 1; i++) {
		var min = i;
		for (var j = i + 1; j < length; j++) {
			if (items[j] < items[min]) { //Compare the numbers
				min = j; //Change the current min number position if a smaller num is found
			}
		}
		if (min != i) {
			//After each pass, if the current min num != initial min num, exchange the position.
			//Swap the numbers
			var tmp = items[i];
			items[i] = items[min];
			items[min] = tmp;
		}
	}
}
