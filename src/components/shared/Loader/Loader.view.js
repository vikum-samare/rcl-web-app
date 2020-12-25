import React, { memo } from "react"
import { Layout, Row, Col } from "antd"
import { useSelector } from "react-redux"
import "./Loader.stylesheet.sass"

const LoaderView = memo(() => {
    const isLoading = useSelector(state => state.app.appLoading)
    return isLoading ? (
        <Layout className="loader">
            <Row className="loader__holder" type="flex" justify="center" align="middle">
                <Col className="loader__holder__spinner" xs={24} >
                    <div className="spinner" />
                </Col>
            </Row>
        </Layout>
    ) : null
})

export default LoaderView
