import { StyleSheet, View, TextInput, Button, Modal, Image, Text } from 'react-native';
import { useContext, useState } from 'react';
import MainContext from '../context/MainContext'

export default function AppAdd() {
    const ctx = useContext(MainContext)
    const [inputVal, setInputVal] = useState('test')

    return (
        <Modal animationType='slide'>
            <View style={{flex:1, alignItems: 'center', justifyContent:'center', padding: 20}}>
                <Image source={require('../assets/favicon.png')}/>
                <View style={styles.parent}>
                    <View style={{flex: 4, borderBottomWidth: 1, borderBottomColor: 'gray'}}>
                        <TextInput placeholder='Event...' onChangeText={(text) => setInputVal(text)} />
                    </View>
                    <View style={{flex: 1}}>
                    </View>
                    <View style={{flex: 1}}>
                        <Button title="Add" onPress={() => ctx.dispatchList({type: 'add', text: inputVal})}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    parent: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})