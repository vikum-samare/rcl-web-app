const systemCreateRules = {
    systemCreateName: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:create_new_system.system_name_field_required_message"
        }
    },
    systemCreateApiKey: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:create_new_system.apikey_field_required_message"
        }
    },
    systemCreateCode: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:create_new_system.code_field_required_message"
        }
    },
    systemCreateAccount: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:create_new_system.account_field_required_message"
        }
    },
    systemCreateStartDate: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:create_new_system.start_date_field_required_message"
        }
    },
    systemCreateEndDate: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:create_new_system.end_date_field_required_message"
        }
    }
}

export default systemCreateRules
