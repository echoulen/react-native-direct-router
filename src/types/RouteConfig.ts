import {Component} from "react";

export type SceneRender = Component["constructor"];

export interface RouteConfigScene {
    name: string;
    scene: SceneRender;
    header?: SceneRender;
    footer?: SceneRender;
    params?: any;
}

export interface RouteConfig {
    scenes: RouteConfigScene[];
    defaultSceneName?: string;
}
