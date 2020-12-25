import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Button } from "antd"

class CustomButton extends PureComponent {
    _handleOnClick = (e) => {
        const { onClick, data } = this.props
        if (data) onClick(e, data)
        else onClick(e)
    }
    render() {
        const { onClick, ...props } = this.props
        return <Button onClick={this._handleOnClick} {...props} />
    }
}

CustomButton.defaultProps = {
    onClick: () => { /* Nothing here */ }
}
CustomButton.propTypes = {
    onClick: PropTypes.func
}

export default CustomButton
