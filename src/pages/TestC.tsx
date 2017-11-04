import * as React from "react";
import {Text, View} from "react-native";

export interface TestCProps {
}

export interface TestCState {
}

export class TestC extends React.Component<TestCProps, TestCState> {
    constructor(props: Readonly<TestCProps>) {
        super(props);
    }

    public render() {
        return (
            <View style={{flex: 1, backgroundColor: "#BBBBBB", alignItems: "center", justifyContent: "center"}}>
                <Text>Preferences Page</Text>
            </View>
        )
    }
}
