import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  const defaultMessage = 'CodeJuzi憨憨出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'User Center Pro',
          title: 'User Center Pro',
          href: 'https://codejuzi.icu',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/dingxinliang88',
          blankTarget: true,
        },
        {
          key: 'User Center',
          title: 'User Center',
          href: 'https://codejuzi.icu',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
