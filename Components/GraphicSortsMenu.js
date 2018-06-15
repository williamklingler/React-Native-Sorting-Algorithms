
SortNumber = 0;
var self;
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//import loggg from './config/NumberReader.js'
import BubbleSort from './BubbleSort'
import SelectionSort from './SelectionSort';
//import MergeSort from './Components/MergeSort';
import CocktailSort from './CocktailSort';
import InsertionSort from './InsertionSort';
//import BubbleSortFunc from './Sorts/BubbleSortFunc';
//import {Tabs} from './config/Router';
sort = <View />;
stopBool = false;
export default class App extends React.Component {
  self = this;
  render(){
    switch(SortNumber)
    {
      case 0:
      sort = <View />;
      break;
      case 1:
      sort = <BubbleSort />;
      break;
      case 2:
      sort = <SelectionSort />;
      break;
      case 3:
      sort = <CocktailSort />;
      break;
      case 4:
      sort = <InsertionSort />;
      break;
    }

    return (
      <View style = {{flex:1}}>
      <Buttons self = {this}/>
      <View style = {{flex:4.5}} >
      {sort}
      </View>
      </View>
    )
  }
}
class Buttons extends React.Component{
  render(){
    return(
      <View style = {{flex:0.5, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', marginTop:20}}>
      <Button
      onPress={() => {
        SortNumber=  1;
        changeArray();
        this.props.self.forceUpdate();
      }}
      title="BubbleSort"
      />
      <Button
      onPress={() => {
        SortNumber=  2;
        changeArray();
        this.props.self.forceUpdate();
      }}
      title="SelectionSort"
      />
      <Button
      onPress={() => {
        SortNumber=  3;
        this.props.self.forceUpdate();
      }}
      title="CocktailSort"
      />
      <Button
      onPress={() => {
        SortNumber=  4;
        this.props.self.forceUpdate();
      }}
      title="InsertionSort"
      />
      <Button
      onPress={() => {
        SortNumber = 0;
        this.props.self.forceUpdate();
      }}
      title="reset"
      />
      </View>

    )
  }
}
function changeArray(){
  sort = <View />;
}
