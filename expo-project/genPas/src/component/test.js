import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';



const DATA = [
    {
        id: '1d7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: '1 Item',
    },
    {
        id: '2ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: '2 Item',
    },
    {
        id: '38694a0f-3da1-471f-bd96-145571e29d72',
        title: '3 Item',
    },
    {
        id: '4d7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: '4 Item',
    },
    {
        id: '5ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: '5 Item',
    },
    {
        id: '68694a0f-3da1-471f-bd96-145571e29d72',
        title: '6 Item',
    },
    {
        id: '78694a0f-3da1-471f-bd96-145571e29d72',
        title: '7 Item',
    },
    {
        id: '88694a0f-3da1-471f-bd96-145571e29d72',
        title: '8 Item',
    },
    {
        id: '98694a0f-3da1-471f-bd96-145571e29d72',
        title: '9 Item',
    },
    {
        id: '108694a0f-3da1-471f-bd96-145571e29d72',
        title: '10 Item',
    },




];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export const Test = ({list}) => {

    const renderItem = ({ list }) => (
        <Item title={list.name} />
    );


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                initialNumToRender={5}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        // marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        borderRadius: 15,
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
        color: "#000"
    },
});
