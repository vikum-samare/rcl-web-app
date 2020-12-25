import { format } from "validate.js"

const billingAddressRules = {
    billingAddressTitle: {
        presence: {
            allowEmpty: false,
            message: "^pages/direct-booking:billing_address.title_field_required_message"
        }
    },
    billingAddressFirstName: {
        presence: {
            allowEmpty: false,
            message: "^pages/direct-booking:billing_address.first_name_field_required_message"
        }
    },
    billingAddressLastName: {
        presence: {
            allowEmpty: false,
            message: "^pages/direct-booking:billing_address.last_name_field_required_message"
        }
    },
    billingAddressCompanyName: {
        presence: {
            allowEmpty: false,
            message: "^pages/direct-booking:billing_address.company_name_field_required_message"
        }
    },
    billingAddressAddressFirstLine: {
        presence: {
            allowEmpty: false,
            message: "^pages/direct-booking:billing_address.address_field_required_message"
        }
    },
    billingAddressCity: {
        presence: {
            allowEmpty: false,
            message: "^pages/direct-booking:billing_address.city_or_town_field_required_message"
        }
    },
    billingAddressPostalCode: {
        presence: {
            allowEmpty: false,
            message: "^pages/direct-booking:billing_address.postcode_or_zip_code_required_message"
        }
    },
    billingAddressCountry: {
        presence: {
            allowEmpty: false,
            message: "^pages/direct-booking:billing_address.country_field_required_message"
        }
    },
    billingAddressPhoneNumber: {
        presence: {
            allowEmpty: true,
            message: "^pages/direct-booking:billing_address.telephone_number_field_required_message"
        },
        format: {
            pattern: /(^$)|^\+{0,1}([0-9])+$/,
            flags: "i",
            message: "^pages/direct-booking:billing_address.telephone_number_field_invalid_message"
        }
    }
}

export default billingAddressRules
