import * as React from "react";
import {Text, View} from "react-native";

export interface HeaderProps {
}

export interface HeaderState {
}

export class Header extends React.Component<HeaderProps, HeaderState> {
    public render() {
        return (
            <View style={{flexDirection: "row", padding: 5, paddingTop: 20, backgroundColor: "green"}}>
                <Text style={{flex: 1}}>Back</Text>
                <Text style={{flex: 1, textAlign: "center"}}>Test App</Text>
                <View style={{flex: 1}} />
            </View>
        );
    }
}
