import { listUserVOUsingGET } from '@/services/user-center/userController';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Image, message, Tag } from 'antd';
import { useRef } from 'react';

const columns: ProColumns<API.UserVO>[] = [
  {
    title: 'id',
    dataIndex: 'id',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '用户昵称',
    dataIndex: 'userName',
    copyable: true,
  },
  {
    title: '用户账号',
    dataIndex: 'userAccount',
    copyable: true,
  },
  {
    title: '头像',
    dataIndex: 'userAvatar',
    render: (_, record) => (
      <div>
        <Image src={record.userAvatar} width={50} />
      </div>
    ),
  },
  {
    title: '性别',
    dataIndex: 'gender',
    copyable: false,
    valueEnum: {
      0: { text: <Tag color="success">男</Tag> },
      1: { text: <Tag color="error">女</Tag> },
    },
    align: 'center',
  },
  {
    title: '电话',
    dataIndex: 'phone',
    copyable: true,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    copyable: true,
  },
  {
    title: '角色',
    dataIndex: 'userRole',
    valueType: 'select',
    valueEnum: {
      0: { text: '普通用户', status: 'Default' },
      1: {
        text: '管理员',
        status: 'Success',
      },
      2: {
        text: '被封号',
        status: 'Error',
      },
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    valueType: 'dateTime',
  },

  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          // todo 编辑用户
          message.info('尚未开发～～');
        }}
      >
        编辑
      </a>,
      <a href={record.userAvatar} target="_blank" rel="noopener noreferrer" key="view">
        查看头像
      </a>,
    ],
  },
];

export default () => {
  const actionRef = useRef<ActionType>();
  // @ts-ignore
  return (
    <ProTable<API.UserVO>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params = {}, sort, filter) => {
        console.log(sort, filter);
        const userList = await listUserVOUsingGET();
        return {
          data: userList?.data,
        };
      }}
      editable={{
        type: 'multiple',
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        onChange(value) {
          console.log('value: ', value);
        },
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 5,
        onChange: (page) => console.log(page),
      }}
      dateFormatter="string"
      headerTitle="高级表格"
    />
  );
};
