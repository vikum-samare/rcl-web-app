import React, { PureComponent, Suspense } from "react"
import { Provider } from "react-redux"
import { Router, Switch } from "react-router-dom"
import "./services/i18n"

// Design system import
import "./designSystem.less"

import Routes from "./routes"
import history from "./services/history"
import "./global.sass"
import "./App.sass"
import AppLoading from "./components/shared/AppLoading"

import store from "./configs/configureStore"

export default class App extends PureComponent {
    render() {
        return (
            <Suspense fallback={<AppLoading />}>
                <Provider store={store}>
                    <Router history={history}>
                        <Routes />
                    </Router>
                </Provider>
            </Suspense>
        )
    }
}
