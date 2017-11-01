import * as React from "react";
import {Text, View} from "react-native";

export interface TestAProps {
}

export interface TestAState {
}

export class TestA extends React.Component<TestAProps, TestAState> {
    public render() {
        return (
            <View style={{flex: 1, backgroundColor: "#EFEFEF", alignItems: "center", justifyContent: "center"}}>
                <Text>Home Page</Text>
            </View>
        );
    }
}
