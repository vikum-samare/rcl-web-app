const roleCreateRules = {
    roleCreateRoleName: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:create_new_role.role_name_required_validation_message"
        }
    },
    selectedParentRole: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:create_new_role.parent_role_required_validation_message"
        }
    }
}

export default roleCreateRules
