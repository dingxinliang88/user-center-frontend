export default [
  {
    name: '登录',
    path: '/user',
    layout: false,
    routes: [{ path: '/user/login', component: './User/Login' }],
  },
  {
    name: '注册',
    path: '/user',
    layout: false,
    routes: [{ path: '/user/register', component: './User/Register' }],
  },
  { name: '欢迎页面', path: '/welcome', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    name: '管理员页面',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', component: './Admin' },
      { path: '/admin/user-manager', component: './Admin/UserManager' },
    ],
  },
  { icon: 'table', path: '/list', component: './TableList', name: '表格页' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
