const loginRules = {
    loginUsername: {
        presence: {
            allowEmpty: false,
            message: "^pages/login:username_required_validation_message"
        }
    },

    loginPassword: {
        presence: {
            allowEmpty: false,
            message: "^pages/login:password_required_validation_message"
        },
        length: {
            minimum: 6,
            message: "^pages/login:password_length_validation_message"
        },
        format: {
            pattern: /^.*[0-9!"£$%^&*(){}:;'@#~,<.>/?|\\]+.*$/,
            flags: "i",
            message: "^pages/login:password_pattern_validation_message"
        }
    }
}

export default loginRules
