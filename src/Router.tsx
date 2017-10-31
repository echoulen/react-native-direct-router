import * as React from "react";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {RouteConfig, RouteConfigScene} from "./types/RouteConfig";
import * as styles from "./RouterStyles";
import * as Rx from "rx";
import {routerStore} from "./RouterStore";
import {List} from "immutable";

export interface RouterProps {
    config?: RouteConfig;
}

export interface RouterState {
    headerScene?: string;
    currentScene?: string;
    footerScene?: string;
}

export class Router extends React.Component<RouterProps, RouterState> {
    public static go(scene: string): void {
        routerStore.updateCurrentScene(scene);
    }

    private disposables: List<Rx.IDisposable> = List();

    constructor(props: Readonly<RouterProps>) {
        super(props);
        this.state = {
            currentScene: props.config.defaultSceneName,
        };
    }

    public componentDidMount(): void {
        this.disposables.push(routerStore.currentScene().subscribe((scene) => this.onCurrentSceneChange(scene)));
    }

    public componentWillUnmount(): void {
        this.disposables.forEach((d) => d.dispose());
    }

    public render() {
        return (
            <View style={styles.container}>
                {this.renderHeaderScene()}
                <ScrollView>
                    {this.renderCurrentScene()}
                </ScrollView>
                {this.renderFooterScene()}
                {this.props.children}
            </View>
        );
    }

    private onCurrentSceneChange(currentScene: string): void {
        if (currentScene && currentScene !== this.state.currentScene) {
            this.setState({currentScene});
        }
    }

    private findCurrentSceneConfig(): RouteConfigScene {
        const scenes = List<RouteConfigScene>(this.props.config.scenes);
        const currentScene = scenes.find((scene) => scene.name === this.state.currentScene);
        if (!currentScene) {
            throw new Error(`${this.state.currentScene} route not found`);
        }

        return currentScene;
    }

    private renderHeaderScene() {
        const currentSceneConfig = this.findCurrentSceneConfig();
        if (currentSceneConfig && currentSceneConfig.header) {
            return React.createElement(currentSceneConfig.header as any);
        }
    }

    private renderCurrentScene() {
        const currentSceneConfig = this.findCurrentSceneConfig();
        return React.createElement(currentSceneConfig.scene as any);
    }

    private renderFooterScene() {
        const currentSceneConfig = this.findCurrentSceneConfig();
        if (currentSceneConfig && currentSceneConfig.footer) {
            return React.createElement(currentSceneConfig.footer as any);
        }
    }
}