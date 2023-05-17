// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getLoginUserVO GET /api/user/current */
export async function getLoginUserVOUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseUserVO_>('/api/user/current', {
    method: 'GET',
    ...(options || {}),
  });
}

/** deleteUser DELETE /api/user/delete */
export async function deleteUserUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUserUsingDELETEParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/user/delete', {
    method: 'DELETE',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listUserVO GET /api/user/list */
export async function listUserVOUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListUserVO_>('/api/user/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** userLogin POST /api/user/login */
export async function userLoginUsingPOST(
  body: API.UserLoginRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserVO_>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** userLogout PUT /api/user/logout */
export async function userLogoutUsingPUT(options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean_>('/api/user/logout', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** queryUser GET /api/user/query */
export async function queryUserUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.queryUserUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListUser_>('/api/user/query', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** userRegister POST /api/user/register */
export async function userRegisterUsingPOST(
  body: API.UserRegisterRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
