
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import GraphicSortsMenu from './Components/GraphicSortsMenu';
import SortsMenu from './Components/Sorts/SortsMenu';

menu = <View />;
menuNumber = 0;
export default class App extends React.Component {
  render(){
    switch(menuNumber)
    {
      case 0:
      menu = <View />;
      break;
      case 1:
      menu = <GraphicSortsMenu />;
      break;
      case 2:
      menu = <SortsMenu />;
      break;

    }
    return (
      <View style = {{flex:1}}>
      <Buttons self = {this}/>
      <View style = {{flex:9.5}} >
      {menu}
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
        menuNumber=  1;
        SortNumber = 0;
        this.props.self.forceUpdate();
      }}
      title="Graphics"
      />
      <Button
      onPress={() => {
        menuNumber=  2;
        SortNumber  = 0;
        this.props.self.forceUpdate();
      }}
      title="Sorts"
      />
      <Button
      onPress={() => {
        menuNumber = 0;
        this.props.self.forceUpdate();
      }}
      title="Back"
      />
      </View>

    )
  }
}
