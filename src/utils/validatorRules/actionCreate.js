const actionCreateRules = {
    actionCreateName: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:add_action.action_name_field_required_validation_message"
        }
    },
    actionCreateCode: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:add_action.code_field_required_validation_message"
        }
    }
}

export default actionCreateRules
