const guestDetailsRules = {
    firstName: {
        presence: {
            allowEmpty: false,
            message: "^pages/direct-booking:guest_details.firstname_field_required_message"
        }
    },
    lastName: {
        presence: {
            allowEmpty: false,
            message: "^pages/direct-booking:guest_details.lastname_field_required_message"
        }
    },
    email: {
        presence: {
            allowEmpty: false,
            message: "^pages/direct-booking:guest_details.email_field_required_message"
        },
        email: {
            allowEmpty: false,
            message: "^pages/direct-booking:guest_details.email_format_validation_message"
        }
    },
    optionalEmail: { optionalEmail: "some options" }
}

export default guestDetailsRules
