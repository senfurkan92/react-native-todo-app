import { View, Text, StyleSheet, Pressable } from "react-native";
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
                    ?  <Pressable 
                            onPress={() => ctx.dispatchList({type: 'complete', id: item.id})}
                        >
                            <View style={styles.btn2}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>COMPLETE</Text>
                            </View>
                        </Pressable> 
                    : <Text style={styles.text}>Completed</Text>
                }
                <Pressable onPress={() => ctx.dispatchList({type: 'remove', id: item.id})}>
                    <View style={styles.btn1}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>REMOVE</Text>
                    </View>
                </Pressable>
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'column',
        padding: 3,
        marginVertical: 3,
        borderRadius: 10,
        shadowColor: 'black',
        backgroundColor: 'lightgray'
    },
    btn1: {
        backgroundColor: 'red',
        color: 'white',
        padding: 8,
        borderRadius: 10
    },
    btn2: {
        backgroundColor: 'green',
        color: 'white',
        padding: 8,
        borderRadius: 10,
        marginEnd: 5
    },
    text: {
        padding: 8,
        marginEnd: 5
    }
})