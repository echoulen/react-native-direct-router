import "react-native";
import * as React from "react";
// Note: test renderer must be required after react-native.
import * as renderer from "react-test-renderer";
import {Router} from "../Router";
import {routerStore} from "../RouterStore";
import {App} from "../App";

it("should renders correctly", () => {
    const router = renderer.create(
        <Router config={App.config}/>,
    );
});

it("should Router.go correctly", () => {
    Router.go("Route-A");
    expect(routerStore.getCurrentScene()).toBe("Route-A");
});

it("should Router.back correctly", () => {
    Router.go("Route-A");
    expect(routerStore.getCurrentScene()).toBe("Route-A");
    Router.go("Route-B");
    expect(routerStore.getCurrentScene()).toBe("Route-B");
    Router.back();
    expect(routerStore.getCurrentScene()).toBe("Route-A");
});
