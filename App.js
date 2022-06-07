import { StyleSheet, Text, View, Button } from 'react-native';
import { useReducer, useState } from 'react';
import MainContext from "./context/MainContext";
import AppAdd from './components/AppAdd';
import AppList from './components/AppList';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [showModal, setShowModal] = useState(false)
  const [stateList, dispatchList ] = useReducer((prevState, action) => {
    let nextList = []
    if (action.type === "add") {
      nextList = [
        ...prevState.list,
        {
          id: Math.random().toString().split('.')[1],
          text: action.text,
          done: false
        }
      ]
      setShowModal(false)
    } else if (action.type === "complete") {
      nextList = prevState.list.map(x => x.id !== action.id ? x : {
        ...x,
        done: true
      })
    } else if (action.type === "remove") {
      nextList = prevState.list.filter(x => x.id !== action.id)
    }
    return {list: nextList}
  }, {
    list: []
  })

  return (
    <MainContext.Provider value={{stateList, dispatchList}}>
      <StatusBar style='dark'/>
      <View style={styles.container}>
        <View style={[styles.subContainer, {alignItems: 'center'}]}>
          <Text style={styles.title}>ToDo App with React Native</Text>
        </View>
        <View style={styles.subContainer}>
          <Button title='Add Role' onPress={() => setShowModal(true)}/>
          {showModal && <AppAdd/>}
        </View>
        <View style={styles.subContainer}>
            <AppList/>
        </View>      
      </View>
    </MainContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 40,
  },
  subContainer: {
    paddingVertical: 5,
    width: '90%',
  },
  title: {
    fontSize: 20,
    paddingVertical: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 3,
  }
})