export const APP_LOADING_STARTED = "APP_LOADING_STARTED"
export const APP_LOADING_COMPLETED = "APP_LOADING_COMPLETED"
// sidebar status
export const APP_SIDEBAR_TOGGLE = "APP_SIDE_BAR_TOGGLE"


export const appLoadingStarted = () => ({
    type: APP_LOADING_STARTED
})

export const appLoadingCompleted = () => ({
    type: APP_LOADING_COMPLETED
})

export const appSidebarMove = () => ({
    type: APP_SIDEBAR_TOGGLE
})
