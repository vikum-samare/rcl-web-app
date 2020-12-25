class AlertService {
    callbacks = {}
    cleanupTime = 3 * 1000

    /**
     * @param {string} eventName
     * @param {*} data
     */
    triggerEvent(eventName, data = { type: "info", message: null, description: null }) {
        if (this.callbacks[eventName]) {
            Object.keys(this.callbacks[eventName]).forEach((id) => {
                this.callbacks[eventName][id](data)
            })
        }
    }

    /**
     * Error alert
     * @param data
     */
    triggerError(data) {
        const alertData = { message: null, description: null, closable: true, type: "error", ...data }
        this.triggerEvent("alert", alertData)
        setTimeout(() => this.triggerCleanup(data), this.cleanupTime)
    }

    triggerWarning(data) {
        const alertData = { message: null, description: null, closable: true, type: "warning", ...data }
        this.triggerEvent("alert", alertData)
        setTimeout(() => this.triggerCleanup(data), this.cleanupTime)
    }

    triggerSuccess(data) {
        const alertData = { message: null, description: null, closable: true, type: "success", ...data }
        this.triggerEvent("alert", alertData)
        setTimeout(() => this.triggerCleanup(data), this.cleanupTime)
    }

    triggerCleanup(data) {
        const alertData = { message: "clean", description: "clean", closable: true, type: "clean" }
        this.triggerEvent("alert", alertData)
    }

    /**
     * @param {string} eventName name of event
     * @param {string} id callback identifier
     * @param {Function} callback
     */
    listenEvent(eventName, id, callback) {
        if (typeof this.callbacks[eventName] === "undefined") this.callbacks = { ...this.callbacks, [eventName]: {}}
        this.callbacks[eventName][id] = callback
    }

    /**
     * @param {string} eventName name of event
     * @param {string} id callback identifier
     */
    unListenEvent(eventName, id) {
        delete this.callbacks[eventName][id]
    }
}

const alertService = new AlertService()
export default alertService

