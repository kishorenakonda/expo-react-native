import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
    const nameList = [
        {
            key: '1',
            name: "Name #1",
            age: 10
        },
        {
            key: '2',
            name: "Name #2",
            age: 20
        },
        {
            key: '3',
            name: "Name #3",
            age: 30
        },
        {
            key: '4',
            name: "Name #4",
            age: 40
        },
        {
            key: '5',
            name: "Name #5",
            age: 50
        }
    ];

    return (
        <FlatList
            // horizontal={false}
            // showsHorizontalScrollIndicator={false}
            // showsVerticalScrollIndicator={false}
            // keyExtractor={nameListObj => nameListObj.name}
            data={nameList}
            renderItem={({ item }) => {
                // item is nothing but according to ES6 it is considered as data inside the object
                // element === {item: {name: "Name 1"}, index:0}
                return (
                    <Text style={styles.text}> {item.name} - Age {item.age}</Text>
                )
            }}
        />
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        marginVertical: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        backgroundColor: 'lightblue'
    }
});

export default ListScreen;
