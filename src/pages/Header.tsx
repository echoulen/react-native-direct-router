import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Router} from "../Router";

export interface HeaderProps {
    params: {
        isShowBack: boolean;
        title: string;
    };
}

export interface HeaderState {
}

export class Header extends React.Component<HeaderProps, HeaderState> {
    public render() {
        return (
            <View style={styles.container}>
                {this.renderBackButton()}
                <Text style={styles.banner}>{this.props.params.title}</Text>
                <View style={{flex: 1}} />
            </View>
        );
    }

    private renderBackButton() {
        return this.props.params.isShowBack ? (
            <TouchableOpacity style={styles.backBtn} onPress={Router.back}>
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
        ) : <View style={{flex: 1}} />;
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 5,
        paddingTop: 30,
        paddingBottom: 10,
        backgroundColor: "green",
    },
    backBtn: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#dddddd",
    },
    backText: {
        color: "#dddddd",
        textAlign: "center",
    },
    banner: {
        flex: 3,
        textAlign: "center",
        color: "#dddddd",
        fontSize: 16,
    },
});
