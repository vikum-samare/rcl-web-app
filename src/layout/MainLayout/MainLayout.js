import React, { PureComponent } from "react"

class MainLayout extends PureComponent {

    render() {
        return (
            <div style={{ minHeight: "100vh" }} className="app-layout">
                { this.props.children }
            </div>
        )
    }
}
export default MainLayout
