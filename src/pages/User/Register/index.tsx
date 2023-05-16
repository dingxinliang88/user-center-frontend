import Footer from '@/components/Footer';
import { userRegisterUsingPOST } from '@/services/user-center/userController';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { Helmet, history, Link } from '@umijs/max';
import { message, Tabs } from 'antd';
import React, { useState } from 'react';
import Settings from '../../../../config/defaultSettings';

const Login: React.FC = () => {
  const [type, setType] = useState<string>('account');
  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    };
  });
  const handleSubmit = async (values: API.UserRegisterRequest) => {
    const { userPassword, checkedPassword } = values;
    if (userPassword !== checkedPassword) {
      message.error('两次输入的密码不一致');
      return;
    }
    try {
      // 注册
      const res = await userRegisterUsingPOST({
        ...values,
      });
      if (res.code === 0) {
        const defaultLoginSuccessMessage = '注册成功！';
        message.success(defaultLoginSuccessMessage);
        // 回跳到登录页面
        const query = history.location;
        history.push('/user/login', query);
        return;
      } else {
        message.error(res.message);
      }
    } catch (error) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };
  return (
    <div className={containerClassName}>
      <Helmet>
        <title>
          {'注册'}- {Settings.title}
        </title>
      </Helmet>
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          submitter={{
            searchConfig: {
              submitText: '注册',
            },
          }}
          logo={<img alt="logo" src="/logo.svg" />}
          title="User Center"
          subTitle={'User Center 用户管理中心'}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.UserRegisterRequest);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: '注册账号',
              },
            ]}
          />
          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={'请输入账号'}
                rules={[
                  {
                    required: true,
                    message: '账号是必填项！',
                  },
                  {
                    max: 8,
                    type: 'string',
                    message: '账号不能大于8位',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '密码不能小于8位',
                  },
                ]}
              />
              <ProFormText.Password
                name="checkedPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'请再次输入密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '密码不能小于8位',
                  },
                ]}
              />
            </>
          )}

          <div
            style={{
              marginBottom: 24,
            }}
          >
            <Link to="/user/login">已经有账号了？登录</Link>
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
