import React, { memo } from "react"
import { useSelector } from "react-redux"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"
import Loader from "../components/shared/Loader"
import ErrorBoundary from "../components/shared/ErrorBoundary"


const RouteWrapper = memo(({
    component: Component,
    isPrivate = false,
    hasLoader = false,
    ...rest
}) => {

    const isAuthenticated = useSelector(state => state.session.isAuthenticated)
    /**
     * If not included on both previous cases, redirect user to the desired route.
     */
    return (
        <ErrorBoundary>
            { hasLoader ? <Loader /> : null}
            <Route {...rest} component={Component} />
        </ErrorBoundary>
    )
})

RouteWrapper.propTypes = {
    component: PropTypes.any.isRequired,
    isPrivate: PropTypes.bool,
    hasLoader: PropTypes.bool
}

export default RouteWrapper
