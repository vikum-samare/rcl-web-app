const availabilitySearchRules = {
    availabilitySearchBookerEmail: {
        presence: {
            allowEmpty: false,
            message: "^pages/direct-booking:booker_details.email_field_required_message"
        },
        email: {
            message: "^pages/direct-booking:booker_details.email_field_invalid_message"
        }
    },
    availabilitySearchBookerFirstName: {
        presence: {
            allowEmpty: false,
            message: "^pages/direct-booking:booker_details.booker_first_name_required_message"
        }
    },
    availabilitySearchBookerLastName: {
        presence: {
            allowEmpty: false,
            message: "^pages/direct-booking:booker_details.booker_last_name_required_message"
        }
    },
    availabilitySearchBookerContactNumber: {
        presence: {
            allowEmpty: true,
            message: "^pages/direct-booking:billing_address.telephone_number_field_required_message"
        },
        format: {
            pattern: /(^$)|^\+{0,1}([0-9])+$/,
            flags: "i",
            message: "^pages/direct-booking:billing_address.telephone_number_field_invalid_message"
        }
    },
    AvailabilitySearchPanelCheckIn: {
        presence: {
            allowEmpty: false,
            message: "^pages/direct-booking:availability.date_range_validation"
        }
    },
    AvailabilitySearchPanelCheckOut: {
        presence: {
            allowEmpty: false,
            message: "^pages/direct-booking:availability.date_range_validation"
        }
    },
    AvailabilitySearchPanelNights: {
        presence: {
            allowEmpty: false,
            message: "^pages/direct-booking:availability.date_range_validation"
        }
    }
}

export default availabilitySearchRules
