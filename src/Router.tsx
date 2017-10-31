import * as React from "react";
import {ImageStyle, ScrollView, TextStyle, View, ViewStyle} from "react-native";
import {RouteConfig, RouteConfigScene} from "./types/RouteConfig";
import * as styles from "./RouterStyles";
import * as Rx from "rx";
import {routerStore} from "./RouterStore";
import {List} from "immutable";

export interface RouterProps {
    config?: RouteConfig;
    style?: {
        [key: string]: ViewStyle | TextStyle | ImageStyle;
    };
}

export interface RouterState {
    headerScene?: string;
    currentScene?: string;
    footerScene?: string;
}

export class Router extends React.Component<RouterProps, RouterState> {
    public static go(scene: string, params?: any): void {
        routerStore.updateCurrentScene(scene, params);
    }

    public static back(): void {
        routerStore.popScene();
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
            <View style={[styles.container, this.props.style]}>
                {this.renderHeaderScene()}
                <ScrollView>
                    {this.renderCurrentScene()}
                </ScrollView>
                {this.renderFooterScene()}
            </View>
        );
    }

    private onCurrentSceneChange(currentScene: string): void {
        if (currentScene !== this.state.currentScene) {
            this.setState({currentScene});
        }
    }

    private findCurrentSceneConfig(): RouteConfigScene {
        const scenes = List<RouteConfigScene>(this.props.config.scenes);
        const targetScene = this.state.currentScene || this.props.config.defaultSceneName;
        const currentScene = scenes.find((scene) => scene.name === targetScene);
        if (!currentScene) {
            throw new Error(`Route ${this.state.currentScene} not found`);
        }

        return currentScene;
    }

    private renderHeaderScene() {
        const currentSceneConfig = this.findCurrentSceneConfig();
        if (currentSceneConfig && currentSceneConfig.header) {
            return React.createElement(currentSceneConfig.header as any, this.getParams());
        }
    }

    private renderCurrentScene() {
        const currentSceneConfig = this.findCurrentSceneConfig();
        return React.createElement(currentSceneConfig.scene as any, this.getParams());
    }

    private renderFooterScene() {
        const currentSceneConfig = this.findCurrentSceneConfig();
        if (currentSceneConfig && currentSceneConfig.footer) {
            return React.createElement(currentSceneConfig.footer as any, this.getParams());
        }
    }

    private getParams(): {params: any} {
        const currentSceneConfig = this.findCurrentSceneConfig();
        const params = Object.assign({}, currentSceneConfig.params || {}, routerStore.getParams());
        return {params};
    }
}
