import React from "react"
import { Switch } from "react-router-dom"
import Route from "./Route"
import { Layout } from "antd"

import {Home} from "../pages/home"
import { MainLayout } from "../layout"

import appRoutes from "./route-groups/app"
import homeRoutes from "./route-groups/posts"



const routes = appRoutes.concat(
    homeRoutes
)

export default function Routes() {
    return (
        <MainLayout>
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        isPrivate={route.isPrivate}
                        component={route.sidebar}
                    />
                ))}
            </Switch>
            <Layout className="content-layout">
                <Switch>
                    {routes.map((route, index) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            isPrivate={route.isPrivate}
                            hasLoader
                            component={route.main}
                        />
                    ))}
                    {/* redirect user to login page if route does not exist and user is not authenticated */}
                    <Route component={Home} />
                </Switch>
                <Switch>
                    {routes.map((route, index) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            isPrivate={route.isPrivate}
                            component={route.footer}
                        />
                    ))}
                </Switch>
            </Layout>
            <Switch className="drawer">
                {routes.map((route, index) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        isPrivate={route.isPrivate}
                        component={route.drawer}
                    />
                ))}
            </Switch>
        </MainLayout>
    )
}
