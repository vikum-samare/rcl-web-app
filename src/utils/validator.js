import validate from "validate.js"
import loginRules from "./validatorRules/login"
import roleCreateRules from "./validatorRules/roleCreate"
import userCreateRules from "./validatorRules/userCreate"
import userListRules from "./validatorRules/userList"
import actionCreateRules from "./validatorRules/actionCreate"
import componentCreateRules from "./validatorRules/componentCreate"
import roleEditRules from "./validatorRules/roleEdit"
import userEditRules from "./validatorRules/userEdit"
import componentPermissionCreateRules from "./validatorRules/componentPermissionCreate"
import systemCreateRules from "./validatorRules/systemCreate"
import configUpdateRules from "./validatorRules/configUpdate"
import guestDetailsRules from "./validatorRules/guestDetails"
import availabilitySearchRules from "./validatorRules/availabilitySearch"
import billingAddressRules from "./validatorRules/billingAddress"
import paymentDetails from "./validatorRules/paymentDetails"

const rules = {
    ...loginRules,
    ...roleCreateRules,
    ...userCreateRules,
    ...userListRules,
    ...actionCreateRules,
    ...componentCreateRules,
    ...roleEditRules,
    ...userEditRules,
    ...componentPermissionCreateRules,
    ...systemCreateRules,
    ...configUpdateRules,
    ...guestDetailsRules,
    ...availabilitySearchRules,
    ...billingAddressRules,
    ...paymentDetails
}

const validator = (fieldName, value) => {
    const formValues = {}
    const formFields = {}
    formValues[fieldName] = value
    formFields[fieldName] = rules[fieldName]
    const result = validate(formValues, formFields)
    if (result) {
        return result[fieldName][0]
    }
    return null
}

validate.validators.optionalEmail = (value) => {
    if (value === "") {
        return null
    }
    return validate.single(value, { email: true })
}

export default validator
