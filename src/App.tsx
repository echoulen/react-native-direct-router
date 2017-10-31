import * as React from "react";
import {Text, View, StyleSheet} from "react-native";

export interface AppProps {
}

export interface AppState {
}

export class App extends React.Component<AppProps, AppState> {
    public render() {
        return (
            <View style={styles.container}><Text>React Native Pure Router</Text></View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
    },
});
