import React from 'react';
import { Button, ThemeProvider, Header } from 'react-native-elements';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

const Item = () => {
    return (
        <ThemeProvider>
            <Text>This is the list Item.</Text>
        </ThemeProvider>
    );
};

export default Item;