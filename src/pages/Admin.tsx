import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import { history } from '@umijs/max';
import { Alert, Button, Card, Typography } from 'antd';
import { Divider } from 'rc-menu';
import React from 'react';

const Admin: React.FC = () => {
  /**
   * 处理事件跳转
   */
  const handleBtnClick = () => {
    history.push('/admin/user-manager');
  };
  return (
    <PageContainer
      header={{
        title: '管理员页面',
        ghost: true,
        extra: [
          <Button key="3" type="primary" onClick={handleBtnClick}>
            用户管理
          </Button>,
        ],
      }}
      tabProps={{
        type: 'editable-card',
        hideAdd: true,
        onEdit: (e, action) => console.log(e, action),
      }}
    >
      <Card>
        <Alert
          message={'更快更强的重型组件，已经发布。'}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 48,
          }}
        />
        <Typography.Title
          level={2}
          style={{
            textAlign: 'center',
          }}
        >
          <SmileTwoTone /> User Center <HeartTwoTone twoToneColor="#eb2f96" /> You
          <Divider />
          点击右上角进入子菜单界面
        </Typography.Title>
      </Card>
      <p
        style={{
          textAlign: 'center',
          marginTop: 24,
        }}
      >
        Want to add more pages? Please refer to{' '}
        <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
          use block
        </a>
        。
      </p>
    </PageContainer>
  );
};
export default Admin;
