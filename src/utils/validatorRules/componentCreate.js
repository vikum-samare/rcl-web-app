const componentCreateRules = {
    componentCreateName: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:add_component.component_name_required_validation_message"
        }
    },
    componentCreateCode: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:add_component.code_required_validation_message"
        }
    },
    ComponentCreateComponentParent: {
        presence: {
            allowEmpty: true,
            message: "^pages/user-management:add_component.component_parent_required_validation_message"
        }
    }
}

export default componentCreateRules
