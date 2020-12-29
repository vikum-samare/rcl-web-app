import React from "react"
import { Switch } from "react-router-dom"
import Route from "./Route"
import { Layout } from "antd"

import { PostList } from "../pages/post/post-list"
import { MainLayout } from "../layout"

import appRoutes from "./route-groups/app"


export default function Routes() {
    return (
        <MainLayout>
            <Layout className="content-layout">
                <Switch>
                    {appRoutes.map((route, index) => (
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
                    <Route component={PostList} />
                </Switch>
            </Layout>
        </MainLayout>
    )
}
