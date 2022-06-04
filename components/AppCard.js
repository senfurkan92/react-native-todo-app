import { View, Text, Button, StyleSheet } from "react-native";
import { useContext } from 'react';
import MainContext from '../context/MainContext';

export default function AppCard({item}) {
    const ctx = useContext(MainContext)

    return (
        <View style={styles.parent}>
            <Text>{item.id}</Text>
            <Text>{item.text}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                {
                    !item.done  
                    ? <Button title="complete" color={'green'} onPress={() => ctx.dispatchList({type: 'complete', id: item.id})}/>
                    : <Text>Completed</Text>
                }
                <Button title="remove" color={'red'} onPress={() => ctx.dispatchList({type: 'remove', id: item.id})}/> 
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'column',
        padding: 3,
        marginVertical: 3,
        borderColor: 'blue',
        borderWidth: 0.5,
    }
})