export const roles = {
  user: 'User',
  admin: 'Admin',
  approver: 'Approver',
  delegate: 'Delegate',
  departmentHead: 'Department Head',
  elevated: ['Admin', 'Approver', 'Delegate', 'Department Head'],
};

export function hasRequiredRoles(
  userRoles: string[],
  all: boolean,
  ...requiredRoles: string[]
): boolean {
  return all
    ? requiredRoles.every((r) => userRoles.includes(r))
    : requiredRoles.some((r) => userRoles.includes(r));
}
