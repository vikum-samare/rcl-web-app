import React, { memo } from "react"
import { useSelector } from "react-redux"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"
import Loader from "../components/shared/Loader"
import ErrorBoundary from "../components/shared/ErrorBoundary"
import { getCurrentPath } from "../utils/domains"


const RouteWrapper = memo(({
    component: Component,
    isPrivate = false,
    hasLoader = false,
    ...rest
}) => {

    const isAuthenticated = useSelector(state => state.session.isAuthenticated)

    /**
     * Redirect user to SignIn page if he tries to access a private route
     * without authentication.
     */
    if (isPrivate && !isAuthenticated) {
        const path = getCurrentPath()
        const redirectPath = path !== "/" ? `/?destination=${path}` : path
        return <Redirect to={redirectPath} />
    }

    /**
     * Redirect user to Main page if he tries to access a non private route
     * (SignIn or SignUp) after being authenticated.
     */
    if (!isPrivate && isAuthenticated) {
        return <Redirect to="/home" />
    }

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
