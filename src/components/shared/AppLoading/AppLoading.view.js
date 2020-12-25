import React, { PureComponent } from "react"
import { Layout, Row, Col } from "antd"
import "./AppLoading.stylesheet.sass"

class AppLoadingView extends PureComponent {
    render() {
        return (
            <Layout className="app-loader">
                <Row className="app-loader__holder" type="flex" justify="center" align="middle">
                    <Col className="app-loader__holder__spinner" xs={24} >
                        <div className="spinner" />
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default AppLoadingView
