import * as React from "react";
import {ScrollView, StyleSheet, Text, TouchableOpacity} from "react-native";
import {Range} from "immutable";

export interface TestBProps {
}

export interface TestBState {
}

export class TestB extends React.Component<TestBProps, TestBState> {
    private static renderItem(num: number, index: number) {
        return (
            <TouchableOpacity key={index} style={styles.item}>
                <Text>ITEM - {num}</Text>
            </TouchableOpacity>
        );
    }

    public render() {
        return (
            <ScrollView>
                {Range(1, 51).toArray().map(TestB.renderItem)}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#DEDEDE",
    },
});
