# react-native-direct-router

[![Build Status](https://travis-ci.org/echoulen/react-native-direct-router.svg?branch=master)](https://travis-ci.org/echoulen/react-native-direct-router)
[![npm version](https://badge.fury.io/js/react-native-direct-router.svg)](https://badge.fury.io/js/react-native-direct-router)
[![license](https://img.shields.io/github/license/echoulen/react-native-direct-router.svg)](https://opensource.org/licenses/MIT)

![](https://media.giphy.com/media/l1JLJOylI3HmRgBBC/giphy.gif)

### npm
`npm install react-native-direct-router --save`

### yarn
`yarn add react-native-direct-router`

### Config
- name: string (required)
- scene: React.Component (required)
- header: React.Component (optional)
- footer: React.Component (optional)
- params: Object (optional)

### API
```
Router.go("Route-A")
```
> go to scene which name is `Route-A`


```
Router.back()
```
> back to previous route

#### Example with typescript
```typescript
import {Router, RouteConfig} from "react-native-direct-router";
import {TestA} from "./src/pages/TestA";
import {TestB} from "./src/pages/TestB";
import {Header} from "./src/pages/Header";
import {Footer} from "./src/pages/Footer";

export class App extends React.Component<any, any> {
    public static config: RouteConfig = {
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
        return <Router config={App.config} />;
    }
}
```

#### Example with javascript
```javascript
import {Router, RouteConfig} from "react-native-direct-router";
import {TestA} from "./src/pages/TestA";
import {TestB} from "./src/pages/TestB";
import {Header} from "./src/pages/Header";
import {Footer} from "./src/pages/Footer";

export class App extends React.Component {
    static config: RouteConfig = {
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
    render() {
        return <Router config={App.config} />;
    }
}
```
