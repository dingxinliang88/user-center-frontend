/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.UserVO } | undefined) {
  const { currentUser } = initialState ?? {};
  const ADMIN_ROLE = 1;
  return {
    canAdmin: currentUser && currentUser.userRole === ADMIN_ROLE,
  };
}
