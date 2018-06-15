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
    bArray.cocktail_sort();
   var elapsed = (Date.now() - start)/1000;
    return (
      <View>
      <Text> it took {elapsed} seconds to run </Text>
      </View>

    );
  }
}

Array.prototype._swap = function (a, b){
    if (a === b)
        return;

    var temp = this[a];
    this[a] = this[b];
    this[b] = temp;
}

Array.prototype.cocktail_sort = function() {
    var i, left = 0, right = this.length - 1, temp;

    while (left < right) {
        for (i = left; i < right; i++)
            if (this[i] > this[i + 1]) {
                this._swap(i, i+1);
            }

        right--;
        for (i = right; i > left; i--)
            if (this[i - 1] > this[i]) {
                this._swap(i-1, i);
            }

        left++;
    }
}
