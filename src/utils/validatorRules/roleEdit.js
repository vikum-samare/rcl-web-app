const roleEditRules = {
    roleEditRoleName: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:edit_role.role_name_required_validation_message"
        }
    },
    roleEditParentRole: {
        presence: {
            allowEmpty: false,
            message: "^pages/user-management:edit_role.parent_role_required_validation_message"
        }
    }
}

export default roleEditRules
