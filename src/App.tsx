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
    public static config: RouteConfig = {
        defaultSceneName: "Route-A",
        scenes: [
            {
                name: "Route-A",
                scene: TestA,
                header: Header,
                footer: Footer,
                params: {
                    isShowBack: false,
                    title: "My App",
                },
            },
            {
                name: "Route-B",
                scene: TestB,
                header: Header,
                footer: Footer,
                params: {
                    isShowBack: true,
                    title: "List",
                },
            },
        ],
    };
    public render() {
        return (
            <Router config={App.config} />
        );
    }
}

AppRegistry.registerComponent("reactNativePureRouter", () => App);
