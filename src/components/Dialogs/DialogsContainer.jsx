import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, SafeAreaView, SectionList, StatusBar, Dimensions, Button, Linking, TouchableOpacity } from "react-native";
import { BackspaceButton } from './BackspaceButton/index' //change import path

export const SelectList = () => {
    const contactsHashProt = {}
    const [contactHash, setContactHash] = useState({});
    const [contacts, setContacts] = useState([
        {
            displayName: 's A'
        }, {
            displayName: 'a A'
        }, {
            displayName: 'import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, SafeAreaView, SectionList, StatusBar, Dimensions, Button, Linking, TouchableOpacity } from "react-native";
import { BackspaceButton } from './BackspaceButton/index' //change import path

export const SelectList = () => {
    const contactsHashProt = {}
    const [contactHash, setContactHash] = useState({});
    const [contacts, setContacts] = useState([
        {
            displayName: 'a A'
        }, {
            displayName: 's A'
        }, {
            displayName: 'h A'
        }, {
            displayName: 'кеу A'
        }, {
            displayName: 'Dima A'
        }, {
            displayName: 'Asfasfas A'
        }, {
            displayName: 'asfasfas Attwata'
        }, {
            displayName: 'dima lglglglglgllg'
        }, {
            displayName: 'Dima AD'
        }, {
            displayName: 'Dima AS'
        },
    ]);

    useEffect(() => {
        let a = contacts
            .sort((a, b) => a.displayName !== b.displayName ? a.displayName < b.displayName ? -1 : 1 : 0);

        contacts.forEach(el => {
            const name = el.displayName.substr(0, 1).toUpperCase();
            if (name in contactsHashProt) {
                contactsHashProt[name].push(el);
                return
            }
            contactsHashProt[name] = [el];
        })
        setContactHash(contactsHashProt);
    }, [])

    return (
        <View>
            {
                Object.entries(contactHash).map(([key, v]) => {
                    return (
                        <View key={key} style={{marginBottom: 10}}>
                            <Text>{key}</Text>
                            {
                                v.map(el=>{
                                    return(
                                        <View key={el.displayName}>
                                            <Text>{el.displayName}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    )
                })
            }
        </View>
    );
};

const styles = StyleSheet.create({
    textLink: {
        // color: theme.colors.mainBlue //change theme color
        // borderBottomColor: theme.colors.mainBlue,
        borderBottomWidth: 1,
        fontSize: 14
    },
    buttonLinkButton: {
        borderColor: '#CBD2D9',
        borderWidth: 1,
        borderRadius: 5,
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    mr20: {
        marginRight: 20,
    },
    textLinkButton: {
        // color: theme.colors.mainBlue,
        textTransform: 'uppercase'
    },
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
ы A'
        }, {
            displayName: 'кеу A'
        }, {
            displayName: 'Dima A'
        }, {
            displayName: 'Asfasfas A'
        }, {
            displayName: 'asfasfas Attwata'
        }, {
            displayName: 'dima lglglglglgllg'
        }, {
            displayName: 'Dima AD'
        }, {
            displayName: 'Dima AS'
        },
    ]);

    useEffect(() => {
        let a = contacts
            .sort((a, b) => a.displayName !== b.displayName ? a.displayName < b.displayName ? -1 : 1 : 0);

        contacts.forEach(el => {
            const name = el.displayName.substr(0, 1).toUpperCase();
            if (name in contactsHashProt) {
                contactsHashProt[name].push(el);
                return
            }
            contactsHashProt[name] = [el];
        })
        setContactHash(contactsHashProt);
    }, [])

    return (
        <View>
            {
                Object.entries(contactHash).map(([key, v]) => {
                    return (
                        <View key={key} style={{marginBottom: 10}}>
                            <Text>{key}</Text>
                            {
                                v.map(el=>{
                                    return(
                                        <View key={el.displayName}>
                                            <Text>{el.displayName}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    )
                })
            }
        </View>
    );
};

