import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, StatusBar, FlatList } from 'react-native';

export default function App() {
  const [data, setData] = useState([])

  const [newTask, setNewTask] = useState('')
  
  const addNewTodo = () => {
    if (newTask.length == 0 || newTask.trim().length == 0) return;
    setData([...data, { 
      id:data.length+1, text: newTask 
    }])
    setNewTask('');
  };

  const clearTodo = () => {
    setData([]);
  }

  return (
    <View style={{flex:1}}>
      <StatusBar backgroundColor='#263238' />
      <View style={{paddingVertical:10, alignContent:'center', alignItems:'center', backgroundColor:'#37474f'}}>
        <Text style={{color:'#ffffff', fontSize:22, fontWeight:'bold'}}>Todo List</Text>
      </View>
      <FlatList style={{flex:1, margin:5, borderColor:'#b0bec5'}}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => 
          <View style={{padding:10, borderBottomWidth:0.5, borderBottomColor:'#b0bec5'}}>
            <Text style={{fontSize:16}}>{item.text} </Text>
          </View>
        }
      />
      <View  style={{alignContent:'center', alignItems:'center', flexDirection:'row', padding:10, backgroundColor:'#eceff1'}}>
      <View>
          <Button title='Clear Task' onPress={() => clearTodo()}/>
        </View>
        <View style={{flex:1}}>
          <TextInput value={newTask} onChangeText={newTask => setNewTask(newTask)} style={{borderWidth:0.5, paddingVertical:1, marginHorizontal:10, paddingHorizontal:5, borderColor:'#b0bec5', backgroundColor:'#ffffff'}}></TextInput>
        </View>
        <View>
          <Button title='Add New Task' onPress={() => addNewTodo()}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    backgroundColor: 'red',
  }
});
