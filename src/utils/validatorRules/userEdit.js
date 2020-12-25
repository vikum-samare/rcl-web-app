const userEditRules = {
    userEditTitle: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:edit_user.title_field_required_message"
        }
    },
    userEditFirstName: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:edit_user.first_name_field_required_message"
        }
    },
    userEditLastName: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:edit_user.last_name_field_required_message"
        }
    },
    userEditUsername: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:edit_user.username_field_required_message"
        }
    },
    userEditEmailPrimary: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:edit_user.email_field_required_message"
        }
    },
    userEditPassword: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:edit_user.password_field_required_message"
        },
        length: {
            minimum: 8,
            message: "^pages/user-management:edit_user.password_field_pattern_validation_message"
        },
        format: {
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            flags: "i",
            message: "^pages/user-management:edit_user.password_field_pattern_validation_message"
        }
    },
    userEditNewPassword: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:edit_user.password_field_required_message"
        },
        length: {
            minimum: 8,
            message: "^pages/user-management:edit_user.password_field_pattern_validation_message"
        },
        format: {
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            flags: "i",
            message: "^pages/user-management:edit_user.password_field_pattern_validation_message"
        }
    },
    userEditPhone: {
        presence: {
            allowEmpty: true,
            message: "^pages/user-management:edit_user.phone_number_field_pattern_validation_message"
        }
    }
}

export default userEditRules
