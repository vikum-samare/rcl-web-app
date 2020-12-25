
class ErrorHandler {
    handelError(error) {
        // determineIfOperationalError
        return typeof error.isOperationalError !== "undefined" ? error.isOperationalError : false
    }
}

const handler = new ErrorHandler()
export default handler
