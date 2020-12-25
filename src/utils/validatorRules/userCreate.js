const userCreateRules = {
    userCreateTitle: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:create_new_user.title_field_required_message"
        }
    },
    userCreateFirstName: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:create_new_user.first_name_field_required_message"
        }
    },
    userCreateLastName: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:create_new_user.last_name_field_required_message"
        }
    },
    userCreateUsername: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:create_new_user.username_field_required_message"
        }
    },
    userCreateEmailPrimary: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:create_new_user.email_field_required_message"
        }
    },
    userCreatePhone: {
        presence: {
            allowEmpty: true,
            message: "^pages/user-management:create_new_user.phone_number_field_required_message"
        }
    },
    userCreatePassword: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:create_new_user.password_field_required_message"
        },
        length: {
            minimum: 8,
            message: "^pages/user-management:create_new_user.password_field_pattern_validation_message"
        },
        format: {
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            flags: "i",
            message: "^pages/user-management:create_new_user.password_field_pattern_validation_message"
        }
    }
}

export default userCreateRules
