import React from 'react'
import {Text,View,Image} from "react-native"
function ToDoImage() {
  return (
    <View style={{alignItems:'center'}}>
        <Text style={{fontSize:20,fontWeight:'800',marginBottom:10}}>Start Adding your Task</Text>

        <Image source={require('./ToDoImage.jpg')} 
        style={{height:500,width:350}}
        />
    </View>
  )
}

export default ToDoImage;