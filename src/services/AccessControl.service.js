/**
 * checkPermissions
 * @param userPermissions
 * @param allowedPermissions
 * @description check if at least 1 allowed permissions available in user permissions
 * @return {*}
 */
export const checkPermissions = (userPermissions, allowedPermissions) => allowedPermissions.reduce((acc, permission) => (acc) ? acc : userPermissions.includes(permission), false)
/**
 * checkExclusivePermissions
 * @param userPermissions
 * @param allowedPermissions
 * @description check exclusive permissions included in user user permissions
 * @return {*}
 */
export const checkExclusivePermissions = (userPermissions, allowedPermissions) => userPermissions.includes(...allowedPermissions)
