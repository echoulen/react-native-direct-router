import * as React from "react";
import {Text, View} from "react-native";

export interface TestBProps {
}

export interface TestBState {
}

export class TestB extends React.Component<TestBProps, TestBState> {
    public render() {
        return <View><Text>BBB</Text></View>;
    }
}
