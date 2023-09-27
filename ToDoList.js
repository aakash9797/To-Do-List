import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {IconButton} from 'react-native-paper';
import ToDoImage from './ToDoImage';
const ToDoList = () => {
  // Init Local States//
  const [todo, setToDo] = useState('');
  const [toDoList, setToDoList] = useState('');
  const [editToDo,setEditToDo]=useState('');

  // handel Print user Data
  const printUserData = () => {
    if(todo===""){
      return;
    }
    setToDoList([...toDoList, {id: Date.now().toString(), title: todo}]);
    setToDo('');
  };

  // Handel Edit ToDo Title
  const handleEditList=(todo)=>{
    setEditToDo(todo)
    setToDo(todo.title)
  }

  // Handel Update Title

  const updatUserData=()=>{
    const updateTitle = toDoList.map((item)=>{
      if(item.id === editToDo.id){
        return{...item,title:todo}
      }
      return item;
    });
    setToDoList(updateTitle)
    setEditToDo(null)
    setToDo("")
  }

  // Handel Delete ToDo List

  const handleDeleteList = id => {
    const updatedList = toDoList.filter(todo => todo.id !== id);
    setToDoList(updatedList);
  };
  //Render Todo
  const renderToDo = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: '#6d239e',
          borderRadius: 8,
          paddingHorizontal: 6,
          paddingVertical: 12,
          marginHorizontal: 20,
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          shadowColor: 'black',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 1,
          // elevation:10,
        }}>
        <Text
          style={{
            fontSize: 25,
            color: '#fff',
            fontWeight: '700',
            paddingLeft: 15,
            flex: 1,
          }}>
          {item.title}
        </Text>
        <IconButton
          icon={'pencil'}
          iconColor="#fff"
          onPress={() => handleEditList(item)}
        />
        <IconButton
          icon={'trash-can'}
          iconColor="#fff"
          onPress={() => handleDeleteList(item.id)}
        />
      </View>
    );
  };
  return (
    <View>
      <TextInput
        style={styles.inputStyle}
        placeholder="Add a Task"
        value={todo}
        onChangeText={userText => setToDo(userText)}
      />
      {
        editToDo ? <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => updatUserData()}>
        <Text style={{color: 'white', fontSize: 25, textAlign: 'center'}}>
          Save
        </Text>
      </TouchableOpacity>  :  <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => printUserData()}>
        <Text style={{color: 'white', fontSize: 25, textAlign: 'center'}}>
          Add
        </Text>
      </TouchableOpacity>
      }

      {/* Render ToDo list */}
      <FlatList data={toDoList} renderItem={renderToDo} />
      {
        toDoList.length<=0 && <ToDoImage />
      }
    </View>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 4,
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 15,
    borderColor: 'skyblue',
    padding: 8,
    fontSize: 23,
  },
  buttonStyle: {
    backgroundColor: '#376fb3',
    padding: 8,
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
