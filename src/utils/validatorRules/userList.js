const userListRules = {
    userListFirstName: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:view_all_users.first_name_field_required_message"
        }
    },
    userListLastName: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:view_all_users.last_name_field_required_message"
        }
    },
    userListEmailPrimary: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:view_all_users.email_field_required_message"
        }
    },
    userListPassword: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:view_all_users.password_field_required_message"
        },
        length: {
            minimum: 8,
            message: "^pages/user-management:view_all_users.password_field_pattern_validation_message"
        },
        format: {
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            flags: "i",
            message: "^pages/user-management:view_all_users.password_field_pattern_validation_message"
        }
    }
}

export default userListRules
