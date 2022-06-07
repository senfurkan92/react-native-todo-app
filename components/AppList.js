import { FlatList } from 'react-native';
import { useContext } from 'react';
import MainContext from '../context/MainContext';
import AppCard from './AppCard';

export default function AppList() {
    const ctx = useContext(MainContext)

    return (
        <FlatList data={ctx.stateList.list} 
          renderItem={({item,index}) => <AppCard item={item}></AppCard>} 
          keyExtractor={(item,index) => item.id}
        />
    )
}