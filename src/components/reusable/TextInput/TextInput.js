import React, { memo, useState, useCallback } from "react"
import PropTypes from "prop-types"
import { Input } from "antd"
import "./TextInput.stylesheet.sass"

const TextInput = memo((
    {
        onChange = () => { /* Nothing here */ },
        onFocus = () => { /* Nothing here */ },
        onBlur = () => { /* Nothing here */ },
        containerClassName = "",
        labelClassName = "",
        labelContainerClassName = "",
        requiredLabelClassname = "",
        inputClassname = "",
        errorClassName = "",
        errorMsg = "",
        name = "",
        data = "",
        label = "",
        required = false,
        isInvalid = false,
        ...props
    }
) => {

    const [isFocused, setIsFocused] = useState(false)

    const _handleOnChange = useCallback((event) => {
        const { value } = event.target
        if (data) onChange(value, name, event, data)
        else onChange(value, name, event)
    }, [])

    const _handleFocus = useCallback(() => {
        setIsFocused(true)
        if (onFocus) onFocus()
    }, [setIsFocused])

    const _handleBlur = useCallback(() => {
        setIsFocused(false)
        if (onBlur) onBlur()
    }, [setIsFocused])

    return (
        <div className={["input input-text", (isInvalid && !isFocused) ? "input--invalid" : "", containerClassName].join(" ")}>
            { (label || required) ? (
                <div className={["input__label-container", labelContainerClassName].join(" ")}>
                    {label ? <label className={["input__label-container__label", labelClassName].join(" ")}>{label}</label> : null}{ required ? <label className={["input__label-container__required-label", requiredLabelClassname].join(" ")}>*</label> : null }
                </div>
            ) : null }

            <Input onBlur={_handleBlur} onFocus={_handleFocus} className={["input__input", inputClassname].join(" ")} onChange={_handleOnChange} {...props} />
            { isInvalid && !isFocused ? <span className={["input__error", errorClassName].join(" ")}>{ errorMsg }</span> : null }
        </div>
    )

})

// No need default props, use ES6 defaults
TextInput.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    name: PropTypes.string,
    data: PropTypes.any,
    errorMsg: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    required: PropTypes.bool,
    isInvalid: PropTypes.bool,
    labelContainerClassName: PropTypes.string,
    containerClassName: PropTypes.string,
    labelClassName: PropTypes.string,
    errorClassName: PropTypes.string,
    inputClassname: PropTypes.string,
    requiredLabelClassname: PropTypes.string
}

export default TextInput
