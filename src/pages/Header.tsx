import * as React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {Router} from "../Router";

export interface HeaderProps {
}

export interface HeaderState {
}

export class Header extends React.Component<HeaderProps, HeaderState> {
    public render() {
        return (
            <View style={{flexDirection: "row", padding: 5, paddingTop: 20, backgroundColor: "green"}}>
                <TouchableOpacity style={{flex: 1}} onPress={Router.back}><Text>Back</Text></TouchableOpacity>
                <Text style={{flex: 1, textAlign: "center"}}>Test App</Text>
                <View style={{flex: 1}} />
            </View>
        );
    }
}
