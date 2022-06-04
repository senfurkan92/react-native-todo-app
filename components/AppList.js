import { View } from 'react-native';
import { useContext } from 'react';
import MainContext from '../context/MainContext';
import AppCard from './AppCard';

export default function AppList() {
    const ctx = useContext(MainContext)

    return (
        <View>
          {
            ctx.stateList.list.map((x) => <AppCard item={x} key={x.id}></AppCard>) 
          }
        </View>
    )
}