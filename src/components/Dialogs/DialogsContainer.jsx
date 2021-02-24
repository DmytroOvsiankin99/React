import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, SafeAreaView, SectionList, StatusBar, Button } from "react-native";

const Item = ({ data, onChange }) => {
    const [state, setState] = useState(data);

    const handleChange = (name, text) => {
        setState(prevState => ({
            ...prevState,
            [name]: text
        }));
    };

    return (
        <View style={styles.item}>
            <TextInput value={state.firstName} onChangeText={text => {
                handleChange('firstName', text)
                onChange(data)
            }} />
            <TextInput value={data.secondName} />
        </View>
    );

};

export const SelectList = () => {
    const [val, setVal] = useState([
        {
            data: [{ id: 1, firstName: '', secondName: '' }]
        },
    ]);

    const onChange = (data) => {
        val.forEach((el, index) => {
            if (el.data[0].id === data.id) {
                val.splice(index, 1, { data: [data] })
                return;
            }
        })
    };

    const addEl = () => {
        const id = val.length+1;
        setVal(lastProps => ([...lastProps, { data: [{ id: id, firstName: '', secondName: '' }]}  ]));
    };

    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={val}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item onChange={onChange} data={item} />}
            />
            <Button onPress={addEl} title='HUINIA' />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    }
});
