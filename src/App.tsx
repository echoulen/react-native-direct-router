import {AppRegistry} from "react-native";
import * as React from "react";
import {Router} from "./Router";
import {RouteConfig} from "./types/RouteConfig";
import {TestA} from "./pages/TestA";
import {TestB} from "./pages/TestB";
import {Footer} from "./pages/Footer";
import {Header} from "./pages/Header";

export interface AppProps {
}

export interface AppState {
}

export class App extends React.Component<AppProps, AppState> {
    private config: RouteConfig = {
        defaultSceneName: "Route-A",
        scenes: [
            {
                name: "Route-A",
                scene: TestA,
                header: Header,
                footer: Footer,
            },
            {
                name: "Route-B",
                scene: TestB,
                header: Header,
                footer: Footer,
            },
        ],
    };
    public render() {
        return (
            <Router config={this.config} />
        );
    }
}

AppRegistry.registerComponent("reactNativePureRouter", () => App);
