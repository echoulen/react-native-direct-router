import * as React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {Router} from "../Router";

export interface FooterProps {
}

export interface FooterState {
}

export class Footer extends React.Component<FooterProps, FooterState> {
    public render() {
        return (
            <View style={{flexDirection: "row", padding: 10}}>
                <TouchableOpacity onPress={this.update("Route-A")} style={{flex: 1, alignItems: "center"}}>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.update("Route-B")} style={{flex: 1, alignItems: "center"}}>
                    <Text>List</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.update("Route-C")} style={{flex: 1, alignItems: "center"}}>
                    <Text>Preferences</Text>
                </TouchableOpacity>
            </View>
        );
    }

    private update(currentScene: string) {
        return () => {
            Router.go(currentScene);
        };
    }
}
