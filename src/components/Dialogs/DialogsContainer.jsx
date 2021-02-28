import React, { useCallback, useState } from "react";
import { StyleSheet, Text, TextInput, View, SafeAreaView, SectionList, StatusBar, Dimensions, Button, Linking, TouchableOpacity } from "react-native";
import { BackspaceButton } from './BackspaceButton/index' //change import path

export const SelectList = () => {

    const windowHeight = Dimensions.get('window').height;
    //its Vertical paddings
    const [height, setHe] = useState(windowHeight / 100 * 40);

    const SetHeightScreen = () => {
        return {
            backgroundColor: 'red',
            paddingVertical: height / 8,
            width: 100,
        };
    };

    const OpenURLButton = ({buttonLinkButton, url, children, stylesText }) => {
        const handlePress = useCallback(async () => {
            await Linking.openURL(url);
        }, [url]);

        return (
            <TouchableOpacity onPress={handlePress} style={buttonLinkButton}>
                <Text style={stylesText}>{children}</Text>
            </TouchableOpacity>
        );
    };

    const supportedURL = 'https://www.google.com/';

    return (
        <View>
            <Text>
                My height - {height / 8}
            </Text>
            <View style={SetHeightScreen()}>
                <BackspaceButton />
            </View>

            <View style={{ backgroundColor: '#ECEEFE', paddingHorizontal: 55, flexDirection: "row", justifyContent: 'flex-start' }}>
                <Text >
                    By creating an account, you are agreeing
                    to our
                </Text>
                <OpenURLButton url={supportedURL} stylesText={styles.textLink}>
                    Trems of Use
                    </OpenURLButton>
                {/* <Text style={{color: theme.colors.mainBlue}}>&</Text>  */}
                <OpenURLButton url={supportedURL} stylesText={styles.textLink}>
                    Privacy Policy
                </OpenURLButton>
            </View>









            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flex: 1, marginTop: 9, borderBottomWidth: 1, borderBottomColor: '#CBD2D9' }}>

                </View>
                <Text style={{ color: '#002B36', marginTop: 25, marginBottom: 15, marginHorizontal: 9, textAlign: 'center', fontSize: 20 }}>
                    OR
                </Text>

                <View style={{ flex: 1, marginTop: 9, borderBottomWidth: 1, borderBottomColor: '#CBD2D9' }}>

                </View>
            </View>
            <View>
                <Text style={{ color: '#002B36', textAlign: 'center', marginBottom: 15 }}>
                    You can import your details from
                </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <OpenURLButton stylesText={styles.textLinkButton} buttonLinkButton={[styles.buttonLinkButton, styles.mr20]}>
                    Google
                    </OpenURLButton>
                <OpenURLButton stylesText={styles.textLinkButton} buttonLinkButton={styles.buttonLinkButton}>
                    Facebook
                    </OpenURLButton>
            </View>
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
    buttonLinkButton:{
        borderColor: '#CBD2D9',
        borderWidth: 1,
        borderRadius: 5,
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    mr20: {
        marginRight :20,
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
