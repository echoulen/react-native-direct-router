import "react-native";
import * as React from "react";

// Note: test renderer must be required after react-native.
import * as renderer from "react-test-renderer";
import {App} from "../App";

it("renders correctly", () => {
    renderer.create(
        <App />,
    );
});
